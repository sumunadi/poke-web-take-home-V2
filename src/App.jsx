import React, { useEffect, useMemo, useState } from "react";
import { getFirstNPokemonWithDetails } from "./services/pokemonApi";
import TypeFilter from "./components/TypeFilter.jsx";
import TypeDistribution from "./components/TypeDistribution.jsx";
import AvgStatsRadar from "./components/AvgStatsRadar.jsx";
import SummaryCards from "./components/SummaryCards.jsx";
import SearchResult from "./components/SearchResult.jsx";
import { filterByTypes, searchByName } from "./utils/transform";

function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [types, setTypes] = useState([]); //state to set types (muli select)
  const [search, setSearch] = useState(""); //state for name search
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //Load first 151 pokemon
   async function loadData() {
    try {
      setLoading(true);
      setError(null);
      const data = await getFirstNPokemonWithDetails(151);
      setAllPokemon(data);
    } catch (err) {
      console.error(err);
      setError('Failed to load Pokémon data. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  //added seperate useEfeect to run without dependency to call loadData, cleaner 
  useEffect(() => {
    loadData();
  }, []);

  const visible = useMemo(() => {
    const byType = filterByTypes(allPokemon, types);
    return searchByName(byType, search);
  }, [allPokemon, types, search]);

  useEffect(() => setFiltered(visible), [visible]);

  //Loading and error handling, oif failed to load 151 pokemon for some reason display try again button to call again.
  if (loading) {
    return (
      <div className="container">
        <div className="header">
          <h1>🚀 Pokémon Analytics Dashboard</h1>
          <p>Interactive data visualization and analysis platform</p>
        </div>
        <div className="loading">Loading Pokémon data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="header">
          <h1>Pokémon Analytics Dashboard</h1>
          <p>Interactive data visualization and analysis platform</p>
        </div>
        <div className="error">{error}</div>
        <button onClick={() => window.location.reload()}>Try Again</button> 
      </div>
    );
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Pokémon Analytics Dashboard</h1>
        <p>Interactive data visualization and analysis platform</p>
      </div>

      {/* Controls */}
      <div className="controls">
        <TypeFilter selected={types} onChange={setTypes} />
        <div className="card">
          <h3 className="chart-title">Search</h3>
          <input
            type="text"
            placeholder="Search by name…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input"
          />
          <div className="hint">
            Showing <b>{filtered.length}</b> of {allPokemon.length}
          </div>
        </div>
      </div>
      {search && <SearchResult data={filtered} />}

      <SummaryCards data={filtered} />

      {
      filtered.length === 0 && (
  <div className="card" style={{ margin: "1rem 0" }}>
    <div className="hint">
      No results. Try clearing some filters or search .
    </div>
  </div>
)}
  {/* Charts */}
      <div className="dashboard-grid">
        <TypeDistribution data={filtered} />
        <AvgStatsRadar data={filtered} />
      </div>

    </div>
  );
}
export default App;