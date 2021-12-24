import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
import { useNavigate } from "react-router-dom";

const AddUser = (props) => {
  const [enteredFirtName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredAddress1, setEnteredAddress1] = useState("");
  const [enteredAddress2, setEnteredAddress2] = useState("");
  const [enteredCity, setEnteredCity] = useState("");
  const [enteredState, setEnteredState] = useState("");
  const [enteredZipCode, setEnteredZipCode] = useState("");
  const [enteredPhoneNumber, setEnteredPhoneNumber] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [error, setError] = useState();

  const history = useNavigate();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (
      enteredFirtName.trim().length === 0 ||
      enteredLastName.trim().length === 0 ||
      enteredAddress1.trim().length === 0 ||
      enteredCity.trim().length === 0 ||
      enteredState.trim().length === 0 ||
      enteredZipCode.trim().length === 0 ||
      enteredPhoneNumber.trim().length === 0 ||
      enteredEmail.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid information (non-empty values)",
      });
      return;
    }

    console.log(
      enteredFirtName,
      enteredLastName,
      enteredAddress1,
      enteredAddress2,
      enteredCity,
      enteredState,
      enteredZipCode,
      enteredPhoneNumber,
      enteredEmail
    );

    setEnteredFirstName("");
    setEnteredLastName("");
    setEnteredAddress1("");
    setEnteredAddress2("");
    setEnteredCity("");
    setEnteredState("");
    setEnteredZipCode("");
    setEnteredPhoneNumber("");
    setEnteredEmail("");

    history("/thanks");
  };

  const firstNameChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };
  const lastNameChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };
  const address1ChangeHandler = (event) => {
    setEnteredAddress1(event.target.value);
  };
  const address2ChangeHandler = (event) => {
    setEnteredAddress2(event.target.value);
  };
  const cityChangeHandler = (event) => {
    setEnteredCity(event.target.value);
  };
  const stateChangeHandler = (event) => {
    setEnteredState(event.target.value);
  };
  const zipCodeChangeHandler = (event) => {
    setEnteredZipCode(event.target.value);
  };
  const phoneNumberChangeHandler = (event) => {
    setEnteredPhoneNumber(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div className={classes.appForm}>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <div className={classes.formInput}>
            <h2>Application Form</h2>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="firstName">
                  First Name:<span>*</span>
                </label>
                <input
                  id="firstName"
                  placeholder="First Name"
                  type="text"
                  value={enteredFirtName}
                  onChange={firstNameChangeHandler}
                  // required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName">
                  Last Name:<span>*</span>
                </label>
                <input
                  id="lastName"
                  placeholder="Last Name"
                  type="text"
                  value={enteredLastName}
                  onChange={lastNameChangeHandler}
                  // required
                />
              </div>
            </div>
            <h5> Address </h5>
            <div className="address">
              <div className="mb-3">
                <label htmlFor="address1">
                  {" "}
                  Address Line 1:<span>*</span>
                </label>
                <input
                  id="address1"
                  placeholder="Street name & number"
                  type="text"
                  value={enteredAddress1}
                  onChange={address1ChangeHandler}
                  // required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address2"> Address Line 2:</label>
                <input
                  id="address2"
                  placeholder="Suite, apartment"
                  type="text"
                  value={enteredAddress2}
                  onChange={address2ChangeHandler}
                />
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <label htmlFor="city">
                    City:<span>*</span>
                  </label>
                  <input
                    id="city"
                    placeholder="City"
                    type="text"
                    value={enteredCity}
                    onChange={cityChangeHandler}
                    // required
                  />
                </div>
                <div className="col-sm-4">
                  <label htmlFor="state">
                    State:<span>*</span>
                  </label>
                  <input
                    id="state"
                    placeholder="State"
                    type="text"
                    value={enteredState}
                    onChange={stateChangeHandler}
                    // required
                  />
                </div>
                <div className="col-sm-4">
                  <label htmlFor="zipCode">
                    Zip Code:<span>*</span>
                  </label>
                  <input
                    id="zipCode"
                    placeholder="Zip code"
                    type="text"
                    value={enteredZipCode}
                    onChange={zipCodeChangeHandler}
                    // required
                  />
                </div>
              </div>
            </div>
            <h5>Contact information</h5>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="phoneNumber">
                  Phone Number:<span>*</span>
                </label>
                <input
                  id="phoneNumber"
                  placeholder="555-5555"
                  type="number"
                  value={enteredPhoneNumber}
                  onChange={phoneNumberChangeHandler}
                  // required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="email">
                  Email address:<span>*</span>
                </label>
                <input
                  id="email"
                  placeholder="john@doe.com"
                  type="text"
                  value={enteredEmail}
                  onChange={emailChangeHandler}
                  // required
                />
              </div>
            </div>
          </div>
          <div className={classes.btnJoinUs}>
            <Button type="submit"> Join Us </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
