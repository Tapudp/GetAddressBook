import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(50px);
  border: 1px solid #1e1e1e;
  border-radius: 0.5rem;
  padding: 0.1rem 0.3rem;
  cursor: pointer;
  margin: auto;
  transition: all 0.1s linear;
  &:hover {
    color: #8d8d8d;
    border: 1px solid #123123;
  }
  &:focus {
    outline: none;
  }
`;
