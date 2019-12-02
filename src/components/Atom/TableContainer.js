import styled from "styled-components";

export const TableContainer = styled.div`
  overflow: auto;
  height: 65vh;
  padding-bottom: 5rem;
  text-align: center;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #2f4f4f;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
