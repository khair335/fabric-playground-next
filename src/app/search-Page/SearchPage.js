// import React, { useState, useEffect } from 'react';
// import { Link, useSearchParams } from 'react-router-dom';
// import mockData from './mockData.json';
// import IconCollection from '../../components/IconCollection';
// import { IoIosArrowBack, IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
// import Sidebar from './Sidebar';
// import { LuFilter } from 'react-icons/lu';
// import Button from '../../components/Button';
// // import './SearchPage.css';
// // import img from '../../assets/video';

// const SearchPage = () => {

//     const [selectedCategory, setSelectedCategory] = useState('');
//     const [selectedSubcategory, setSelectedSubcategory] = useState('');
//     const [expandedCategories, setExpandedCategories] = useState({});
//     const [searchParams, setSearchParams] = useSearchParams();
//     const [tutorials, setTutorials] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [itemsPerPage, setItemsPerPage] = useState(12);
//     const [showFilters, setShowFilters] = useState(true);
//     const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
//     const [filters, setFilters] = useState({
//         categories: {
//             all: false,
//             male: false,
//             female: false,
//             children: false
//         },
//         type: {
//             all: true,
//             tutorial: false,
//             playlist: false
//         },
//         duration: {
//             all: false,
//             lessThan3: false,
//             between3And15: true,
//             between15And30: true,
//             over30: true
//         },
//         sortBy: {
//             relevance: true,
//             uploadDate: false,
//             views: false,
//             duration: false
//         },
//         order: 'ascending'
//     });
//     const [videoDurations, setVideoDurations] = useState({});

//     useEffect(() => {
//         // Simulate API call
//         setTutorials(mockData.tutorials);

//         // Get URL params
//         const page = searchParams?.get('page') || 1;
//         const category = searchParams?.get('category') || '';
//         const subcategory = searchParams?.get('subcategory') || '';

//         setCurrentPage(Number(page));
//         setSelectedCategory(category);
//         setSelectedSubcategory(subcategory);
//     }, [searchParams]);

//     const toggleCategory = (category) => {
//         setExpandedCategories(prev => ({
//             ...prev,
//             [category]: !prev[category]
//         }));
//     };

//     const handleCategoryClick = (category) => {
//         if (selectedCategory === category) {
//             // If clicking the same category, unselect it
//             setSelectedCategory('');
//             setSelectedSubcategory('');
//             setSearchParams({ page: '1' });
//         } else {
//             setSelectedCategory(category);
//             setSelectedSubcategory('');
//             setCurrentPage(1);
//             setSearchParams({ category, page: '1' });
//         }
//     };

//     const handleSubcategoryClick = (category, subcategory) => {
//         if (selectedSubcategory === subcategory) {
//             // If clicking the same subcategory, unselect it
//             setSelectedSubcategory('');
//             setSearchParams({ category, page: '1' });
//         } else {
//             setSelectedCategory(category);
//             setSelectedSubcategory(subcategory);
//             setCurrentPage(1);
//             setSearchParams({ category, subcategory, page: '1' });
//         }
//     };

//     const handlePageChange = (page) => {
//         setCurrentPage(page);
//         const params = { page: String(page) };
//         if (selectedCategory) params.category = selectedCategory;
//         if (selectedSubcategory) params.subcategory = selectedSubcategory;
//         setSearchParams(params);
//     };

//     const handleItemsPerPageChange = (event) => {
//         setItemsPerPage(Number(event.target.value));
//         setCurrentPage(1);
//     };

//     const filterTutorials = (tutorials) => {
//         return tutorials.filter(tutorial => {
//             // Category filter
//             if (!filters.categories.all) {
//                 const selectedGenders = Object.entries(filters.categories)
//                     .filter(([key, value]) => value && key !== 'all')
//                     .map(([key]) => key);

//                 if (selectedGenders.length > 0 &&
//                     !tutorial.gender.some(g => selectedGenders.includes(g))) {
//                     return false;
//                 }
//             }

//             // Type filter
//             if (!filters.type.all) {
//                 const selectedTypes = Object.entries(filters.type)
//                     .filter(([key, value]) => value && key !== 'all')
//                     .map(([key]) => key);

//                 if (selectedTypes.length > 0 && !selectedTypes.includes(tutorial.type)) {
//                     return false;
//                 }
//             }

