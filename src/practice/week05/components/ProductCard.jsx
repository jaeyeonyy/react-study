import styled from "styled-components"

export default function ProductCard({name, price, image, transactions, favorites, reviews}){
    return(
        <Card>
            <ProductImage src={image} alt={name} />
            <ProductName>{name}</ProductName>
            <ProductPrice>{price.toLocaleString()}원</ProductPrice>
            <ProductStats>
                <StatItem>
                    <StatLabel>거래수</StatLabel>
                    <StatValue>{transactions}</StatValue>
                </StatItem>
                <StatItem>
                    <StatLabel>찜</StatLabel>
                    <StatValue>{favorites}</StatValue>
                </StatItem>
                <StatItem>
                    <StatLabel>후기</StatLabel>
                    <StatValue>{reviews}</StatValue>
                </StatItem>
            </ProductStats>
        </Card>
    );
}

const Card = styled.div`
    border: 1px solid #e1e1e1;
    border-radius: 8px;
    width: 240px;
    margin: 12px;
    padding: 12px;
    text-align: center;
    box-shadow:0 2px 8px rgba(0,0,0,0.05)
`;

const ProductImage = styled.img`
    width: 100%;
    border-radius: 6px
`;

const ProductName = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
    margin: 10px 0 5px;
    text-align: center;
`;

const ProductPrice = styled.p`
    font-size: 1rem;
    font-weight: bold;
    color: #333;
    text-align: center;
`;

const ProductStats = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px solid #eee;
`;

const StatItem = styled.div`
    text-align: center;
    flex: 1;
`;

const StatLabel = styled.div`
    font-size: 0.8rem;
    color: #666;
    margin-bottom: 4px;
`;

const StatValue = styled.div`
    font-size: 0.9rem;
    font-weight: bold;
    color: #333;
`