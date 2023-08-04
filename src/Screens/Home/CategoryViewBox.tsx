import { useState } from "react";
import { CategoryListItems } from "../../Constants";

export interface CategoryListItem {
  id: number;
  title: string;
  subItem: SubItem[];
}

export interface SubItem {
  id: number;
  title: string;
}

const CategoryViewBox = () => {
  const [categoryListItems] = useState<CategoryListItem[]>(CategoryListItems);

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleCheckboxChange = (itemId: number) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(itemId)) {
        // Deselect item and its sub-items
        return prevSelectedItems.filter((id) => id !== itemId);
      } else {
        // Select item and all its sub-items
        const selectedItem = categoryListItems.find(
          (item) => item.id === itemId
        );
        if (selectedItem) {
          const subItemIds = selectedItem.subItem.map((subItem) => subItem.id);
          return [...prevSelectedItems, itemId, ...subItemIds];
        }
      }
      return prevSelectedItems;
    });
  };

  return (
    <div>
      <div
        tabIndex={0}
        className="collapse max-lg:collapse-arrow lg:collapse-open border rounded-lg "
      >
        <input type="checkbox" />
        <div className="collapse-title text-lg font-inter font-medium max-md:text-sm px-2">
          Choose Category
        </div>
        <div className="collapse-content flex flex-col gap-5">
          {categoryListItems.map((item) => (
            <div key={item.id}>
              <label className=" flex gap-4 font-bold text-sm md:text-base ">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => handleCheckboxChange(item.id)}
                />
                {item.title}
              </label>
              <ul className="flex flex-col gap-2 pl-10">
                {item.subItem.map((subItem) => (
                  <li key={subItem.id}>
                    <label className="flex gap-4">
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(subItem.id)}
                        onChange={() => handleCheckboxChange(subItem.id)}
                      />
                      {subItem.title}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryViewBox;
