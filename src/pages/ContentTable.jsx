import React from 'react';
import { MoreVertical, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

const ContentTable = () => {
  return (
    <div className="p-6 bg-white rounded-lg">
      <h1 className="text-2xl font-semibold text-indigo-900 mb-4">Permintaan Pengembangan Produk</h1>
      
      {/* Tabs */}
      <div className="border-b border-gray-200 mb-4">
        <div className="flex gap-8">
          <button className="text-gray-400 pb-2">List Permintaan</button>
          <button className="text-blue-600 pb-2 border-b-2 border-blue-600">Pengembangan</button>
        </div>
      </div>

      {/* Search and Actions */}
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
          <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-700">Export</button>
          <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-700 flex items-center gap-2">
            <Filter size={16} />
            Filter
          </button>
        </div>
      </div>

      {/* Table */}
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50 rounded-lg">
            <th className="py-3 px-4 text-left text-indigo-900 first:rounded-l-lg last:rounded-r-lg">PRD</th>
            <th className="py-3 px-4 text-left text-indigo-900">Permintaan</th>
            <th className="py-3 px-4 text-left text-indigo-900">Tanggal</th>
            <th className="py-3 px-4 text-left text-indigo-900">Disetujui</th>
            <th className="py-3 px-4 text-left text-indigo-900">Status</th>
            <th className="py-3 px-4 text-left text-indigo-900 first:rounded-l-lg last:rounded-r-lg"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {[
            { id: '109281', name: 'Vipalbulmin', date: '10/03/2023', status: '3 / 7' },
            { id: '109282', name: 'Heparmin', date: '01/02/2023', status: '3 / 7' },
            { id: '109283', name: 'Vipachol', date: '03/10/2023', status: '3 / 7' },
            { id: '109284', name: 'Astavip', date: '08/06/2023', status: '3 / 7' },
            { id: '109285', name: 'VipaCal', date: '02/10/2023', status: 'Selesai' },
            { id: '109286', name: 'ImunoVip', date: '04/07/2023', status: 'Selesai' },
            { id: '109287', name: 'Vipiron', date: '22/12/2023', status: 'Selesai' },
            { id: '109288', name: 'Kan Gabus', date: '16/09/2023', status: 'Selesai' },
          ].map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="py-4 px-4 text-blue-600">{item.id}</td>
              <td className="py-4 px-4">{item.name}</td>
              <td className="py-4 px-4">{item.date}</td>
              <td className="py-4 px-4">{item.date}</td>
              <td className="py-4 px-4">
                <span className={`px-3 py-1 rounded-full ${
                  item.status === 'Selesai' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {item.status}
                </span>
              </td>
              <td className="py-4 px-4">
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100">
            <ChevronLeft size={16} className="text-gray-400" />
          </button>
          <div className="flex gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded bg-indigo-900 text-white">1</button>
            {[2,3,4,5].map(num => (
              <button key={num} className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded">
                {num}
              </button>
            ))}
          </div>
          <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100">
            <ChevronRight size={16} className="text-gray-400" />
          </button>
        </div>
        <div className="relative">
          <select className="appearance-none border border-gray-200 rounded-lg pl-3 pr-8 py-2 bg-white">
            <option>10 / Page</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ContentTable;