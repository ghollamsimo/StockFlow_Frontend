import {Link} from "react-router-dom";

export default function SideBarComponent() {
    return(
        <aside className="w-72 bg-white shadow-lg">
            <div className="px-6 py-6 border-b">
                <h2 className="text-2xl font-bold text-gray-800">Shop Admin</h2>
                <p className="text-gray-500 text-sm mt-1">Inventory & Orders</p>
            </div>

            <nav className="px-4 py-6">
                <Link to='/dashboard' className="block px-4 py-3 rounded-lg hover:bg-gray-100 font-semibold mb-2">
                    Dashboard
                </Link>
                <Link to='/products' className="block px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700 mb-2">
                    Products
                </Link>
                <a className="block px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700 mb-2" href="#">
                    Clients
                </a>
                <a className="block px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700 mb-2" href="#">
                    Orders
                </a>
                <a className="block px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700 mb-2" href="#">
                    Stock Movements
                </a>
            </nav>
        </aside>
    )
}