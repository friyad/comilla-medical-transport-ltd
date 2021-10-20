import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState(null)
    const [displayProducts, setDisplayProducts] = useState(null);

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayProducts(data)
            })
    }, [])

    return { products, displayProducts, setProducts, setDisplayProducts }
}

export default useProducts;