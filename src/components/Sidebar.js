import React from 'react'
import styled from 'styled-components';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { sidebarItemsData } from '../data/SidebarData';
import AddIcon from '@material-ui/icons/Add';
import db from '../Firebase';
import {useHistory} from  'react-router-dom'

function Sidebar({rooms,theme}) {

    const history=useHistory();

    const goToChannel=(id)=>{
        if(id){
history.push(`/room/${id}`);
        }

    }
    const addChannel = () => {
        const promptName = prompt("Enter channel name");
        if (promptName) {
            db.collection('rooms').add({
                name: promptName
            })
        }
    }


    return (
        <div  >
            <Container>
                <WorkspaceContainer>
                    <Name>
                        Anvesh Karnati
                    </Name>
                    <NewMessage>
                        <AddCircleOutlineIcon />
                    </NewMessage>
                </WorkspaceContainer>
                <MainChannels>
                    {
                        sidebarItemsData.map(item => (
                            <MainChannelItem>
                                {item.icon}
                                {item.text}
                            </MainChannelItem>
                        ))
                    }
                </MainChannels>
                <ChannelsContainer>
                    <NewChannelContainer>
                        <div>
                            Channels
                    </div>
                        <div style={{ cursor: 'pointer' }}>
                            <AddIcon onClick={addChannel} />
                        </div>
                    </NewChannelContainer>
                    <ChannelsList>
                        {
                            rooms.map(items => (
                                <Channel onClick={()=>goToChannel(items.id)}>
                                    # {items.name}
                                </Channel>
                            ))
                        }
                    </ChannelsList>
                </ChannelsContainer>
            </Container>
        </div>
    )
}

export default Sidebar

const Container = styled.div`



 background:${props => {
     console.log('surp',props)
    if(props.theme.background!='#999'){
        return '#30475e';
    } else{
        return '#3F0E40'}}
};
height:100%;
`

const WorkspaceContainer = styled.div`
color:white;
height:64px;
display:flex;
align-items:center;
padding-left:19px;
justify-content:space-between;
border-bottom:1px solid #532753;
`
const Name = styled.div`
`

const NewMessage = styled.div`
width:36px;
height:36px;
background: white;
color:#3F0E40;
fill:#3F0E40;
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
margin-right:10px;
cursor:pointer;
`
const MainChannels = styled.div`
padding-top:12px;

`
const MainChannelItem = styled.div`
color:rgb(188,171,188);
display:grid;
grid-template-columns: 15% auto;
height:28px;
align-items:center;
padding-left:19px;
cursor:pointer;
:hover {
    background:#350D36;
    }
`

const ChannelsContainer = styled.div`
color:rgb(188,171,188);
margin-top:10px;

`

const NewChannelContainer = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
height:28px;
padding-left:19px;
padding-right:12px;
`


const ChannelsList = styled.div`
font-size:14px
`
const Channel = styled.div`
padding-left:19px;
margin-top: 2px;
height:25px;
display:flex;
align-items:center;
cursor:pointer;
:hover {
background:#350D36;
}
`
