import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Category from "./Category";

const DreamCategoryItem = () => {
    const [prodouct, setProduct] = useState([]);
    const {category} = useParams();
    useEffect(()=> {
        fetch(`http://localhost:8000/category/${category}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [category])

    return (
        <>
        <Category data={prodouct}/>
        </>
    );
};

export default DreamCategoryItem;