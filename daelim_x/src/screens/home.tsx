// home 화면을 구성
import styled from "styled-components"

// styled-component를 통한 css 구성
const Container = styled.div``;
const Title = styled.h1``;

// 실제 페이지를 구성하는 code
export default() => {
    return <Container>
        <Title>home</Title>
    </Container>
}