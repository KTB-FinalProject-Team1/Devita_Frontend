import styled from 'styled-components';

const BubbleWrapper = styled.div`
    display: flex;
    justify-content: ${(props)=>(props.position === 'right' ? 'flex-end':'flex-start')};
    margin: 10px;

`;

const Bubble = styled.div`
    background-color: #f0f0f0;
    color: #333;
    padding: 10px 15px;
    border-radius: 20px;
    position: relative;
    max-width: ${(props) => props.width || '60%'};
    width: ${(props) => props.width || 'auto'};
    height: ${(props) => props.height || 'auto'};
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    font-size: 13px;
    font-weight: bold;
    display: flex;
    align-items: center;
    
    &::after{
        content: '';
        position: absolute;
        border-style: solid;
        border-width: 10px;
        border-color: #f0f0f0 transparent transparent transparent; 
        border-radius: 0 0 0 0;
        top: 100%;
        left: ${(props)=> (props.position === 'right' ? 'auto' : '20px')};
        right: ${(props)=> (props.position === 'right' ? '20px' : 'auto')};
    }
`;


const ChatBubble = ({children, position = 'left', width, height}) => {
    return(
        <BubbleWrapper position={position}>
            <Bubble position={position} width={width} height={height}>
                {children}
            </Bubble>
        </BubbleWrapper>
    )
};

export default ChatBubble;