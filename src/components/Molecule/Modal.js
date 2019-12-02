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
              className="col-12 col-xs-10 col mx-auto col-md-6 col-lg-6 text-center text-capitalize p-5"
              style={{ position: "relative" }}
            >
              <div
                className="row mb-10"
                style={{ position: "absolute", top: -15 }}
              >
                <img
                  src={selectedItem.picture.large}
                  className="img-fluid rounded-circle"
                  alt="product"
                ></img>
                <h2 className="col mt-4">
                  {selectedItem.name.title} {selectedItem.name.first}{" "}
                  {selectedItem.name.last}
                </h2>
              </div>

              <div className="mt-5 pt-4 row text-left">
                <p className="col">Cell number:</p>
                <span className="col">
                  <b>{selectedItem.cell}</b>
                </span>
              </div>
              <div className="row text-left">
                <p className="col">Phone number:</p>
                <span className="col">
                  <b>{selectedItem.phone}</b>
                </span>
              </div>
              <div className="row text-left">
                <p className="col">Email:</p>
                <span className="col">
                  <b>{selectedItem.email}</b>
                </span>
              </div>
              <div className="row text-left">
                <p className="col">Age :</p>
                <span className="col">
                  <b>{selectedItem.dob.age}</b>
                </span>
              </div>
              <div className="row text-left">
                <p className="col">Gender :</p>
                <span className="col">
                  <b>{selectedItem.gender}</b>
                </span>
              </div>
              <div className="row text-left mb-5">
                <p className="col">Address :</p>
                <span className="col">
                  <b>
                    {selectedItem.location.street.number},{" "}
                    {selectedItem.location.street.name},{" "}
                    {selectedItem.location.city}, {selectedItem.location.state},{" "}
                    {selectedItem.location.country}
                  </b>
                </span>
              </div>
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
  margin-bottom: 10px;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background-color: rgba(155, 155, 155, 0.5);
    backdrop-filter: blur(5px);
  }
`;
