
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'
import db from '../Firebase'
import { useParams } from 'react-router-dom'
import firebase from "firebase"

function Chat(props) {
console.log(props);
    let { channelId } = useParams();
    const [ channel, setChannel ] = useState();
    const [ messages, setMessages ] = useState([])
    const [themes,setThemes]=useState();

    const getMessages = () => {
        db.collection('rooms')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot)=>{
            let messages = snapshot.docs.map((doc)=>doc.data());
            setMessages(messages);
        })
    }

    const sendMessage = (text) => {
        if(channelId){
            let payload = {
                text: text,
                timestamp: firebase.firestore.Timestamp.now(),
                user: props.user.name,
                userImage: props.user.photo
            }
            db.collection("rooms").doc(channelId).collection('messages').add(payload);
        }
    }

    const getChannel = () => {
        db.collection('rooms')
        .doc(channelId)
        .onSnapshot((snapshot)=>{
            setChannel(snapshot.data());
        })
    }

    useEffect(()=>{
        getChannel();
        getMessages();
    }, [channelId])
    
  

    return (
        <Container>
            <Header>
                <Channel>
                    <ChannelName>
                        # { channel && channel.name}
                    </ChannelName>
                    <ChannelInfo>
                    Company-wide announcements and work-based matters
                    </ChannelInfo>
                </Channel>
                <ChannelDetails>
                    <div>
                        Details
                    </div>
                    <Info />
                </ChannelDetails>
            </Header>
            <MessageContainer>
                {
                    messages.length > 0 &&
                    messages.map((data, index)=>(
                        <ChatMessage
                            text={data.text}
                            name={data.user}
                            image={data.userImage}
                            timestamp={data.timestamp}
                        />
                    ))
                }
            </MessageContainer>
            <ChatInput sendMessage={sendMessage} />
        </Container>

    )
}

export default Chat;

const Container = styled.div`
    display: grid;
    grid-template-rows: 64px auto min-content;
    min-height: 0;
`

const Channel = styled.div``

const ChannelDetails = styled.div`
    display: flex;
    align-items: center;
    color:${props => props.theme};
    background:transparent;
   
`

const ChannelName = styled.div`
    font-weight: 700;
`

const ChannelInfo = styled.div`
    font-weight: 400;
    color:${props => props.theme};
    background:transparent;
    font-size: 13px;
    margin-top: 8px;
`

const Info = styled(InfoOutlinedIcon)`
    margin-left: 10px;
`

const Header = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    border-bottom: ${props => {
        if(props.theme.background!='#999'){
            return '1px solid rgba(211,211,211,1)';
        } else{
            return' 1px solid rgba(255,255,255,1)'}}
    }; 
    justify-content: space-between;
`

const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`

