import React, { useMemo } from "react";
import { Bar } from "react-chartjs-2";
import { buildTypeCounts } from "../utils/transform.js"; 

//CUSTOM COLORS for Bar chart :D
const TYPE_COLORS = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

// Bar Chart Componenet that shows how many pokemon for a certain type
export default function TypeDistribution({ data }) {
    //useMemo used to pre calculate the counts if data changes
  const { labels, counts, colors } = useMemo(() => {
    //Count for each type fire: 20, , water etc
    const typeMap = buildTypeCounts(data);
    //sorting 
    const entries = Object.entries(typeMap).sort((a, b) => b[1] - a[1]);
    
    return {
      labels: entries.map(([type]) => type),
      counts: entries.map(([, count]) => count),
      //CUSTOM COLORS for type!
      colors: entries.map(([type]) => TYPE_COLORS[type] || "#888"),
    };
  }, [data]);

  //chartjs dataset
  const chartData = {
    labels,
    datasets: [
        { 
            label: "Count", 
            data: counts,
            backgroundColor: colors,
        }
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true, ticks: { precision: 0 } } },
  };

  return (
    <div className="chart-container">
      <h3 className="chart-title">Type Distribution</h3>
      <div style={{ height: 320 }}>
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
}
