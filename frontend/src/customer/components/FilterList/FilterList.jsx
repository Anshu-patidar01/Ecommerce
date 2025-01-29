import React, { useState } from "react";
import FilterSectionItem from "../../../StaticData/FilterSection";
function FilterList() {
  const [selectedCollections, setSelectedCollections] = useState([]);

  const handleCheckboxChange = (item) => {
    if (selectedCollections.includes(item)) {
      setSelectedCollections(selectedCollections.filter((i) => i !== item));
    } else {
      setSelectedCollections([...selectedCollections, item]);
    }
  };

  return (
    <div className="ml-4">
      <div>
        <div>
          <div>
            <div className="mt-1">
              <strong>Selected:</strong>{" "}
              {selectedCollections.length > 0
                ? selectedCollections.join(", ")
                : "None"}
            </div>
          </div>

          <div className="max-w-md mx-auto p-4 bg-gray-50  shadow">
            {/* //Fiter Categories */}
            {FilterSectionItem.map((item) => (
              <div key={item.key}>
                <h2 className="text-lg font-bold mb-4">{item.key}</h2>
                <ul className="space-y-2 overflow-y-scroll">
                  {/* //Filter Items */}
                  {item.option.map((item, index) => (
                    <li key={index} className="flex items-center space-x-3 ">
                      <input
                        type="checkbox"
                        id={12}
                        checked={selectedCollections.includes(item.value)}
                        onChange={() => handleCheckboxChange(item.value)}
                        className="h-4 w-4 border-gray-300 rounded text-blue-500 focus:ring-blue-500"
                      />
                      <label htmlFor={12} className="cursor-pointer text-sm">
                        {item.value}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterList;
