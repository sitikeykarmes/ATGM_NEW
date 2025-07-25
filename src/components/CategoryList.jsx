import React from "react";
import CategoryItem from "./CategoryItem";

export default function CategoryList({ data, selected, setSelected, priorityOrder = [] }) {
  const handleSubcriteriaChange = (catId, subIdx) => {
    setSelected((prev) => {
      const prevSubs = prev[catId] || [];
      const alreadySelected = prevSubs.includes(subIdx);
      return {
        ...prev,
        [catId]: alreadySelected
          ? prevSubs.filter((idx) => idx !== subIdx)
          : [...prevSubs, subIdx],
      };
    });
  };

  return (
    <div>
      {data.map((cat, index) => {
        const isPriority = priorityOrder.includes(cat.id);
        const priorityIndex = priorityOrder.indexOf(cat.id);
        
        return (
          <CategoryItem
            key={cat.id}
            cat={cat}
            selected={selected[cat.id] || []}
            onSubcriteriaChange={handleSubcriteriaChange}
            isPriority={isPriority}
            priorityIndex={priorityIndex}
          />
        );
      })}
    </div>
  );
}
