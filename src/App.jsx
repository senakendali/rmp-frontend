// App.jsx
import React from 'react';
import CMSHeader from './components/layouts/CMSHeader.jsx';
import SidebarMenu from './components/layouts/SidebarMenu.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[calc(100%-20px)] mx-auto">
        <CMSHeader />
        <div className="flex mt-4">
          <SidebarMenu />
        </div>
      </div>
    </div>
  );
}

export default App;