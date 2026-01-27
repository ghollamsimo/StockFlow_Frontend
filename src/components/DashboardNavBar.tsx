export default function DashboardNavBar() {
    return(
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">StockFLOW</h1>
                <div className="flex items-center gap-4">
                    <button className="px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50">
                        Settings
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600">
                        Logout
                    </button>
                </div>
            </div>
        </header>
    )
}