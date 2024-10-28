import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import HomePage from './pages/HomePage/Home.main';
import AIPage from "./pages/AIPage/AI.main";
import KakaoLoginPage from './pages/LoginPage/KakaoLogin.main';
import KakaoRedirectHandler from './pages/LoginPage/KakaoRedirectHandler';
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
  max-width: 425px;
  height: 100vh;
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
    
`;
function App() {

    return (
        <RecoilRoot>
            <Router>
                <ThemeProvider theme={theme}>
                    <Frame>
                        <Wrapper>
                            <Content>
                                <Routes>
                                    <Route path="/" element={<KakaoLoginPage/>} />
                                    <Route path="/oauth2/redirect" element={<KakaoRedirectHandler />} />
                                    <Route path="/onboarding"></Route>
                                    <Route path="/home" element={ <MainLayout><HomePage /></MainLayout> } />
                                    <Route path="/aimission" element={ <MainLayout><AIPage /></MainLayout>} />
                                    <Route path="/sns" element={<HomePage />} />
                                    <Route path="/mypage" element={<HomePage />} />
                                </Routes>
                            </Content>

                        </Wrapper>
                    </Frame>
                </ThemeProvider>
            </Router>
        </RecoilRoot>
    );
}

export default App;