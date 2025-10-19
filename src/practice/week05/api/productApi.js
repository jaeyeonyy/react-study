import { products } from "../data/products"; 
const getProductList = (category, sort ="price_high") =>{
    let filtered = products;
    if (category) filtered = filtered.filter(product => product.category === category);
    switch (sort) {
        case "price_low":
            filtered.sort((a, b) => a.price - b.price);
            break;

        case "price_high":
            filtered.sort((a, b) => b.price - a.price);
            break;

        case "popularity":
            filtered.sort((a, b) => b.transactions - a.transactions);
            break;

        case "favorites":
            filtered.sort((a, b) => b.favorites - a.favorites);
            break;

        case "reviews":
            filtered.sort((a, b) => b.reviews - a.reviews);
            break;
    }

    if (!category) {
        filtered.sort((a, b) => b.transactions - a.transactions);
        return filtered.slice(0, 10);
    }

    return filtered;
    
};

export default getProductList;