//             // Duration filter
//             if (!filters.duration.all) {
//                 const duration = tutorial.durationInMinutes;
//                 const durationMatches = (
//                     (filters.duration.lessThan3 && duration < 3) ||
//                     (filters.duration.between3And15 && duration >= 3 && duration <= 15) ||
//                     (filters.duration.between15And30 && duration > 15 && duration <= 30) ||
//                     (filters.duration.over30 && duration > 30)
//                 );

//                 if (!durationMatches) {
//                     return false;
//                 }
//             }

//             return true;
//         });
//     };


//     const sortTutorials = (tutorials) => {
//         const sortedTutorials = [...tutorials];

//         switch (Object.entries(filters.sortBy).find(([_, value]) => value)?.[0]) {
//             case 'uploadDate':
//                 sortedTutorials.sort((a, b) =>
//                     new Date(b.uploadDate) - new Date(a.uploadDate)
//                 );
//                 break;
//             case 'views':
//                 sortedTutorials.sort((a, b) => b.views - a.views);
//                 break;
//             case 'duration':
//                 sortedTutorials.sort((a, b) => b.durationInMinutes - a.durationInMinutes);
//                 break;
//             default: // relevance
//                 // Keep original order
//                 break;
//         }

//         // Apply ascending/descending order
//         if (filters.order === 'descending') {
//             sortedTutorials.reverse();
//         }

//         return sortedTutorials;
//     };

//     // Update the filtering logic in your component
//     const filteredTutorials = React.useMemo(() => {
//         let filtered = tutorials;

//         // Apply category/subcategory filters
//         if (selectedSubcategory) {
//             filtered = filtered.filter(t => t.subcategory === selectedSubcategory);
//         } else if (selectedCategory) {
//             filtered = filtered.filter(t => t.category === selectedCategory);
//         }

//         // Apply additional filters
//         filtered = filterTutorials(filtered);

//         // Apply sorting
//         return sortTutorials(filtered);
//     }, [tutorials, selectedCategory, selectedSubcategory, filters]);

//     // Calculate pagination
//     const totalPages = Math.ceil(filteredTutorials.length / itemsPerPage);
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const paginatedTutorials = filteredTutorials.slice(startIndex, startIndex + itemsPerPage);


//     const toggleFilters = () => {
//         setShowFilters(!showFilters);
//     };

//     const handleFilterChange = (category, value) => {
//         setFilters(prev => ({
//             ...prev,
//             [category]: {
//                 ...prev[category],
//                 [value]: !prev[category][value]
//             }
//         }));
//     };

//     const handleSortOrderChange = (order) => {
//         setFilters(prev => ({
//             ...prev,
//             order: order
//         }));
//     };

//     const applyFilters = () => {
//         // Apply filters logic here
//         setCurrentPage(1);
//     };

//     const renderPagination = () => {
//         const totalPages = Math.ceil(filteredTutorials.length / itemsPerPage);
//         const currentRange = `${startIndex + 1}-${Math.min(startIndex + itemsPerPage, filteredTutorials.length)}`;
//         const totalItems = filteredTutorials.length;

//         // Create array of page numbers to show
//         let pages = [];
//         const maxVisiblePages = 5; // Number of page numbers to show

//         if (totalPages <= maxVisiblePages) {
//             pages = Array.from({ length: totalPages }, (_, i) => i + 1);
//         } else {
//             // Always show first page
//             pages.push(1);

//             // Calculate range around current page
//             let start = Math.max(2, currentPage - 1);
//             let end = Math.min(totalPages - 1, currentPage + 1);

//             // Adjust range if at edges
//             if (currentPage <= 2) {
//                 end = 4;
//             }
//             if (currentPage >= totalPages - 1) {
//                 start = totalPages - 3;
//             }

//             // Add ellipsis if needed
//             if (start > 2) {
//                 pages.push('...');
//             }

//             // Add middle pages
//             for (let i = start; i <= end; i++) {
//                 pages.push(i);
//             }

//             // Add ellipsis if needed
//             if (end < totalPages - 1) {
//                 pages.push('...');
//             }

//             // Always show last page
//             if (totalPages > 1) {
//                 pages.push(totalPages);
//             }
//         }

