import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

import { Category } from "../../global_types";

export function SelectItems(
    {
        categories,
        selectedCategories,
        setSelectedCategories
    }:
        {
            categories: Category[],
            selectedCategories: string[],
            setSelectedCategories: (categories: string[]) => void
        }
) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCategory = (category: string) => {
        const currentIndex = selectedCategories.indexOf(category);
        const newSelectedCategories = [...selectedCategories];

        if (currentIndex === -1) {
            newSelectedCategories.push(category);
        } else {
            newSelectedCategories.splice(currentIndex, 1);
        }

        setSelectedCategories(newSelectedCategories);
    };

    const toggleAllCategories = () => {
        if (selectedCategories.length === categories.length) {
            setSelectedCategories([]);
        } else {
            setSelectedCategories(categories.map(c => c.name));
        }
    };

    const isSelected = (category: string) => {
        return selectedCategories.includes(category);
    };

    return (
        <div className="bg-white shadow rounded-lg p-3 pb-1 w-64">
            <div className="flex justify-between items-center mb-2" onClick={() => setIsCollapsed(!isCollapsed)}>
                <div className="text-blue-600 font-semibold cursor-pointer">
                    Category
                </div>
                {isCollapsed ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
            </div>
            {!isCollapsed && (
                <div className="border-t border-gray-200 my-2 pt-3">
                    <div className="flex justify-evenly items-center p-1">
                    <div className="text-sm text-gray-600 mb-2">{selectedCategories.length} selected</div>
                    <button
                        className="text-sm bg-transparent text-gray-400 py-1 px-3 mb-4 bg-gray-200 border-gray-700 border-2"
                        onClick={toggleAllCategories}
                    >
                        {selectedCategories.length === categories.length ? 'NONE' : 'ALL'}
                    </button>
                    </div>

                    <div className="overflow-auto bg-gray-100 p-3">
                        {categories.map((category) => (
                            <div
                                key={category.name}
                                className={`flex items-center justify-evenly py-2 cursor-pointer hover:shadow-md rounded-md px-2 py-1 my-1 ${isSelected(category.name) ? 'bg-blue-400 border-gray-700 border-2' : 'bg-white'}`}
                                onClick={() => toggleCategory(category.name)}
                            >
                                <div className={`${isSelected(category.name) ? 'font-semibold text-white' : 'text-gray-700'}`}>
                                    {category.name}
                                </div>
                                <div className={`${isSelected(category.name) ? 'font-semibold text-white' : 'text-gray-500'}`}>
                                    ({category.count.toLocaleString()})
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}