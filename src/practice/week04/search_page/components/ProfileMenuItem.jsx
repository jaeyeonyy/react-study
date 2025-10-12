import styled from "styled-components";
import { Link } from "react-router"

function ProfileMenuItem({label,to}){
    return(
        <ProfileMenuItemWrapper>
            <ItemLabel>{label}</ItemLabel>
            <ItemLink
                to={to}
            >
                <ArrowIcon
                    src="https://cdn-icons-png.flaticon.com/512/3148/3148307.png"
                    alt="arrow"
                />
            </ItemLink>        

        </ProfileMenuItemWrapper>
    )
}

const ProfileMenuItemWrapper=styled.div`
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
`;
const ItemLabel=styled.p`
    font-size: 14px;
`;

const ItemLink=styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
`;
const ArrowIcon = styled.img`
  width: 16px;
  height: 16px;
  object-fit: contain;
`;


export default  ProfileMenuItem