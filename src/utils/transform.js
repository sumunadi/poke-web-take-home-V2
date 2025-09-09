// Counts number of pokemon in a type
export function buildTypeCounts(pokemon) {
  const counts = {};
  for (const p of pokemon) {
    for (const t of p.types) counts[t] = (counts[t] || 0) + 1;
  }
  return counts;
}

//Basic stats to be used for stat chart.
const STAT_KEYS = ["hp","attack","defense","special-attack","special-defense","speed"];

//calculate averafe base stats across all the pokemon
export function averageStats(pokemon) {
  if (!Array.isArray(pokemon) || pokemon.length === 0) {
    // return zeros 
    return Object.fromEntries(STAT_KEYS.map(stat => [stat, 0]));
  }

  const totals = Object.fromEntries(STAT_KEYS.map(stat => [stat, 0]));
  let count = 0;

  for (const poki of pokemon) {
    if (!poki?.stats) continue;
    count++;
    for (const stat of STAT_KEYS) {
      const value = Number(poki.stats?.[stat]) || 0;
      totals[stat] += value;
    }
  }

  if (count === 0) return Object.fromEntries(STAT_KEYS.map(stat => [stat, 0]));

  const averages = {};
  for (const stat of STAT_KEYS) {
    averages[stat] = Math.round(totals[stat] / count);
  }
  return averages;
}

//Filter pokemon by type
export function filterByTypes(pokemon, selectedTypes) {
  if (!selectedTypes.length) return pokemon;
  return pokemon.filter(poki => poki.types.some(type => selectedTypes.includes(type)));
}

//Filter pokmon by searching
export function searchByName(pokemon, searchTerm) {
  if (!searchTerm) return pokemon;
  const name = searchTerm.trim().toLowerCase();
  return pokemon.filter(poki => (poki.name || "").toLowerCase().includes(name));
}