//         return (
//             <div className="flex flex-col lg:flex-row justify-between items-center mt-0 lg:mt-8 mb-8">
//                 <div className='flex items-center lg:justify-start justify-between flex-wrap gap-4 w-full lg:w-auto'>
//                     <div className="flex items-center gap-2">
//                         <span className="text-secondary-7 font-inter text-base font-normal leading-6">Show per page:</span>
//                         <div className='relative text-black font-inter text-base font-normal leading-6 cursor-pointer bg-white'>
//                             <IoIosArrowDown className='absolute right-2 top-1/2 -translate-y-1/2 text-black text-2xl w-6 h-6 z-[2]' />
//                             <select
//                                 value={itemsPerPage}
//                                 onChange={handleItemsPerPageChange}
//                                 className="border border-bw-3 bg-transparent rounded-lg px-2 py-1.5 outline-none appearance-none pr-10 relative z-[3] cursor-pointer"
//                             >

//                                 <option value={12}>12 videos</option>
//                                 <option value={24}>24 videos</option>
//                                 <option value={36}>36 videos</option>
//                             </select>
//                         </div>
//                     </div>

//                     <div className="px-2 py-1 bg-secondary-1 rounded font-inter text-sm font-normal leading-[21px] text-bw-9">
//                         {currentRange} videos shown | {totalItems} videos total
//                     </div>
//                 </div>

//                 <div className="flex gap-2">
//                     <button
//                         className="px-4 py-2  rounded disabled:opacity-50 disabled:cursor-not-allowed text-2xl text-primary-10"
//                         onClick={() => handlePageChange(currentPage - 1)}
//                         disabled={currentPage === 1}
//                     >
//                         <IoIosArrowBack />

//                     </button>

//                     {pages.map((page, index) => (
//                         <button
//                             key={index}
//                             onClick={() => typeof page === 'number' ? handlePageChange(page) : null}
//                             className={`px-4 py-2 text-primary-10 font-inter text-base font-semibold leading-5 relative
//                             ${currentPage === page ? ' text-secondary-4' : ''}
//                             ${typeof page === 'string' ? 'cursor-default' : ''}`}
//                             disabled={typeof page === 'string'}
//                         >
//                             {page}
//                         </button>
//                     ))}

//                     <button
//                         className="px-4 py-2  disabled:opacity-50 disabled:cursor-not-allowed text-2xl text-primary-10"
//                         onClick={() => handlePageChange(currentPage + 1)}
//                         disabled={currentPage === totalPages}
//                     >
//                         <IoIosArrowForward />

//                     </button>
//                 </div>
//             </div>
//         );
//     };

//     const renderAppliedFilters = () => {
//         const appliedFilters = [];

//         // Add category filters
//         Object.entries(filters.categories).forEach(([key, value]) => {
//             if (value && key !== 'all') {
//                 appliedFilters.push({
//                     type: 'category',
//                     label: key.charAt(0).toUpperCase() + key.slice(1),
//                     value: key
//                 });
//             }
//         });

//         // Add duration filters
//         const durationLabels = {
//             lessThan3: 'Less than 3 minutes',
//             between3And15: '3-15 minutes',
//             between15And30: '15-30 minutes',
//             over30: 'Over 30 minutes'
//         };

//         Object.entries(filters.duration).forEach(([key, value]) => {
//             if (value && key !== 'all') {
//                 appliedFilters.push({
//                     type: 'duration',
//                     label: durationLabels[key],
//                     value: key
//                 });
//             }
//         });

//         // Add sort filter if not default
//         if (filters.sortBy.relevance && filters.order === 'descending') {
//             appliedFilters.push({
//                 type: 'sort',
//                 label: 'Sort by relevance (descending)',
//                 value: 'relevance'
//             });
//         }

//         if (appliedFilters.length === 0) return null;

//         return (
//             <div className="flex items-center gap-2">
//                 <span className="font-inter text-sm font-bold text-secondary-6 leading-[21px]">Applied filters:</span>
//                 <div className="flex flex-wrap gap-2">
//                     {appliedFilters.map((filter, index) => (
//                         <button
//                             key={index}
//                             className="flex items-center gap-1 px-2 py-[7.5px] bg-primary-7 text-white  hover:bg-[#5a2769] h-6 rounded transition-colors font-noto text-xs font-bold leading-[18px]"
//                             onClick={() => removeFilter(filter.type, filter.value)}
//                         >
//                             {filter.label}
//                             <span className="ml-1">×</span>
//                         </button>
//                     ))}
//                 </div>
//             </div>
//         );
//     };

//     const removeFilter = (type, value) => {
//         setFilters(prev => {
//             const newFilters = { ...prev };

