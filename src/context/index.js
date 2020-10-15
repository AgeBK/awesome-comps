import React, { useState, useEffect } from 'react';
// Context provides a way to pass data through the component tree without having to pass props down manually at every level.” 
// Context is designed to share data that can be considered “global” for a tree of React components
const ComputerContext = React.createContext();

const ComputerProvider = (props) => {
    console.log('ComputerProvider');

    // const [categories, setcategories] = useState({});
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('../../products.json');
            const { ProductCollection } = await res.json();
            setProducts(ProductCollection);
            setLoading(false);
            console.log(ProductCollection);
        };

        console.log('useEffect Context');
        fetchData();
    }, [setProducts, setLoading]);

    const addToCart = (item) => {

    };

    const removeFromCart = (productId) => () => {

    };

    const toggleCartView = () => {

    };

    //   const getProduct = (id) =>
    //     products.find((product) => product.productId === id); // TODO: check this

    //   const categories = products.reduce(
    //     (acc, { category, productPicUrl }) =>
    //       !acc[category] ? { ...acc, [category]: productPicUrl } : acc,
    //     {}
    //   );

    //   const handleSearch = (searchTerm) =>
    //     console.log(
    //       products.filter((val) => val.toLowerCase === searchTerm.toLowerCase)
    //     );

    return (
        <ComputerContext.Provider
            value={{
                products,
                // getProduct,
                loading,
                addToCart,
                removeFromCart,
                toggleCartView,
                // showCart,
                // cart,
                // categories,
                // handleSearch,
            }}
        >
            {props.children}
        </ComputerContext.Provider>
    );
};

const ComputerConsumer = ComputerContext.Consumer;

export { ComputerProvider, ComputerContext, ComputerConsumer };
