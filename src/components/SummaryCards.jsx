import React, { useMemo } from "react";

// Componenet to show basic stats of pokemon, height, weight, no of pokemons
export default function SummaryCards({ data }) {
  const meta = useMemo(() => {
    //null checking
    if (!data.length) return { count: 0, avgHeight: 0, avgWeight: 0 };

    const count = data.length;
    //height and weight from api come in hectograms and decimeter, converted both to kg and meters as its more commonely viewed by user
    const avgHeight = (data.reduce((sum,p)=>sum+p.height,0)/count/10).toFixed(1);
    const avgWeightKg = (data.reduce((sum,p)=>sum+p.weight,0)/count/10).toFixed(1);
    return { count, avgHeight, avgWeightKg };
  }, [data]);

  return (
    <div className="summary-grid">
      <div className="card">
        <div className="kpi">{meta.count}</div>
        <div className="kpi-label">Pokémon</div></div>
      <div className="card">
        <div className="kpi">{meta.avgHeight}</div>
        <div className="kpi-label">Avg Height (m)</div></div>
      <div className="card">
        <div className="kpi">{meta.avgWeightKg}</div>
        <div className="kpi-label">Avg Weight (kg)</div></div>
    </div>
  );
}