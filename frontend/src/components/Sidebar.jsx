import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className="w-64 h-screen bg-white shadow-lg p-4">
            <h1 className="text-xl font-bold mb-4">Supply Tracker</h1>
            <nav className="flex flex-col space-y-2">
                <Link to="/" className="p-2 rounded hover:bg-gray-200">Home</Link>
                <Link to="/stock" className="p-2 rounded hover:bg-gray-200">Stock</Link>
                <Link to="/delivery" className="p-2 rounded hover:bg-gray-200">Delivery</Link>
                <Link to="/map" className="p-2 rounded hover:bg-gray-200">Map</Link>
                <Link to="/clients" className="p-2 rounded hover:bg-gray-200">Clients</Link>
            </nav>
        </aside>
    );
};

export default Sidebar;
