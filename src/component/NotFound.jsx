import { Link } from "react-router-dom";
import "./buttons/button.css"
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-clr-bg">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-xl mt-4">Page Not Found</p>

      <Link to="/" className=" mt-6 px-6 py-3 my-button">
        Go Back Home
      </Link>

    </div>
  );
};

export default NotFound;