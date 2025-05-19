import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Category from "./Category";
import Loading from "../pages/Loding";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const DreamCategoryItem = () => {
    const { category } = useParams();
    const { user } = useContext(AuthContext);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const userEmail = user?.email || '';
        const query = new URLSearchParams({
            category: category,
            user: userEmail,
        }).toString();

        fetch(`${import.meta.env.VITE_SERVER_url}/category?${query}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [category, user]);
console.log(product);
    return <>
    {product.length === 0 ? <Loading /> : <Category data={product} />}
    </>;
};

export default DreamCategoryItem;
