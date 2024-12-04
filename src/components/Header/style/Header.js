import styled from "styled-components";
import { FaAngleLeft } from "react-icons/fa";

export const Layout = styled.div`
  width: 100%;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.color || "black"};
  background-color: ${(props) => props.background || "transparent"} ;
  position: sticky;
  top: 0;

`;
export const Logo = styled.div`
    margin-left: 30px;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
export const LogoText = styled.text`
    color: #9e9e9e;
    font-weight: 700;
    font-size: 25px;
`;

export const LoginButton = styled.button `
    border: none;
    margin-right: 20px;
    background-color: transparent;
    &:hover {
        color: #7DB1FF;
        font-weight: bold;
    }
`;
export const LoginButtonWrapper = styled.div `
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 400;
    margin-right: 20px;
`;
export const LoginButtonName = styled.text `
    font-size: 13px;
    font-weight: bold;
    margin-right: 5px;
`;
export const BackIcon = styled(FaAngleLeft)`
  position: absolute;
  left: 10px;
  font-size: 25px;
  color: black;
 
`;