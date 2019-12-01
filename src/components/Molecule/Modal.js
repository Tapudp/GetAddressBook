import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "../Atom/ButtonContainer";

export default function Modal(props) {
  const { selected, setSelected, selectedItem } = props;
  return (
    <>
      <ModalContainer>
        <div className="container">
          <div className="row">
            <div
              id="modal"
              className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
            >
              <h5>item added to the cart</h5>
              <img src="" className="img-fluid" alt="product"></img>
              <h5>title</h5>
              <h5 className="text-muted"> price: ₹ price</h5>
              <Link to="/">
                <ButtonContainer onClick={() => setSelected(!selected)}>
                  close
                </ButtonContainer>
              </Link>
            </div>
          </div>
        </div>
      </ModalContainer>
    </>
  );
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background-color: rgba(155, 155, 155, 0.5);
    backdrop-filter: blur(5px);
  }
`;
