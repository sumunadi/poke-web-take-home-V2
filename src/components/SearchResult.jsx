import React from "react";

//Componenet purpose to showcase pokemon sprite after search to give user visual and help search aswell :)

export default function SearchResult({ data }) {
    //null check
  if (!data?.length) return null;

  const poki = data[0]; // show the first matching Pokémon

  return (
    <div className="card" style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      {/*display sprite* */}
      <img
        src={poki.sprite || ""}
        alt={poki.name}
        width={72}
        height={72}
        style={{ borderRadius: 8, background: "#f3f4f6", objectFit: "contain" }}
        onError={(e) => (e.currentTarget.style.display = "none")}
      />
      
      <div>
        <div style={{ fontWeight: 700, textTransform: "capitalize" }}>
          #{poki.id} {poki.name}
        </div>
        <div className="hint" style={{ textTransform: "capitalize" }}>
          {poki.types.join(" · ")}
        </div>
      </div>
    </div>
  );
}
