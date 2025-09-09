import React from 'react';

// all the type of pokemon possible
const ALL_TYPES = [
   "normal","fire","water","electric","grass","ice","fighting","poison",
  "ground","flying","psychic","bug","rock","ghost","dragon","dark","steel","fairy"
];

//Componenet to filter pokemon types for the 2 charts added.
export default function TypeFilter({selected, onChange}) {
    //Toggle Select filter type
    const toggle = (type) => {
        if(selected.includes(type)) {
            onChange(selected.filter(x => x !== type));
        } else {
            onChange([...selected, type]);
        }
    };


    return(
        <div className="card">
            <h3 className="chart-title">Filter by Type</h3>
            <div className="type-grid">
                {ALL_TYPES.map(type => (
                    <button
                    key={type}
                    className={`chip ${selected.includes(type) ? "active" : ""}`}
                    onClick={() => toggle(type)}
                    aria-pressed={selected.includes(type)}
                    >
                        {type}
                    </button>
                ))}
            </div>
        </div>
    )
}