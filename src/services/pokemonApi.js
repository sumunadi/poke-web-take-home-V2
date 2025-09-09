import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2";

// very light concurrency limiter (prevents hammering the API)
async function mapWithLimit(items, limit, mapper) {
  if (!Array.isArray(items)) throw new Error("mapWithLimit: items must be an array");

  const results = new Array(items.length);
  let i = 0;

  async function worker() {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await mapper(items[idx], idx);
    }
  }
  const workers = new Array(Math.min(limit, items.length)).fill(0).map(worker);
  await Promise.all(workers);
  return results;
}

// Using cahceing so when we re filter type , we arent repeating calls
function cacheGet(key) {
  const raw = sessionStorage.getItem(key);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
function cacheSet(key, value) {
  sessionStorage.setItem(key, JSON.stringify(value));
}

// Pokemon List with name + url
export async function getPokemonList(limit = 151) {
  const cacheKey = `pokemon:list:${limit}`;
  const cached = cacheGet(cacheKey);
  if (cached) return cached;

  const { data } = await axios.get(`${BASE_URL}/pokemon?limit=${limit}`);
  cacheSet(cacheKey, data.results);
  return data.results;
}


//get pokemon details, using the URL(filtered selection) or Name
export async function getPokemonDetails(urlOrName) {
  const key =
    typeof urlOrName === "string" && urlOrName.includes("http")
      ? urlOrName
      : `${BASE_URL}/pokemon/${urlOrName}`;

  const cacheKey = `pokemon:detail:${key}`;
  const cached = cacheGet(cacheKey);
  if (cached) return cached;

  const { data } = await axios.get(key);

  //Pokenom details 
  const details = {
    id: data.id,
    name: data.name,
    height: data.height, // api sends decimeters, we converted to m in util/transform
    weight: data.weight, // api sends hectograms, we converted to kg in util/transform
    types: data.types.map((type) => type.type.name),
    stats: Object.fromEntries(data.stats.map((stats) => [stats.stat.name, stats.base_stat])),
    sprite:
      data.sprites?.other?.["official-artwork"]?.front_default ||
      data.sprites?.front_default ||
      null,
  };

  cacheSet(cacheKey, details);
  return details;
}

export async function getFirstNPokemonWithDetails(n = 151) {
  const list = await getPokemonList(n);
  // limit concurrency to 8, to not overload the api
  return mapWithLimit(list, 8, (p) => getPokemonDetails(p.url));
}