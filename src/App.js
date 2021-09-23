
import './App.css';
//import { Router } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chat from './components/Chat';
import Login from './components/Login';
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes"
import { useDarkMode } from "./components/useDarkMode";
import db, { auth } from './Firebase';

function App() {

  const [rooms, setRooms] = useState([])
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const getChannels = () => {
    db.collection('rooms').onSnapshot((snapshot) => {
      setRooms(snapshot.docs.map((doc) => {
        return { id: doc.id, name: doc.data().name };
      })
      )
    })
  }
const signOut =()=>{
  auth.signOut().then(()=>{
    localStorage.removeItem('user');
    setUser(null);
  }
  
  )
  
}
  useEffect(() => {
    getChannels();
  }, [])

  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if (!mountedComponent) return <div />
  return (
    <div className="App">
      <Router>{

        !user?<Login setUser={setUser}/>
        :
        <ThemeProvider theme={themeMode}>
          <GlobalStyles />
          <Container>
            <Header theme={theme} themeToggler={themeToggler} user={user} signOut={signOut}/>
            <Main>
              <Sidebar rooms={rooms}  theme={theme}/>
              <Switch>
                <Route path='/room/:channelId'>
                  <Chat user={user} theme={theme}/>
                </Route>
                <Route path='/'>
                  <Select>
                  Welcome to Slack Clone - Choose or Create channel to your left
                    </Select>
                </Route>
              </Switch>
            </Main>
          </Container>
        </ThemeProvider>
           }
        </Router>
    </div>
  );
};

export default App;

const Container = styled.div`
width:100%;
height:100vh;

display:grid;
grid-template-rows:38px minmax(0, 1fr);
`
const Main = styled.div`

display:grid;
grid-template-columns:260px auto;
`
const Select = styled.div`
display:flex;
align-items:center;
justify-content:center;
`