//             switch (type) {
//                 case 'category':
//                     newFilters.categories = {
//                         ...prev.categories,
//                         [value]: false
//                     };
//                     break;
//                 case 'duration':
//                     newFilters.duration = {
//                         ...prev.duration,
//                         [value]: false
//                     };
//                     break;
//                 case 'sort':
//                     newFilters.sortBy = {
//                         ...prev.sortBy,
//                         relevance: true
//                     };
//                     newFilters.order = 'ascending';
//                     break;
//             }

//             return newFilters;
//         });
//     };

//     const toggleSidebar = () => {
//         setIsSidebarCollapsed(!isSidebarCollapsed);
//     };

//     const handleLoadedMetadata = (id, duration) => {
//         setVideoDurations(prev => ({
//             ...prev,
//             [id]: duration
//         }));
//     };

//     return (
//         <div className={`flex ${isSidebarCollapsed ? 'flex-col lg:flex-row' : 'flex-col lg:flex-row'} gap-5 xl:gap-10 px-4 lg:px-[50px] py-4 lg:py-12 transition-all duration-300 max-w-8xl w-full mx-auto`}>
//             {/* Sidebar */}
//             <Sidebar
//                 categories={mockData.categories}
//                 selectedCategory={selectedCategory}
//                 selectedSubcategory={selectedSubcategory}
//                 expandedCategories={expandedCategories}
//                 handleCategoryClick={handleCategoryClick}
//                 handleSubcategoryClick={handleSubcategoryClick}
//                 toggleCategory={toggleCategory}
//                 isSidebarCollapsed={isSidebarCollapsed}
//                 toggleSidebar={toggleSidebar}
//             />
//                 {/* Sidebar */}
//                 {/* Main Content */}
//             <main className="flex-1 relative z-10">
//                 <div className="flex justify-between items-center mb-8 w-full lg:w-auto">
//                     <div className="flex flex-col w-full lg:w-auto gap-4 lg:gap-0">
//                         <h1 className="font-unbounded text-3.5xl lg:text-5xl xl:text-6.5xl font-normal leading-[36px] md:leading-[44px] lg:leading-[52px]  xl:leading-17 text-black pb-0 lg:pb-7.5">
//                             {selectedSubcategory || selectedCategory || 'All Tutorials'}
//                         </h1>
//                         <Button
//                         variant='Secondary'
//                         size='Medium'
//                         mode='button'
//                         icon={<LuFilter className='text-2xl ' style={{ transform: 'scale(-1, 1)' }} />}
//                         iconPosition='left'
//                         onClick={toggleFilters}
//                         className='!gap-2 flex lg:!hidden !w-full'
//                     >
//                         {showFilters ? 'HIDE FILTERS' : 'SHOW FILTERS'}
//                     </Button>
//                         {renderAppliedFilters()}
//                     </div>

//                     <Button
//                         variant='Secondary'
//                         size='Medium'
//                         mode='button'
//                         icon={<LuFilter className='text-2xl ' style={{ transform: 'scale(-1, 1)' }} />}
//                         iconPosition='left'
//                         onClick={toggleFilters}
//                         className='!gap-2 hidden lg:!flex'
//                     >
//                         {showFilters ? 'HIDE FILTERS' : 'SHOW FILTERS'}
//                     </Button>
//                 </div>

//                 <div className={`transition-max-height duration-500 ease-in-out overflow-hidden ${showFilters ? 'max-h-[1000px]' : 'max-h-0'}`}>
//                     <div className="bg-white p-6 mb-[30px] rounded-xl border border-secondary-3">
//                         <div className="flex flex-col lg:flex-row gap-2 xl:gap-12">
//                             {/* Categories */}
//                             <div className="flex-1">
//                                 <h3 className="text-base font-medium text-gray-800 mb-4 text-left">Categories:</h3>
//                                 <div className="flex flex-col gap-3">
//                                     <label className="flex items-center gap-2 cursor-pointer">
//                                         <input
//                                             type="checkbox"
//                                             checked={filters.categories.all}
//                                             onChange={() => handleFilterChange('categories', 'all')}
//                                             className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
//                                         />
//                                         <span className="text-gray-700">All</span>
//                                     </label>
//                                     <label className="flex items-center gap-2 cursor-pointer">
//                                         <input
//                                             type="checkbox"
//                                             checked={filters.categories.male}
//                                             onChange={() => handleFilterChange('categories', 'male')}
//                                             className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
//                                         />
//                                         <span className="text-gray-700">Male</span>
//                                     </label>
//                                     <label className="flex items-center gap-2 cursor-pointer">
//                                         <input
//                                             type="checkbox"
//                                             checked={filters.categories.female}
//                                             onChange={() => handleFilterChange('categories', 'female')}
//                                             className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
//                                         />
//                                         <span className="text-gray-700">Female</span>
//                                     </label>
//                                     <label className="flex items-center gap-2 cursor-pointer">
//                                         <input
//                                             type="checkbox"
//                                             checked={filters.categories.children}
//                                             onChange={() => handleFilterChange('categories', 'children')}
//                                             className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
//                                         />
//                                         <span className="text-gray-700">Children</span>
//                                     </label>
//                                 </div>
//                             </div>

