import React from 'react'
import styled from 'styled-components';


function ChatMessage({text,name,image,timestamp}) {
    return (
        <Container>
            <UserImage>
                <img src={image} />
            </UserImage>
            <MessageContent>
                <Name>
                    {name}
                    <span>
                        {new Date(timestamp.toDate()).toUTCString()}
                    </span>
                </Name>
                <Text>
                    {text}
                </Text>
            </MessageContent>
        </Container>
    )
}

export default ChatMessage

const Container = styled.div`
padding:8px 20px;
display: flex;
align-items:center;
:hover{
    background: ${props => {
        if(props.theme.background!='#999'){
            return '#F5F5F5';
        } else{
            return '#404040'}}
    };
    
}
`
const UserImage = styled.div`
width:36px;
height:36px;
border-radius:50%;
overflow:hidden;
margin-right:8px;

img{
    width:100%;
}
`

const MessageContent = styled.div`
display: flex;
flex-direction:column;
`

const Name = styled.span`
font-weight:600;
font-size:15px;
line-height:1.4;

span{
    margin-left:8px;
    font-weight:400;
    color:  ${props => {
        if(props.theme.background!='#999'){
            return 'rgba(97,96,97)';
        } else{
            return '#FFFFFF'}}
    };
    font-size:13px;
}
`

const Text = styled.div`
`