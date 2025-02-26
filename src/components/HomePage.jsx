import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function HomePage() {
    // Fetch books from Redux store
    const books = useSelector((state) => state.books.books);

    // Select a few books to display as "Popular Books"
    const popularBooks = books.slice(0, 5); // Adjust the number of popular books as needed

    // Extract unique genres from the books
    const genres = [...new Set(books.map((book) => book.genre))];

    const [selectedGenre, setSelectedGenre] = useState("");

    const navigate = useNavigate();

    // Handle genre selection
    const handleGenreChange = (e) => {
        setSelectedGenre(e.target.value);
        if (e.target.value) {
            navigate(`/browse-books/${e.target.value}`);
        }
    };

    return (
        <div className="bg-gradient-to-r from-blue-200 to-blue-500 min-h-screen p-8">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-white mb-6">Welcome to the Online Library</h1>

                {/* Book Categories Dropdown Section */}
                <div className="mb-12">
                    <h2 className="text-3xl text-white font-semibold mb-4">Book Categories:</h2>
                    <div className="relative inline-block text-left">
                        <select
                            value={selectedGenre}
                            onChange={handleGenreChange}
                            className="bg-white p-4 rounded-lg shadow-lg text-xl font-medium text-blue-600 hover:bg-blue-100 transition-colors w-full"
                        >
                            <option value="" disabled>
                                Select a Genre
                            </option>
                            {genres.map((genre) => (
                                <option key={genre} value={genre}>
                                    {genre}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Popular Books Section */}
                <div>
                    <h2 className="text-3xl text-white font-semibold mb-4">Popular Books</h2>
                    <div className="space-y-4 ml-54">
                        {/* Map through popular books and display them */}
                        {popularBooks.map((book) => (
                            <div key={book.id} className="bg-white p-4 rounded-lg shadow-md w-2/3">
                                <div className="flex justify-between items-center">
                                    <Link
                                        to={`/book/${book.id}`}
                                        className="block text-lg text-blue-800 hover:underline"
                                    >
                                        {book.title}
                                    </Link>
                                    <Link
                                        to={`/book/${book.id}`}
                                        className="text-blue-600 hover:underline text-sm"
                                    >
                                        View More Details
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
