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
              className="col-10 mx-auto col-md-6 col-lg-6 text-center text-capitalize p-5"
            >
              <img
                src={selectedItem.picture.thumbnail}
                className="img-fluid"
                alt="product"
              ></img>
              <h4>
                {selectedItem.name.title} {selectedItem.name.first}{" "}
                {selectedItem.name.last}
              </h4>
              <p>Cell number : {selectedItem.cell}</p>
              <p>Phone number : {selectedItem.phone}</p>
              <p>Email : {selectedItem.email}</p>
              <p>Age : {selectedItem.dob.age}</p>
              <p>Gender: {selectedItem.gender}</p>
              <p>
                Address : {selectedItem.location.street.number},
                {selectedItem.location.street.name},{selectedItem.location.city}
                , {selectedItem.location.state},{selectedItem.location.country}
              </p>
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
