import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components"

const Button = styled.button`
  display:flex;
  align-items:center;
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 4rem;
  height: 25px;
  outline: none;
  margin-right:15px
  }

`;

const Sun = styled.svg`
 height: 15px;
 width: 2.5rem;
 transition: all 0.7s linear;
`;

const Moon = styled.svg`
  height: 15px;
  width: 2.5rem;
  transition: all 0.7s linear;
`

const Toggle = ({theme,  toggleTheme }) => {
    return (
      <Button onClick={toggleTheme}>
        {theme === "light" ?
          <Moon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path style={{ fill: "#F6C358" }} d="M10.719 2.082c-2.572 2.028-4.719 5.212-4.719 9.918 0 4.569 1.938 7.798 4.548 9.895-4.829-.705-8.548-4.874-8.548-9.895 0-5.08 3.808-9.288 8.719-9.918zm1.281-2.082c-6.617 0-12 5.383-12 12s5.383 12 12 12c1.894 0 3.87-.333 5.37-1.179-3.453-.613-9.37-3.367-9.37-10.821 0-7.555 6.422-10.317 9.37-10.821-1.74-.682-3.476-1.179-5.37-1.179zm0 10.999c1.437.438 2.562 1.564 2.999 3.001.44-1.437 1.565-2.562 3.001-3-1.436-.439-2.561-1.563-3.001-3-.437 1.436-1.562 2.561-2.999 2.999zm8.001.001c.958.293 1.707 1.042 2 2.001.291-.959 1.042-1.709 1.999-2.001-.957-.292-1.707-1.042-2-2-.293.958-1.042 1.708-1.999 2zm-1-9c-.437 1.437-1.563 2.562-2.998 3.001 1.438.44 2.561 1.564 3.001 3.002.437-1.438 1.563-2.563 2.996-3.002-1.433-.437-2.559-1.564-2.999-3.001z" /></Moon>
          : <Sun xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path style={{ fill: "#F6C358" }} d="M12 9c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0-2c-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5-2.238-5-5-5zm0-2c.34 0 .672.033 1 .08v-2.08h-2v2.08c.328-.047.66-.08 1-.08zm-4.184 1.401l-1.472-1.473-1.414 1.415 1.473 1.473c.401-.537.876-1.013 1.413-1.415zm9.782 1.414l1.473-1.473-1.414-1.414-1.473 1.473c.537.402 1.012.878 1.414 1.414zm-5.598 11.185c-.34 0-.672-.033-1-.08v2.08h2v-2.08c-.328.047-.66.08-1 .08zm4.185-1.402l1.473 1.473 1.415-1.415-1.473-1.472c-.403.536-.879 1.012-1.415 1.414zm-11.185-5.598c0-.34.033-.672.08-1h-2.08v2h2.08c-.047-.328-.08-.66-.08-1zm13.92-1c.047.328.08.66.08 1s-.033.672-.08 1h2.08v-2h-2.08zm-12.519 5.184l-1.473 1.473 1.414 1.414 1.473-1.473c-.536-.402-1.012-.877-1.414-1.414z" /></Sun>}
      </Button>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;