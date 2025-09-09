import React, { useMemo } from "react";
import { Radar } from "react-chartjs-2";
import { averageStats } from "../utils/transform";

// Componenet reders radar chart that will show the average stats

export default function AvgStatsRadar({ data }) {
    // using useMemo for statscalculation for potimization purposes.
  const avg = useMemo(() => averageStats(data), [data]);

  //poke stats
  const stat_keys = ["hp","attack","defense","special-attack","special-defense","speed"];
  
  //changing the labels that come remove dashes
  const labels = stat_keys.map(stat => stat.replace("-", " "));

  //value
  const values = stat_keys.map(stat => Number(avg?.[stat]) || 0);

  const hasData = (data?.length ?? 0) > 0;

  //chart.js dataset
  const chartData = {
    labels,
    datasets: [
        { 
            label: "Avg Base Stat", 
            data: values, 
            pointRadius: 2 
        },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: { 
        r: { 
            beginAtZero: true, 
            suggestedMax: Math.max(120, ...values), 
        }, 
    },
  };

  return (
    <div className="chart-container">
      <h3 className="chart-title">Average Base Stats {hasData ? "(filtered set)" : ""}</h3>
      <div style={{ height: 360 }}>
        {hasData ? (
          <Radar data={chartData} options={options} />
        ) : (
          <div className="loading" style={{paddingTop: "2rem"}}>
            No Pokémon match the current filters.
          </div>
        )}
      </div>
    </div>
  );
}