export default function test() {
  return (
    <section className="flex min-h-screen bg-[#F8F9FA] p-8 gap-8 font-sans antialiased text-[#2D4A43]">
      
      {/* ======================================================== */}
      {/* 1. SIDEBAR COLLAPSED (VERSI SEMPIT)                      */}
      {/* ======================================================== */}
      <div className="w-16 bg-white rounded-2xl flex flex-col justify-between py-6 items-center border border-gray-100 shadow-sm relative">
        
        {/* Tombol Toggle Arrow */}
        <div className="absolute -right-3 top-7 bg-white border border-gray-100 shadow-md rounded-lg p-1 text-gray-400 hover:text-emerald-600 cursor-pointer">
          <img src="/icons/chevron-right.svg" alt="Toggle" className="w-4 h-4 object-contain" />
        </div>

        <div className="w-full flex flex-col items-center">
          {/* Logo Flup */}
          <div className="mb-6">
            <img src="/icons/logo.svg" alt="Logo" className="w-8 h-8 object-contain" />
          </div>

          {/* Grup M (Marketing) */}
          <div className="w-full text-center mb-4">
            <span className="text-[10px] font-bold text-gray-400 block mb-2">M</span>
            <div className="flex flex-col items-center gap-2 px-2">
              {/* Item Aktif (Dashboard) */}
              <div className="p-2.5 bg-[#E8F2F0] rounded-xl cursor-pointer w-10 h-10 flex items-center justify-center">
                <img src="/icons/dashboard-active.svg" alt="Dashboard" className="w-5 h-5 object-contain" />
              </div>
              <div className="p-2.5 rounded-xl cursor-pointer w-10 h-10 flex items-center justify-center">
                <img src="/icons/marketplace.svg" alt="Marketplace" className="w-5 h-5 object-contain" />
              </div>
              <div className="p-2.5 rounded-xl cursor-pointer w-10 h-10 flex items-center justify-center">
                <img src="/icons/orders.svg" alt="Orders" className="w-5 h-5 object-contain" />
              </div>
              <div className="p-2.5 rounded-xl cursor-pointer w-10 h-10 flex items-center justify-center">
                <img src="/icons/tracking.svg" alt="Tracking" className="w-5 h-5 object-contain" />
              </div>
              <div className="p-2.5 rounded-xl cursor-pointer w-10 h-10 flex items-center justify-center">
                <img src="/icons/customers.svg" alt="Customers" className="w-5 h-5 object-contain" />
              </div>
              <div className="p-2.5 rounded-xl cursor-pointer w-10 h-10 flex items-center justify-center">
                <img src="/icons/discounts.svg" alt="Discounts" className="w-5 h-5 object-contain" />
              </div>
            </div>
          </div>

          {/* Grup P (Payments) */}
          <div className="w-full text-center mb-4">
            <span className="text-[10px] font-bold text-gray-400 block mb-2">P</span>
            <div className="flex flex-col items-center gap-2 px-2">
              <div className="p-2.5 rounded-xl cursor-pointer w-10 h-10 flex items-center justify-center">
                <img src="/icons/ledger.svg" alt="Ledger" className="w-5 h-5 object-contain" />
              </div>
              <div className="p-2.5 rounded-xl cursor-pointer w-10 h-10 flex items-center justify-center">
                <img src="/icons/taxes.svg" alt="Taxes" className="w-5 h-5 object-contain" />
              </div>
            </div>
          </div>

          {/* Grup S (System) */}
          <div className="w-full text-center">
            <span className="text-[10px] font-bold text-gray-400 block mb-2">S</span>
            <div className="flex flex-col items-center gap-2 px-2">
              <div className="p-2.5 rounded-xl cursor-pointer w-10 h-10 flex items-center justify-center">
                <img src="/icons/settings.svg" alt="Settings" className="w-5 h-5 object-contain" />
              </div>
              
              {/* Dark mode Switch Matikan */}
              <div className="w-8 h-4 bg-gray-200 rounded-full relative p-0.5 mt-2 cursor-pointer">
                <div className="w-3 h-3 bg-white rounded-full shadow-sm absolute left-0.5 top-0.5" />
              </div>
            </div>
          </div>
        </div>

        {/* Bagian Profil Bawah */}
        <div className="flex flex-col items-center gap-4 w-full border-t border-gray-100 pt-4">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Avatar" className="w-8 h-8 rounded-full object-cover" />
          <div className="cursor-pointer w-10 h-10 flex items-center justify-center">
            <img src="/icons/logout.svg" alt="Log out" className="w-5 h-5 object-contain" />
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. SIDEBAR EXPANDED (VERSI LEBAR)                        */}
      {/* ======================================================== */}
      <div className="w-64 bg-white rounded-2xl flex flex-col justify-between p-6 border border-gray-100 shadow-sm relative">
        
        {/* Tombol Toggle Arrow */}
        <div className="absolute -right-3 top-7 bg-white border border-gray-100 shadow-md rounded-lg p-1 text-gray-400 hover:text-emerald-600 cursor-pointer">
          <img src="/icons/chevron-left.svg" alt="Toggle" className="w-4 h-4 object-contain" />
        </div>

        <div>
          {/* Judul Aplikasi / Logo */}
          <div className="flex items-center gap-2.5 mb-6 px-2 text-[#2D4A43]">
            <img src="/icons/logo.svg" alt="Logo Flup" className="w-8 h-8 object-contain" />
            <span className="font-bold text-xl tracking-tight">Flup</span>
          </div>

          {/* Kategori MARKETING */}
          <div className="mb-5">
            <span className="text-[11px] font-bold tracking-wider text-gray-400 block mb-2 px-2 uppercase">Marketing</span>
            <div className="space-y-1">
              {/* Menu Aktif (Dashboard) */}
              <div className="flex items-center gap-3 px-3 py-2.5 bg-[#E8F2F0] text-[#2D4A43] font-semibold rounded-xl cursor-pointer">
                <img src="layout-dashboard.svg" alt="Dashboard" className="w-5 h-5 object-contain" />
                <span className="text-sm">Dashboard</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:bg-gray-50 hover:text-[#2D4A43] rounded-xl cursor-pointer transition-all">
                <img src="shopping-cart.svg" alt="Marketplace" className="w-5 h-5 object-contain" />
                <span className="text-sm">Marketplace</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:bg-gray-50 hover:text-[#2D4A43] rounded-xl cursor-pointer transition-all">
                <img src="/icons/orders.svg" alt="Orders" className="w-5 h-5 object-contain" />
                <span className="text-sm">Orders</span>
              </div>
              <div className="flex items-center justify-between px-3 py-2.5 text-gray-500 hover:bg-gray-50 hover:text-[#2D4A43] rounded-xl cursor-pointer transition-all">
                <div className="flex items-center gap-3">
                  <img src="/icons/tracking.svg" alt="Tracking" className="w-5 h-5 object-contain" />
                  <span className="text-sm">Tracking</span>
                </div>
                <img src="/icons/chevron-down.svg" alt="Dropdown" className="w-3 h-3 object-contain" />
              </div>
              <div className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:bg-gray-50 hover:text-[#2D4A43] rounded-xl cursor-pointer transition-all">
                <img src="/icons/customers.svg" alt="Customers" className="w-5 h-5 object-contain" />
                <span className="text-sm">Customers</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:bg-gray-50 hover:text-[#2D4A43] rounded-xl cursor-pointer transition-all">
                <img src="/icons/discounts.svg" alt="Discounts" className="w-5 h-5 object-contain" />
                <span className="text-sm">Discounts</span>
              </div>
            </div>
          </div>

          {/* Kategori PAYMENTS */}
          <div className="mb-5">
            <span className="text-[11px] font-bold tracking-wider text-gray-400 block mb-2 px-2 uppercase">Payments</span>
            <div className="space-y-1">
              <div className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:bg-gray-50 hover:text-[#2D4A43] rounded-xl cursor-pointer transition-all">
                <img src="/icons/ledger.svg" alt="Ledger" className="w-5 h-5 object-contain" />
                <span className="text-sm">Ledger</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:bg-gray-50 hover:text-[#2D4A43] rounded-xl cursor-pointer transition-all">
                <img src="/icons/taxes.svg" alt="Taxes" className="w-5 h-5 object-contain" />
                <span className="text-sm">Taxes</span>
              </div>
            </div>
          </div>

          {/* Kategori SYSTEM */}
          <div>
            <span className="text-[11px] font-bold tracking-wider text-gray-400 block mb-2 px-2 uppercase">System</span>
            <div className="space-y-1">
              <div className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:bg-gray-50 hover:text-[#2D4A43] rounded-xl cursor-pointer transition-all">
                <img src="/icons/settings.svg" alt="Settings" className="w-5 h-5 object-contain" />
                <span className="text-sm">Settings</span>
              </div>
              <div className="flex items-center justify-between px-3 py-2.5 text-gray-500 rounded-xl">
                <div className="flex items-center gap-3">
                  <img src="/icons/dark-mode.svg" alt="Dark Mode" className="w-5 h-5 object-contain" />
                  <span className="text-sm">Dark mode</span>
                </div>
                <div className="w-9 h-5 bg-[#2D4A43] rounded-full relative p-0.5 cursor-pointer">
                  <div className="w-4 h-4 bg-white rounded-full shadow-md absolute right-0.5 top-0.5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bagian Bawah Profil & Log Out */}
        <div className="border-t border-gray-100 pt-4 space-y-3">
          <div className="flex items-center gap-3 px-2">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Avatar" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="text-sm font-bold text-gray-800 leading-tight">Harper Nelson</p>
              <span className="text-[11px] text-gray-400 font-medium">Admin Manager</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-red-500 rounded-xl cursor-pointer transition-all">
            <img src="/icons/logout.svg" alt="Log out" className="w-5 h-5 object-contain" />
            <span className="text-sm font-medium">Log out</span>
          </div>
        </div>
      </div>

    </section>
  );
}