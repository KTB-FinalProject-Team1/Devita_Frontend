import styled from "styled-components";
import { FaAngleLeft } from "react-icons/fa";

export const Layout = styled.div`
  width: 100%;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.color || "black"};
  background-color: ${(props) => props.background || "white"} ;
  position: sticky;
  top: 0;
    border-radius: 0 0 10px 10px;

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
`;
