import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components"


function AccountSettings (){
    const navigate = useNavigate();
    const [current] = useState(() => localStorage.getItem("account:name") ?? "문재연");
    const [nextName, setNextName] = useState(() => localStorage.getItem("account:name") ?? "");

    const onSubmit = (e) => {
        e.preventDefault();
        const trimmed = nextName.trim();
        if (!trimmed) {
            alert("이름을 입력하세요");
            return;
        }
        localStorage.setItem("account:name", trimmed);
        navigate("/account");
    };


    return(
        <ProfileCard>
            <Form onSubmit={onSubmit}>
                <InfoLabel>현재 이름</InfoLabel>
                <InfoValue>{current}</InfoValue>

                <InfoLabel>새 이름</InfoLabel>
                <Input
                    type="text"
                    value={nextName}
                    onChange={(e) => setNextName(e.target.value)}
                    placeholder="새 이름 입력"
                />

                <ChangeButton type="submit">변경하기</ChangeButton>
            </Form>
        </ProfileCard>
    )

}

const Form=styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap:8px;
`;

const Input=styled.input`
    display:"block";
    margin-bottom:6px;
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

const InfoLabel = styled.p`
  font-weight: bold;
  margin: 4px 0;
`;

const InfoValue = styled.p`
  margin: 4px 0px;
  color: #333;
`;

const ChangeButton = styled.button`
    background-color: #818181;
    border-radius: 10%;
`
export default AccountSettings