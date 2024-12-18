import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Category from "./Category";
import Loding from "../pages/Loding";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const DreamCategoryItem = () => {
    const { category } = useParams();
    console.log(category);
    const { user } = useContext(AuthContext);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const userEmail = user?.email || '';
        const query = new URLSearchParams({
            category: category,
            user: userEmail,
        }).toString();

        fetch(`http://localhost:8000/category?${query}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [category, user]);

    return <>
    {product.length === 0 ? <Loding /> : <Category data={product} />}
    </>;
};

export default DreamCategoryItem;
