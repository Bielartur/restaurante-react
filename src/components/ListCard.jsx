import React from "react";

export function ListCard({ itens, renderItem, minSize = "15rem" }) {
  return (
    <ul className={`grid grid-cols-[repeat(auto-fit,minmax(${minSize},1fr))] gap-6 items-stretch`}>
      {itens.map((item, index) => (
        <li key={index}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}

