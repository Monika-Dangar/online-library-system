import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetailsPage() {
    const { id } = useParams();
    const book = useSelector(state => state.books.books.find(book => book.id === parseInt(id)));

    if (!book) return <div className="text-center text-red-500 text-xl">Book not found</div>;

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 to-blue-500 p-4">
            <div className="bg-white rounded-lg shadow-xl p-6 max-w-lg w-full mb-32">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">{book.title}</h1>
                <h2 className="text-xl font-medium text-center text-gray-600 mb-4">by {book.author}</h2>

                <div className="mb-4">
                    <p className="text-gray-700 text-base leading-relaxed">{book.description}</p>
                </div>

                <div className="text-center">
                    <p className="text-xl font-semibold text-gray-800">Rating: {book.rating}</p>
                </div>

                <div className="mt-6 text-center">
                    <Link to="/browse-books" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Back to Browse
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BookDetailsPage;
