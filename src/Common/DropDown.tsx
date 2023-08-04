import React, { useState } from "react";
import { CategoryListItems } from "../Constants";

interface SubItem {
  id: number;
  title: string;
}

interface CategoryListItem {
  id: number;
  title: string;
  subItem: SubItem[];
}

const Dropdown: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleItemClick = (itemId: number) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(itemId)
        ? prevSelectedItems.filter((item) => item !== itemId)
        : [...prevSelectedItems, itemId]
    );
  };

  return (
    <div className="w-64">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="category"
      >
        Select Category:
      </label>
      <select
        id="category"
        className="w-full bg-white border border-gray-300 rounded px-4 py-2"
        onChange={(e) => handleItemClick(Number(e.target.value))}
        // value={selectedItems}
        multiple
      >
        <option value="">-- Select Category --</option>
        {CategoryListItems.map((category: CategoryListItem) => (
          <optgroup key={category.id} label={category.title}>
            {category.subItem.map((subItem) => (
              <option key={subItem.id} value={subItem.id}>
                {subItem.title}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
      <div className="mt-4">
        <p>Selected Items:</p>
        <ul>
          {selectedItems.map((itemId) => (
            <li key={itemId}>{itemId}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
