// // import { useParams, Link } from "react-router-dom";
// // import { useDispatch, useSelector } from "react-redux";
// // import { setSearchQuery } from "../redux/bookSlice";

// // function BrowseBooksPage() {
// //     const { category } = useParams();
// //     const books = useSelector(state => state.books.books);
// //     const searchQuery = useSelector(state => state.books.searchQuery);
// //     const dispatch = useDispatch();

// //     const filteredBooks = books.filter(book =>
// //         (book.category === category || !category) &&
// //         (book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //             book.author.toLowerCase().includes(searchQuery.toLowerCase()))
// //     );

// //     const handleSearch = (e) => {
// //         dispatch(setSearchQuery(e.target.value));
// //     };

// //     return (
// //         <div className="bg-gradient-to-r from-blue-200 to-blue-500 min-h-screen p-8">
// //             <div className="max-w-4xl mx-auto">
// //                 <h1 className="text-4xl font-semibold text-blue-800 mb-6">Browse Books</h1>

// //                 <input
// //                     type="text"
// //                     placeholder="Search by title or author"
// //                     value={searchQuery}
// //                     onChange={handleSearch}
// //                     className="p-3 bg-white border border-gray-300 rounded-lg w-full mb-8 shadow-md"
// //                 />

// //                 <h2 className="text-2xl text-gray-100 font-semibold mb-4">{category ? `${category} Books` : 'All Books'}</h2>
// //                 <ul className="space-y-6">
// //                     {filteredBooks.map(book => (
// //                         <li key={book.id} className="bg-white p-4 rounded-lg shadow-md">
// //                             <Link to={`/book/${book.id}`} className="text-xl text-blue-600 hover:underline">
// //                                 {book.title}
// //                             </Link>
// //                             <p className="text-gray-600">{book.author}</p>
// //                         </li>
// //                     ))}
// //                 </ul>
// //             </div>
// //         </div>
// //     );
// // }

// // export default BrowseBooksPage;

// import { useParams, Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { setSearchQuery } from "../redux/bookSlice";

// function BrowseBooksPage() {
//     const { category } = useParams();
//     const books = useSelector(state => state.books.books);
//     const searchQuery = useSelector(state => state.books.searchQuery);
//     const dispatch = useDispatch();

//     const filteredBooks = books.filter(book =>
//         (book.category === category || !category) &&
//         (book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//             book.author.toLowerCase().includes(searchQuery.toLowerCase()))
//     );

//     const handleSearch = (e) => {
//         dispatch(setSearchQuery(e.target.value));
//     };

//     return (
//         <div className="bg-gradient-to-r from-blue-200 to-blue-500 min-h-screen p-8">
//             <div className="max-w-4xl mx-auto">
//                 <h1 className="text-4xl font-semibold text-blue-800 mb-6">Browse Books</h1>

//                 <input
//                     type="text"
//                     placeholder="Search by title or author"
//                     value={searchQuery}
//                     onChange={handleSearch}
//                     className="p-3 bg-white border border-gray-300 rounded-lg w-full mb-8 shadow-md"
//                 />

//                 <h2 className="text-2xl text-gray-100 font-semibold mb-4">{category ? `${category} Books` : 'All Books'}</h2>
//                 <ul className="space-y-6">
//                     {filteredBooks.map(book => (
//                         <li key={book.id} className="flex justify-between bg-white p-4 rounded-lg shadow-md">
//                             <div>

//                                 <Link to={`/book/${book.id}`} className="text-xl text-blue-600 hover:underline">
//                                     {book.title}
//                                 </Link>
//                                 <p className="text-gray-600">{book.author}</p>

//                             </div>
//                             <Link
//                                 to={`/book/${book.id}`}
//                                 className="text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-md text-lg h-10"
//                             >
//                                 View Details
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// }

// export default BrowseBooksPage;

// import { useParams, Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { setSearchQuery } from "../redux/bookSlice";
// import { useDispatch } from "react-redux";

// function BrowseBooksPage() {
//     const { category } = useParams();  // Get category from the URL
//     const books = useSelector((state) => state.books.books);
//     const searchQuery = useSelector((state) => state.books.searchQuery);
//     const dispatch = useDispatch();

//     const filteredBooks = books.filter(
//         (book) =>
//             (category ? book.genre.toLowerCase() === category.toLowerCase() : true) &&
//             (book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                 book.author.toLowerCase().includes(searchQuery.toLowerCase()))
//     );

//     const handleSearch = (e) => {
//         dispatch(setSearchQuery(e.target.value)); // Update search query in Redux store
//     };

//     return (
//         <div className="bg-gradient-to-r from-blue-200 to-blue-500 min-h-screen p-8">
//             <div className="max-w-4xl mx-auto">
//                 <h1 className="text-4xl font-semibold text-blue-800 mb-6">
//                     Browse {category ? category.charAt(0).toUpperCase() + category.slice(1) : "Books"}
//                 </h1>

//                 {/* Search Input */}
//                 <input
//                     type="text"
//                     placeholder="Search by title or author"
//                     value={searchQuery}
//                     onChange={handleSearch}
//                     className="p-3 bg-white border border-gray-300 rounded-lg w-full mb-8 shadow-md"
//                 />

