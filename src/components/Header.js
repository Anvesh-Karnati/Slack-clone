import React from 'react'
import styled from 'styled-components';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Toggle from "./Toggler"

function Header(props) {
    console.log(props)
    return (
        <Container>
            <Main>
                
                <Toggle theme={props.theme} toggleTheme={props.themeToggler} />
                {/* <button onClick={themeToggler}>Switch Theme</button> */}
                <AccessTimeIcon />
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder="Search..." />
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon />
            </Main>
            <UserContainer>
                <Name>
                   {props.user.name}
                </Name>
                <UserImage onClick={props.signOut}>
                    <img src={props.user.photo ? props.user.photo :"​https://i.imgur.com/6VBx3io.png"}></img>
                </UserImage>
            </UserContainer>
        </Container>
    )
}

export default Header


const Container = styled.div`


background:${props => {
    if(props.theme.background!='#999'){
        return '#133b5c';
    } else{
        return '#350d36'}}
};
color:white;
display:flex;
align-items:center;
justify-content:center;
position:relative;
box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%)
 `
const Main = styled.div`
display:flex;
margin-left:16px;
margin-right:16px;
 `

const SearchContainer = styled.div`
min-width:400px;
margin-left:16px;
margin-right:16px;
 `

const Search = styled.div`
box-shadow: inset  0 0 0 1px rgb(104 74 104);
width:100%;
border-radius:6px;
display:flex;
align-items:center;

input {
    width:100%;
    background:transparent;
    border:none;
    padding-left:8px;
    padding-right:8px;
    color:white;
    padding-top:4px;
    padding-bottom:4px;
}

input:focus {
    outline:none;
}
 `

const UserContainer = styled.div`
 display:flex;
 align-items:center;
 padding-right:16px;
 position:absolute;
 right:0;
 `

const Name = styled.div`
 padding-right:16px;
 `

const UserImage = styled.div`
 width:28px;
 height:28px;
 border:2px solid white;
 border-radius:2px;
cursor:pointer;
 img {
     width:100%;
 }
 `

const Button = styled.button`
 margin-right: 24px;
 display:flex;
  align-items:center;
  cursor:pointer;
  background:transparent;

  color:white;
  outline:none;
  :hover {
    background:#350D36;
    }
 `