//                             {/* Type */}
//                             <div className="flex-1">
//                                 <h3 className="text-base font-medium text-gray-800 mb-4 text-left">Type:</h3>
//                                 <div className="flex flex-col gap-3">
//                                     <label className="flex items-center gap-2 cursor-pointer">
//                                         <input
//                                             type="checkbox"
//                                             checked={filters.type.all}
//                                             onChange={() => handleFilterChange('type', 'all')}
//                                             className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
//                                         />
//                                         <span className="text-gray-700">All</span>
//                                     </label>
//                                     <label className="flex items-center gap-2 cursor-pointer">
//                                         <input
//                                             type="checkbox"
//                                             checked={filters.type.tutorial}
//                                             onChange={() => handleFilterChange('type', 'tutorial')}
//                                             className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
//                                         />
//                                         <span className="text-gray-700">Tutorial</span>
//                                     </label>
//                                     <label className="flex items-center gap-2 cursor-pointer">
//                                         <input
//                                             type="checkbox"
//                                             checked={filters.type.playlist}
//                                             onChange={() => handleFilterChange('type', 'playlist')}
//                                             className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
//                                         />
//                                         <span className="text-gray-700">Playlist</span>
//                                     </label>
//                                 </div>
//                             </div>

//                             {/* Duration */}
//                             <div className="flex-1">
//                                 <h3 className="text-base font-medium text-gray-800 mb-4 text-left">Duration:</h3>
//                                 <div className="flex flex-col gap-3">
//                                     <label className="flex items-center gap-2 cursor-pointer">
//                                         <input
//                                             type="checkbox"
//                                             checked={filters.duration.all}
//                                             onChange={() => handleFilterChange('duration', 'all')}
//                                             className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
//                                         />
//                                         <span className="text-gray-700">All</span>
//                                     </label>
//                                     <label className="flex items-center gap-2 cursor-pointer">
//                                         <input
//                                             type="checkbox"
//                                             checked={filters.duration.lessThan3}
//                                             onChange={() => handleFilterChange('duration', 'lessThan3')}
//                                             className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
//                                         />
//                                         <span className="text-gray-700">Less than 3 minutes</span>
//                                     </label>
//                                     <label className="flex items-center gap-2 cursor-pointer">
//                                         <input
//                                             type="checkbox"
//                                             checked={filters.duration.between3And15}
//                                             onChange={() => handleFilterChange('duration', 'between3And15')}
//                                             className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
//                                         />
//                                         <span className="text-gray-700">3-15 minutes</span>
//                                     </label>
//                                     <label className="flex items-center gap-2 cursor-pointer">
//                                         <input
//                                             type="checkbox"
//                                             checked={filters.duration.between15And30}
//                                             onChange={() => handleFilterChange('duration', 'between15And30')}
//                                             className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
//                                         />
//                                         <span className="text-gray-700">15-30 minutes</span>
//                                     </label>
//                                     <label className="flex items-center gap-2 cursor-pointer">
//                                         <input
//                                             type="checkbox"
//                                             checked={filters.duration.over30}
//                                             onChange={() => handleFilterChange('duration', 'over30')}
//                                             className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
//                                         />
//                                         <span className="text-gray-700">Over 30 minutes</span>
//                                     </label>
//                                 </div>
//                             </div>

