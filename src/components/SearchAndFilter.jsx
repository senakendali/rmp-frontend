import { Filter } from "lucide-react";

const SearchAndFilter = () => {
  return (
    <div className="flex justify-between mb-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="pl-4 pr-10 py-2 border border-gray-200 rounded-lg w-80"
        />
        <svg
          className="absolute right-3 top-2.5 text-gray-400 w-5 h-5"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5 17.5L12.5 12.5M14.1667 8.33333C14.1667 11.555 11.555 14.1667 8.33333 14.1667C5.11167 14.1667 2.5 11.555 2.5 8.33333C2.5 5.11167 5.11167 2.5 8.33333 2.5C11.555 2.5 14.1667 5.11167 14.1667 8.33333Z"
            stroke="currentColor"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="flex gap-3">
        <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-700">
          Export
        </button>
        <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-700 flex items-center gap-2">
          <Filter size={16} />
          Filter
        </button>
      </div>
    </div>
  );
};
export default SearchAndFilter;