//                 {/* Display the filtered books */}
//                 <ul className="space-y-6">
//                     {filteredBooks.length > 0 ? (
//                         filteredBooks.map((book) => (
//                             <li key={book.id} className="bg-white p-4 rounded-lg shadow-md">
//                                 <Link to={`/book/${book.id}`} className="text-xl text-blue-600 hover:underline">
//                                     {book.title}
//                                 </Link>
//                                 <p className="text-gray-600">{book.author}</p>

//                                 {/* View More Details Link */}
//                                 <div className="mt-2">
//                                     <Link
//                                         to={`/book/${book.id}`}
//                                         className="text-blue-600 hover:underline text-sm"
//                                     >
//                                         View More Details
//                                     </Link>
//                                 </div>
//                             </li>
//                         ))
//                     ) : (
//                         <p className="text-center text-gray-600">No books found</p>
//                     )}
//                 </ul>
//             </div>
//         </div>
//     );
// }

// export default BrowseBooksPage;

// -------------------------------------------
// import { useParams, Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { setSearchQuery } from "../redux/bookSlice";
// import { useDispatch } from "react-redux";

// function BrowseBooksPage() {
//     const { category } = useParams();
//     const books = useSelector((state) => state.books.books);
//     const searchQuery = useSelector((state) => state.books.searchQuery);
//     const dispatch = useDispatch();

//     // If category exists in URL, filter by genre, else show all books
//     const filteredBooks = books.filter(
//         (book) =>
//             (category ? book.genre.toLowerCase() === category.toLowerCase() : true) &&
//             (book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                 book.author.toLowerCase().includes(searchQuery.toLowerCase()))
//     );

//     // Handle search input change
//     const handleSearch = (e) => {
//         dispatch(setSearchQuery(e.target.value)); // Dispatch search query to Redux store
//     };

//     return (
//         <div className="bg-gradient-to-r from-blue-200 to-blue-500 min-h-screen p-8">
//             <div className="max-w-4xl mx-auto">
//                 <h1 className="text-4xl font-semibold text-blue-800 mb-6">
//                     Browse {category ? category.charAt(0).toUpperCase() + category.slice(1) : "Books"}
//                 </h1>

//                 {/* Search Input */}
//                 <input
//                     type="text"
//                     placeholder="Search by title or author"
//                     value={searchQuery}
//                     onChange={handleSearch}
//                     className="p-3 bg-white border border-gray-300 rounded-lg w-full mb-8 shadow-md"
//                 />

//                 {/* Display filtered books */}
//                 <ul className="space-y-6">
//                     {filteredBooks.length > 0 ? (
//                         filteredBooks.map((book) => (
//                             <li key={book.id} className="bg-white p-4 rounded-lg shadow-md">
//                                 <Link to={`/book/${book.id}`} className="text-xl text-blue-600 hover:underline">
//                                     {book.title}
//                                 </Link>
//                                 <p className="text-gray-600">{book.author}</p>

//                                 {/* View More Details Link */}
//                                 <div className="mt-2">
//                                     <Link
//                                         to={`/book/${book.id}`}
//                                         className="text-blue-600 hover:underline text-sm"
//                                     >
//                                         View More Details
//                                     </Link>
//                                 </div>
//                             </li>
//                         ))
//                     ) : (
//                         <p className="text-center text-gray-600">No books found</p>
//                     )}
//                 </ul>
//             </div>
//         </div>
//     );
// }

// export default BrowseBooksPage;

import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { setSearchQuery } from "../redux/bookSlice";
import { useDispatch } from "react-redux";

function BrowseBooksPage() {
    const { category } = useParams();  // Get category from the URL
    const books = useSelector((state) => state.books.books); // Fetch all books from Redux
    const searchQuery = useSelector((state) => state.books.searchQuery); // Fetch search query from Redux
    const dispatch = useDispatch();

    // Filter books based on category and search query
    const filteredBooks = books.filter((book) => {
        // If category is provided, filter by genre, else show all books
        const matchesCategory = category ? book.genre.toLowerCase() === category.toLowerCase() : true;

        // Search query match (case insensitive)
        const matchesSearchQuery =
            book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.toLowerCase());

        // Return the book only if it matches both criteria
        return matchesCategory && matchesSearchQuery;
    });

    // Handle search input change
    const handleSearch = (e) => {
        dispatch(setSearchQuery(e.target.value)); // Dispatch search query to Redux store
    };

    return (
        <div className="bg-gradient-to-r from-blue-200 to-blue-500 min-h-screen p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-semibold text-blue-800 mb-6">
                    Browse {category ? category.charAt(0).toUpperCase() + category.slice(1) : "Books"}
                </h1>

                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Search by title or author"
                    value={searchQuery}
                    onChange={handleSearch}
                    className="p-3 bg-white border border-gray-300 rounded-lg w-full mb-8 shadow-md"
                />

                {/* Display filtered books */}
                <ul className="space-y-6">
                    {filteredBooks.length > 0 ? (
                        filteredBooks.map((book) => (
                            <li key={book.id} className="bg-white p-4 rounded-lg shadow-md">
                                <Link to={`/book/${book.id}`} className="text-xl text-blue-600 hover:underline">
                                    {book.title}
                                </Link>
                                <p className="text-gray-600">{book.author}</p>

                                {/* View More Details Link */}
                                <div className="mt-2">
                                    <Link
                                        to={`/book/${book.id}`}
                                        className="text-blue-600 hover:underline text-sm"
                                    >
                                        View More Details
                                    </Link>
                                </div>
                            </li>
                        ))
                    ) : (
                        <p className="text-center text-gray-600">No books found</p>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default BrowseBooksPage;
