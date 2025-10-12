import { Link } from "react-router"
import { useState } from "react";
import styled from "styled-components"
import ProfileMenuItem from "../components/ProfileMenuItem";

function AccountHome (){
    const [name, setName] = useState(() => localStorage.getItem("account:name") ?? "문재연");


    return (
      <ProfileContainer>
        <Profile>
          <ProfileImage src="data:image/png;base64,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"/> 
          <ProfileContent>
              <ProfileName>
                <ProfileNameValue>
                  {name}
                </ProfileNameValue>
                <ProfileNameChange to="settings"> 
                  이름 변경
                </ProfileNameChange>
              </ProfileName>
              <ProfileIntroduction>
                안녕하세요. 백엔드 개발자입니다.
              </ProfileIntroduction>
          </ProfileContent>
        </Profile>
        <ProfileMenu>
          <ProfileMenuItem label="회원정보 수정" to="/profile/edit" />
          <ProfileMenuItem label="비밀번호 수정" to="/profile/password" />
          <ProfileMenuItem label="PIN 번호 발급" to="/profile/pin" />
          <ProfileMenuItem label="본인 인증" to="/profile/verify" />
          <ProfileMenuItem label="고객센터" to="/support" />
          <ProfileMenuItem label="개인정보 처리방침" to="/privacy-policy" />
        </ProfileMenu>

      </ProfileContainer>
    )

}

const ProfileContainer=styled.div`
  width: 400px;
  padding: 24px;
  border: 1px solid #e5e5e5;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 8px 24px rgba(0,0,0,0.06);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const Profile = styled.section`
  width: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;


const ProfileImage=styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
`

const ProfileContent= styled.div`
  width: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

const ProfileName= styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
`;

const ProfileNameValue = styled.p`
  margin: 4px 0 12px;
  color: #000000;
`;

const ProfileNameChange = styled(Link)`
  color: #6b6b6b;
`;

const ProfileIntroduction = styled.p`
  margin: 4px 0 12px;
  color: #989898;
`;

const ProfileMenu=styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
`;

export default AccountHome