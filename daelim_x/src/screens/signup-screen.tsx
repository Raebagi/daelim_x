// Profile 화면을 구성
import styled from "styled-components";
 import LogoImg from "../assets/images/DaelimX_Title.png";
import { useState } from "react";

// styled-component를 통한 css 구성
const Container = styled.div`
    height: 100%;
    display : flex;
    flex-direction :column;
    width : 400px;
    padding : 30px 50px;
`;
// 화면 타이틀 텍스트
const Title = styled.h1`
    color : white;

`;
// 화면 타이틀 로고
const Logo = styled.img``;
// ID/PW 텍스트 Input Field(Form)
// 1. Form(텍스트 인풋 필드를 담을 공간) 
const Form = styled.form`
    margin-top : 40px;
    display : flex;
    flex-direction: column;
`;
// 2. 각각의 Text Input Field
const Input = styled.input`
    padding : 10px 15px;
    border-radius : 10px;
    border : none;
    width : 100%;
    &::placeholder{
        font-size : 0.8em;
    }
    &[type="submit"]{
        margin-top : 40px;
        cursor: pointer;
        width : 430px;
    }
`;
const InputTitle = styled.p`
    color : white;
    font-size : 10px;
`;

// 실제 페이지를 구성하는 code
export default() => {

    // 회원가입을 하기 위한 Process 코드 작성
    // A. 회원 정보를 저장 할 데이터(State) - StateHook
    const [name, setName] = useState(""); //Name
    const [email, setEmail] = useState(""); //Email
    const [password, setPassword] = useState(""); //Password
    const [loading, setLoading] = useState(false); //Loading
    const [error, setError] = useState(false); //Error

    
    // B. 회원 정보 입력할 때 실행 (입력한 정보 가공/수정)
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // e.name = e.target.name;
        // const value = e.target.value;
        // 0. 입려된 정보에서 값(입력위치,입력값)을 알야아 함.
        // ㄴ 입력위치, 입력값
        // 1. 어디서 입력된 정보(event)인지 알아야함
        const {target:{name,value}} = e;
        // 2. 입력된 장소에(name,email,pw) 따라 각각 데이터(state)를 저장
        switch(name){
            case "name" : setName(value); break;
            case "email" : setEmail(value); break;
            case "password" : setPassword(value); break;
        }
        // 3. 저장한 데이터를 Page에 보여줌
        
        // 4. 만일 영어라면 대문자로 변환해서 보여줌
    };
    // C. 회원가입 버튼을 눌렀을 때, 실행(입력한 정보 전달)
    const onSubmit = () => {
        // A. 방어코드:: 잘못입력 시, 제출하지 않고 종료.
        // B. 회원가입 프로세스 진행
        // B-1. 로딩 시작 ...
        // B-2. 사용자가 입력한 전달할 데이터 확인
        // B-3. API를 통해서 Server에 입력한 값을 전달.
    };

    // 페이지 레이아웃(Design) 반환
    return <Container>
        {<Logo src = {LogoImg}/>}
        <Title>회원가입</Title>
        <Form>
            <InputTitle>닉네임*</InputTitle>
            <Input onChange = {onChange} name = "name" type="text" placeholder="예) Daelim" value= {name}/>
            <InputTitle>이메일*</InputTitle>
            <Input onChange = {onChange} name = "email" type="email" placeholder="예) Daelim@daelim.ac.kr" value = {email}/>
            <InputTitle>비밀번호*</InputTitle>
            <Input onChange = {onChange} name = "password" type= "password" placeholder="예) *********"  value = {password}/>
            <Input onSubmit = {onSubmit} type = "submit" value = {"회원가입"}/>
        </Form>
    </Container>
}
