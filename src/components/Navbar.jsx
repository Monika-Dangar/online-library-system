import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-blue-600 text-white p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Library System</h1>
                <ul className="flex space-x-6">
                    <li><Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link></li>
                    <li><Link to="/browse-books" className="hover:text-yellow-400 transition-colors">Browse Books</Link></li>
                    <li><Link to="/add-book" className="hover:text-yellow-400 transition-colors">Add Book</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
