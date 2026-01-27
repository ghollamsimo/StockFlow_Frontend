import SideBarComponent from "../../components/SideBarComponent.tsx";
import DashboardNavBar from "../../components/DashboardNavBar.tsx";

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-gray-100 flex">
                <SideBarComponent/>
            <main className="flex-1">
               <DashboardNavBar/>

                <div className="max-w-7xl mx-auto px-6 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="bg-white rounded-2xl shadow p-6">
                            <div className="text-gray-500 text-sm">Products</div>
                            <div className="text-3xl font-bold mt-2">15</div>
                            <div className="text-xs text-green-600 mt-2">+5% this week</div>
                        </div>

                        <div className="bg-white rounded-2xl shadow p-6">
                            <div className="text-gray-500 text-sm">Clients</div>
                            <div className="text-3xl font-bold mt-2">5</div>
                            <div className="text-xs text-green-600 mt-2">+2% this week</div>
                        </div>

                        <div className="bg-white rounded-2xl shadow p-6">
                            <div className="text-gray-500 text-sm">Orders</div>
                            <div className="text-3xl font-bold mt-2">10</div>
                            <div className="text-xs text-yellow-600 mt-2">+1% this week</div>
                        </div>

                        <div className="bg-white rounded-2xl shadow p-6">
                            <div className="text-gray-500 text-sm">Stock</div>
                            <div className="text-3xl font-bold mt-2">IN/OUT</div>
                            <div className="text-xs text-red-600 mt-2">-3% this week</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white rounded-2xl shadow p-6">
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-bold text-gray-800">Recent Orders</h2>
                                <span className="text-xs text-gray-500">Last 7 days</span>
                            </div>

                            <div className="mt-4">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                                            Order
                                        </th>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                                            Client
                                        </th>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                                            Status
                                        </th>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                                            Total
                                        </th>
                                    </tr>
                                    </thead>

                                    <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-4 py-3">#1001</td>
                                        <td className="px-4 py-3">John Doe</td>
                                        <td className="px-4 py-3">
                        <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">
                          Delivered
                        </span>
                                        </td>
                                        <td className="px-4 py-3">$120</td>
                                    </tr>

                                    <tr>
                                        <td className="px-4 py-3">#1002</td>
                                        <td className="px-4 py-3">Mary Jane</td>
                                        <td className="px-4 py-3">
                        <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-700">
                          Pending
                        </span>
                                        </td>
                                        <td className="px-4 py-3">$70</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow p-6">
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-bold text-gray-800">Activity Feed</h2>
                                <span className="text-xs text-gray-500">Live</span>
                            </div>

                            <div className="mt-4 space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                                    <div>
                                        <div className="text-sm font-semibold">New order created</div>
                                        <div className="text-xs text-gray-500">#1003 • 2 minutes ago</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                                    <div>
                                        <div className="text-sm font-semibold">Stock updated</div>
                                        <div className="text-xs text-gray-500">Product #12 • 1 hour ago</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2"></div>
                                    <div>
                                        <div className="text-sm font-semibold">New client added</div>
                                        <div className="text-xs text-gray-500">John Doe • 3 hours ago</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