//                             {/* Sort by */}
//                             <div className="flex-1">
//                                 <h3 className="text-base font-medium text-gray-800 mb-4 text-left">Sort by:</h3>
//                                 <div className="flex flex-col gap-3">
//                                     <label className="flex items-center gap-2 cursor-pointer">
//                                         <input
//                                             type="radio"
//                                             name="sortBy"
//                                             checked={filters.sortBy.relevance}
//                                             onChange={() => handleFilterChange('sortBy', 'relevance')}
//                                             className="w-4 h-4 rounded-full border-gray-300 text-primary focus:ring-primary"
//                                         />
//                                         <span className="text-gray-700">Relevance</span>
//                                     </label>
//                                     <label className="flex items-center gap-2 cursor-pointer">
//                                         <input
//                                             type="radio"
//                                             name="sortBy"
//                                             checked={filters.sortBy.uploadDate}
//                                             onChange={() => handleFilterChange('sortBy', 'uploadDate')}
//                                             className="w-4 h-4 rounded-full border-gray-300 text-primary focus:ring-primary"
//                                         />
//                                         <span className="text-gray-700">Upload date</span>
//                                     </label>
//                                     <label className="flex items-center gap-2 cursor-pointer">
//                                         <input
//                                             type="radio"
//                                             name="sortBy"
//                                             checked={filters.sortBy.views}
//                                             onChange={() => handleFilterChange('sortBy', 'views')}
//                                             className="w-4 h-4 rounded-full border-gray-300 text-primary focus:ring-primary"
//                                         />
//                                         <span className="text-gray-700">Views</span>
//                                     </label>
//                                     <label className="flex items-center gap-2 cursor-pointer">
//                                         <input
//                                             type="radio"
//                                             name="sortBy"
//                                             checked={filters.sortBy.duration}
//                                             onChange={() => handleFilterChange('sortBy', 'duration')}
//                                             className="w-4 h-4 rounded-full border-gray-300 text-primary focus:ring-primary"
//                                         />
//                                         <span className="text-gray-700">Duration</span>
//                                     </label>

//                                     <select
//                                         value={filters.order}
//                                         onChange={(e) => handleSortOrderChange(e.target.value)}
//                                         className="mt-2 w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
//                                     >
//                                         <option value="ascending">Ascending order</option>
//                                         <option value="descending">Descending order</option>
//                                     </select>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className='flex justify-end border-t border-gray-200 pt-3 mt-6'>
//                             <Button
//                                 variant='Primary'
//                                 size='Small'
//                                 mode='button'
//                                 onClick={applyFilters}
//                             >
//                                 APPLY FILTERS
//                             </Button>
//                         </div>
//                     </div>
//                 </div>
//                 {filteredTutorials.length > 0 && renderPagination()}
//                 {/* Tutorial Grid */}
//                 <div className="flex flex-wrap gap-x-[16px] lg:gap-x-[28px] gap-y-[16px] lg:gap-y-[28px] mb-8">
//                     {paginatedTutorials.map((tutorial) => (
//                         <Link
//                             to={`/tutorial-details/${tutorial.id}`}

//                             key={tutorial.id} className="w-full max-w-full md:max-w-[calc(50%-8px)] lg:max-w-[calc(50%-14px)]">
//                             <div className="relative aspect-video rounded-lg">
//                                 <video
//                                     src={tutorial.video}
//                                     alt={tutorial.title}
//                                     className="w-full h-full object-cover rounded-lg"
//                                     autoPlay={true}
//                                     muted={true}
//                                     onLoadedMetadata={(e) => handleLoadedMetadata(tutorial.id, e.target.duration)}
//                                 />
//                                 <span className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-inter">
//                                     {videoDurations[tutorial.id] ? `${Math.floor(videoDurations[tutorial.id] / 60)}:${Math.floor(videoDurations[tutorial.id] % 60).toString().padStart(2, '0')}` : 'Loading...'}
//                                 </span>
//                             </div>
//                             <h3 className="font-unbounded text-base lg:text-xl pt-3 font-normal leading-[22px] lg:leading-6 text-primary-9 line-clamp-1">{tutorial.title}</h3>
//                             <p className="font-inter text-sm font-normal leading-[21px] pt-1 text-secondary-6 line-clamp-2">{tutorial.description}</p>
//                         </Link>
//                     ))}
//                 </div>

//                 {/* Show "No results found" message if no tutorials match the filters */}
//                 {filteredTutorials.length === 0 && (
//                     <div className="text-center py-12 text-gray-600">
//                         <p>No tutorials found for the selected filters.</p>
//                     </div>
//                 )}

//                 {filteredTutorials.length > 0 && renderPagination()}
//             </main>
//         </div>
//     );
// };

// export default SearchPage;