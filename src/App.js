import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'; // Header 컴포넌트 import
import TabBar from './components/TapBar/TapBar'; // TabBar import
import HomePage from './pages/HomePage/Home.main'; // Home 페이지 import

// 테마 설정
const theme = {
    colors: {
        primary: '#6200ea',
        background: '#f5f5f5',
        tabBackground: '#F2F2F2',
    },
};

const Frame = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
  overflow: hidden;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 450px;
  height: 100%; /* 부모(Frame)의 높이와 동일하게 설정 */
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Content = styled.div`
  flex: 1; /* 남은 공간을 모두 차지하도록 설정 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* 내용이 위에서부터 쌓이도록 설정 */
  padding: 10px;
`;
function App() {
    return (
        <RecoilRoot>
            <Router>
                <ThemeProvider theme={theme}>
                    <Frame>
                        <Wrapper>
                            <Header color="#6200ea"/>

                            <Content>
                                <Routes>
                                    <Route path="/" element={<HomePage />} />
                                    <Route path="/aimission" element={<HomePage />} />
                                    <Route path="/sns" element={<HomePage />} />
                                    <Route path="/mypage" element={<HomePage />} />
                                </Routes>
                            </Content>

                            <TabBar />
                        </Wrapper>
                    </Frame>
                </ThemeProvider>
            </Router>
        </RecoilRoot>
    );
}

export default App;