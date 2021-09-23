import React,{useState} from 'react'
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';
import { IconData } from '../data/IconData';

function ChatInput({sendMessage}) {

    const [input,setInput] = useState("");

    const send=(e)=>{
        e.preventDefault();
        if(!input) return;
            sendMessage(input);
        setInput("");
       
    }
    
    return (
        <Container>
            <InputContainer>
                <Input>
                    <form>
                        <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Message here" />
                        <SendButton type="sumbit" onClick={send}>
                            <Send />
                        </SendButton>
                    </form>
                </Input>
                <Symbol>
                    <ItemIcon>
                    {
                        IconData.map(item =>(
                            <IconItem>
                             { item.icon }
                             </IconItem>
                            
                             ) )                            
                    }
                    </ItemIcon>
                    <ItemsIcon>
                    {
                        IconData.map(item =>(
                            <IconsItem>
                             { item.icons }
                             </IconsItem>
                            
                             ) )
                    }
                   </ItemsIcon>
                </Symbol>
            </InputContainer>

        </Container>
    )
}

export default ChatInput

const Container = styled.div`
padding-left:20px;
padding-right:20px;
padding-bottom:24px;

`

const InputContainer = styled.div`
border: 1px solid #8D8D8E;
border-radius:4px;


form {
    display:flex;
    height:42px;
    align-items:center;
    padding-left:10px;
    
    input{
        flex:1;
        border:none;
        font-size:13px;
        background:transparent;
        color:${props => {
            
            if(props.theme.background!='#999'){
                return '#000000';
            } else{
                return '#FFFFFF'}}
        }; 

    }
    input:focus{
        outline:none;
    }
    input::placeholder {
        color:${props => {
            
            if(props.theme.background!='#999'){
                return '#A9A9A9';
            } else{
                return '#FFFFFF'}}
      }
}
`

const SendButton = styled.button`
background:#007a5a;
border-radius:2px;
width:32px;
height:32px;
display:flex;
justify-content:center;
align-items:center;
margin-right: 5px;
cursor:pointer;
border:none;

.MuiSvgIcon-root{
    width:18px;
}

:hover{
  background: #148567  
}
`

const Send = styled(SendIcon)`
color: #D9D9D9
`

const Input = styled.div`

`

const Symbol = styled.div`
border-top:1px solid rgba(83,39,83,.13);
display:flex;
align-items:center;
justify-content:space-between;
height: 35px;
padding-left: 10px;
background:#DCDCDC;
padding-right:5px;
`
const IconItem = styled.div`
display:flex;
align-items:center;
padding-right:20px;
color: #606060;
`

const IconsItem = styled.div`
display:flex;
align-items:center;
padding-right:15px;
color: #606060;
`
const ItemIcon = styled.div`
display:flex;
align-items:center;

`
const ItemsIcon = styled.div`
display:flex;
align-items:center;

`

