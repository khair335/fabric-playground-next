import React, { useState } from 'react';
import Pagination from '../Pagination/Pagination';
import { IoIosArrowDown } from 'react-icons/io';

const Table = ({
  data = [],
  columns,
  rowsPerPageOptions = [5, 10, 12],
  defaultRowsPerPage = 5,
  selectionType = 'none',
  onRowSelect,
  onSort,
  paginationPosition = 'bottom',
  sortByLabel = 'Sort by:',
  rowsPerPageLabel = 'Show rows per page:',
  showSearch = false,
  searchPosition = 'top',
  showRowsPerPageLabel = false,
  showShort = false,
  customButtonGroup = null,
  showCustomButtonGroup = false,
}) => {
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
  const [sortBy, setSortBy] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = data.filter((row) =>
    columns.some((col) =>
      row[col.key]?.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const sortRows = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
    sortData(key, direction);
  };

  const sortData = (key, direction) => {
    const sortedData = [...filteredData].sort((a, b) => {
      const aValue = a[key] ? a[key].toString().toLowerCase() : '';
      const bValue = b[key] ? b[key].toString().toLowerCase() : '';
      if (aValue < bValue) return direction === 'ascending' ? -1 : 1;
      if (aValue > bValue) return direction === 'ascending' ? 1 : -1;
      return 0;
    });
    onSort && onSort(sortedData);
  };

  const handleSortChange = (e) => {
    const key = e.target.value;
    setSortBy(key);
    if (key) {
      sortRows(key);
    }
  };

  const handleRowSelect = (row) => {
    if (selectionType === 'none') return;
    if (selectionType === 'single') {
      setSelectedRows([row]);
      onRowSelect && onRowSelect([row]);
    } else if (selectionType === 'all') {
      if (selectedRows.includes(row)) {
        const newSelection = selectedRows.filter((r) => r !== row);
        setSelectedRows(newSelection);
        onRowSelect && onRowSelect(newSelection);
      } else {
        const newSelection = [...selectedRows, row];
        setSelectedRows(newSelection);
        onRowSelect && onRowSelect(newSelection);
      }
    }
  };

  const handleSelectAll = () => {
    if (selectionType !== 'all') return;
    if (selectedRows.length === filteredData.length) {
      setSelectedRows([]);
      onRowSelect && onRowSelect([]);
    } else {
      setSelectedRows([...filteredData]);
      onRowSelect && onRowSelect([...filteredData]);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
  );

  const renderSearch = () => (
    <div className="flex items-center mb-4">
      <label className="mr-2 font-inter font-normal text-base leading-6 text-secondary-7">Search:</label>
      <input
        type="text"
        className="border border-bw-3 h-10 outline-none rounded-lg py-1 px-2 font-inter font-normal text-base leading-6 text-black"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );

  return (
    <div className="w-full overflow-x-auto">

      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          {showSearch && searchPosition === 'top' && renderSearch()}
          {showShort && (
            <div className="flex items-center relative">
              <label className="mr-2 font-inter font-normal text-base leading-6 text-secondary-7">{sortByLabel}</label>
              <IoIosArrowDown className='absolute right-2 top-1/2 -translate-y-1/2 text-black text-2xl w-6 h-6 z-[2]' />
              <select
                className="border appearance-none pr-10 border-bw-3 h-10 outline-none rounded-lg py-1 px-2 font-inter font-normal text-base leading-6 text-black"
                value={sortBy}
                onChange={handleSortChange}
              >
                <option value="">Select column</option>
                {columns.map((col) => (
                  <option key={col.key} value={col.key}>
                    {col.label}
                  </option>
                ))}
              </select>
            </div>
          )}

          {showRowsPerPageLabel && (
            <div className="flex items-center relative">
              <label className="mr-2 font-inter font-normal text-base leading-6 text-secondary-7">{rowsPerPageLabel}</label>
              <IoIosArrowDown className='absolute right-2 top-1/2 -translate-y-1/2 text-black text-2xl w-6 h-6 z-[2]' />
              <select
                className="border appearance-none pr-10 border-bw-3 h-10 outline-none rounded-lg py-1 px-2 font-inter font-normal text-base leading-6 text-black"
                value={rowsPerPage}
                onChange={(e) => setRowsPerPage(Number(e.target.value))}
              >
                {rowsPerPageOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          )}
            {showCustomButtonGroup && customButtonGroup}
        </div>

        {paginationPosition === 'top' || paginationPosition === 'both' ? (
          <div className="mb-4">{renderPagination()}</div>
        ) : null}
      </div>

      <table className="min-w-full bg-white border-none">
        <thead>
          <tr>
            {selectionType === 'all' && (
              <th className="py-2 px-4 border-b cursor-pointer font-bold text-base leading-6 uppercase text-left">
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={selectedRows.length === filteredData.length}
                />
              </th>
            )}
            {columns.map((col) => (
              <th
                key={col.key}
                className="py-2 px-4 border-b cursor-pointer font-bold text-base leading-6 uppercase text-left"
                onClick={() => sortRows(col.key)}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row, index) => (
            <tr
              key={index}
              className={`hover:bg-gray-100 ${index % 2 === 1 ? 'bg-gray-50' : ''
                } ${selectedRows.includes(row) ? 'bg-gray-200' : ''}`}
              onClick={() => handleRowSelect(row)}
            >
              {selectionType === 'all' && (
                <td className="py-2 px-4 border-b">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row)}
                    onChange={() => handleRowSelect(row)}
                  />
                </td>
              )}
              {columns.map((col) => (
                <td key={col.key} className="py-4 px-4 border-none text-base text-left">
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className={`flex  items-center ${paginationPosition === 'bottom' || paginationPosition === 'both' ? 'mt-4 justify-end' : 'justify-between'}`}>
        {showSearch && searchPosition === 'bottom' && renderSearch()}
        {paginationPosition === 'bottom' || paginationPosition === 'both' ? (
          <div className="mt-4">{renderPagination()}</div>
        ) : null}
      </div>


    </div>
  );
};

export default Table;
