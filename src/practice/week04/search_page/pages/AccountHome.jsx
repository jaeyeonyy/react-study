import { Link } from "react-router"
import { useState } from "react";
import styled from "styled-components"

function AccountHome (){
    const [name, setName] = useState(() => localStorage.getItem("account:name") ?? "문재연");

    return(
        <ProfileContainer>
            <ProfileCard>
                <ProfileImage src="https://i.namu.wiki/i/aoXEvwYjd408MQfYqtiIFQ5GqPB_QHGkF_AeTneTugXsd7veCXrnWCje1caonFsBoni_P0W6g8-CvpkTU-ERyw.webp"/>

                <InfoLabel>이름</InfoLabel>
                <InfoValue>{name}</InfoValue>
                <Link to="settings">이름 변경</Link>

                <InfoLabel>나이</InfoLabel>
                <InfoValue>26</InfoValue>
            </ProfileCard>
        </ProfileContainer>
    )

}
const InfoLabel = styled.p`
  font-weight: bold;
  margin: 4px 0;
`;

const InfoValue = styled.p`
  margin: 4px 0 12px;
  color: #333;
`;

const ProfileContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProfileCard = styled.section`
  width: 320px;
  padding: 24px;
  border: 1px solid #e5e5e5;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 8px 24px rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const ProfileImage=styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
`


export default AccountHome