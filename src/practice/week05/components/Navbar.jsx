import {Link} from "react-router";
import styled from "styled-components";

function Navbar(){
    return(
        <Container>
            <Page to="/products">KREAM</Page>
            <Page to="/products/sandals">샌들</Page>
            <Page to="/products/sneakers">스니커즈</Page>
            <Page to="/products/boots">부츠</Page>
            <Page to="/products/outers">아우터</Page>

        </Container>
    );
}

const Container = styled.nav`
    height: 60px;
    padding: 16px 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: black;
`;

const Page = styled(Link)`
    font-size: 1rem;
    font-weight: 600;
    color: white;
`;

export default Navbar;