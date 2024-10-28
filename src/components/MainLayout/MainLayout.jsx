import react from 'react';
import Header from '../Header/Header';
import TapBar from '../TapBar/TapBar';
import * as style from './style/MainLayout';


const MainLayout = ({children}) => {

    return(
        <style.Wrapper>
            <Header />
            <style.Content>
                {children}
            </style.Content>
            <TapBar />
        </style.Wrapper>
    )
}

export default MainLayout;