import styled from "styled-components";

export default styled.button`
  background: ${props => props.theme.colors.buttonBackground};
  color: ${props => props.theme.colors.buttonColor};
  margin-top: 24px;
  border: none;
  padding: 0 12px;
  border-radius: 4px;
  font-size: 14px;
  cursor:pointer;
  :focus{
    
  }
`;