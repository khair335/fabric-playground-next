"use client"
import IconCollection from '@/components/IconCollection/IconCollection';
import React from 'react';

import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';

const Sidebar = ({
    categories,
    selectedCategory,
    selectedSubcategory,
    expandedCategories,
    handleCategoryClick,
    handleSubcategoryClick,
    toggleCategory,
    isSidebarCollapsed,
    toggleSidebar
}) => {
    return (
        <aside className={`relative z-[9] bg-white border-b lg:border-b-0 border-r-0 lg:border-r border-gray-200 ${isSidebarCollapsed ? 'p-2 h-[10px] max-w-full' : 'p-4 pr-10 h-auto max-w-full lg:max-w-[260px] xl:max-w-[360px]'} transition-all duration-300`}>
            <div className={`${isSidebarCollapsed ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                <p className='font-unbounded text-lg font-normal leading-5 text-secondary-8 pb-5'>Catalogue</p>
                {categories.map((category) => (
                    <div key={category.name} className="mb-1">
                        <div
                            className={`flex justify-between items-center p-2 cursor-pointer transition-all duration-300 hover:bg-gray-100 text-sm leading-4
                            ${selectedCategory === category.name ? 'text-primary-10 font-normal ' : 'text-black'}`}
                            onClick={() => {
                                handleCategoryClick(category.name);
                                if (category.subcategories.length > 0) {
                                    toggleCategory(category.name);
                                }
                            }}
                        >
                            <div className='flex items-center gap-2'>
                                <span>
                                    <IconCollection name={category.icon} className='w-[28px] h-[28px]' />
                                </span>
                                <span>{category.name}</span>
                            </div>
                            {category.subcategories.length > 0 && (
                                <span className={`text-sm transition-transform duration-300
                                ${expandedCategories[category.name] ? 'rotate-180' : ''}`}>
                                    <IoIosArrowDown className='text-base' />
                                </span>
                            )}
                        </div>

                        {expandedCategories[category.name] && category.subcategories.length > 0 && (
                            <div className="ml-4">
                                {category.subcategories.map((sub) => (
                                    <div
                                        key={sub}
                                        className={`flex mb-1 items-center gap-2 px-2 py-[6px] cursor-pointer text-sm transition-all duration-300 hover:bg-primary-1
                                        ${selectedSubcategory === sub ? 'text-primary-10 font-medium bg-primary-1 rounded' : ''}`}
                                        onClick={() => handleSubcategoryClick(category.name, sub)}
                                    >
                                        • {sub}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <button
                onClick={toggleSidebar}
                className={`w-[40px] h-[40px] rounded-full shadow-md bg-white flex justify-center items-center absolute right-1/2 lg:-right-4 -bottom-4 lg:bottom-[unset]  top-[unset] lg:top-4 z-10 transform transition-transform duration-300 ${isSidebarCollapsed ? 'rotate-180' : ''}`}
            >
                <IoIosArrowForward  className='text-base lg:block hidden' />
                <IoIosArrowDown className='text-base lg:hidden block' />
            </button>
        </aside>
    );
};

export default Sidebar;