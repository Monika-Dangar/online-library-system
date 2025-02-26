import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <div className="p-6 text-center">
            <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
            <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">Go to Home</Link>
        </div>
    );
}

export default NotFoundPage;
