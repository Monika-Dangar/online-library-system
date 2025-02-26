import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/bookSlice";

function AddBookPage() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !author || !description) {
            alert("Please fill out all fields.");
            return;
        }

        const newBook = { id: Date.now(), title, author, description, rating };
        dispatch(addBook(newBook));
        navigate("/browse-books");
    };

    return (
        <div className="bg-gradient-to-r from-blue-200 to-blue-500 min-h-screen p-8">
            <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-semibold text-center text-blue-800 mb-6">Add a New Book</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="p-3 border border-gray-300 rounded-lg w-full"
                    />
                    <input
                        type="text"
                        placeholder="Author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="p-3 border border-gray-300 rounded-lg w-full"
                    />
                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="p-3 border border-gray-300 rounded-lg w-full"
                    />
                    <input
                        type="number"
                        placeholder="Rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        className="p-3 border border-gray-300 rounded-lg w-full"
                    />
                    <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded-lg w-full hover:bg-blue-700 transition-colors">Add Book</button>
                </form>
            </div>
        </div>
    );
}

export default AddBookPage;
