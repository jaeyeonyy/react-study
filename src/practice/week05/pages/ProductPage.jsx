import { useParams } from "react-router";
import { useState } from "react";
import getProductList from "../api/productApi"
import ProductCard from "../components/ProductCard"
import styled from "styled-components"

const CATEGORY_TITLES = {
    sneakers: '스니커즈',
    sandals: '샌들',
    boots: '부츠',
    outers: '아우터'
};

export default function ProductPage(){
    const { category } = useParams();
    const [sort, setSort] = useState("popularity");
    const products = getProductList(category, sort);
    return(
        <Wrapper>
            <Title>{category ? CATEGORY_TITLES[category] : "Top 10"}</Title>
            {category && (
                <SortSelectContainer>
                    <SortSelect
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                    >
                        <option value="popularity">인기순</option>
                        <option value="price_low">낮은 가격순</option>
                        <option value="price_high">높은 가격순</option>
                        <option value="favorites">관심 많은순</option>
                        <option value="reviews">리뷰 많은순</option>
                    </SortSelect>
                </SortSelectContainer>
            )}
            <ProductList>
                {products.map((product)=>(
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        transactions={product.transactions}
                        favorites={product.favorites}
                        reviews={product.reviews}
                    />
                ))}
            </ProductList>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    padding: 24px;
`
const Title = styled.p`
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 20px;
`

const SortSelectContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 12px;
`;

const SortSelect = styled.select`
    padding: 6px 10px;
    border: 1px solid #ddd;
    border-radius: 6px;
    background: white;
    font-size: 0.95rem;
`;

const ProductList = styled.div`
    display: flex;
    flex-wrap: wrap;
`;