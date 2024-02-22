import React, { useState } from "react";

export default function AddUser() {
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const [userFormErrors, setUserFormErrors] = useState({
    name: null,
    email: null,
    userName: null,
    password: null,
    confirmPassword: null,
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleInputChange = (e) => {
    const field_name = e.target.name;
    const field_value = e.target.value;

    setUserForm({
      ...userForm,
      [field_name]: field_value,
    });

    switch (field_name) {
      case "name":
        setUserFormErrors({
          ...userFormErrors,
          name:
            field_value.length === 0
              ? "This field is required"
              : field_value.length < 3
              ? "Min.length is 3"
              : null,
        });
        break;
      case "email":
        setUserFormErrors({
          ...userFormErrors,
          email:
            field_value.length === 0
              ? "This field is required"
              : !validateEmail(field_value)
              ? "Invalid email format"
              : null,
        });
        break;
      case "userName":
        setUserFormErrors({
          ...userFormErrors,
          userName:
            field_value.length === 0
              ? "This field is required"
              : field_value.includes(" ")
              ? "Username should not contain spaces"
              : null,
        });
        break;
      case "password":
        setUserFormErrors({
          ...userFormErrors,
          password:
            field_value.length === 0
              ? "This field is required"
              : !validatePassword(field_value)
              ? "Invalid password format"
              : null,
        });
        break;
      case "confirmPassword":
        setUserFormErrors({
          ...userFormErrors,
          confirmPassword:
            field_value.length === 0
              ? "This field is required"
              : field_value !== userForm.password
              ? "Passwords do not match"
              : null,
        });
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      
      <h2 style={{margin:"10px 30px "}}>Register Form</h2>
      <hr style={{margin:"30px"}}/>
      <form onSubmit={handleFormSubmit} style={{margin:"100px"}}>
        {/* name */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label ">
            Name
          </label>
          <input
            type="text"
            className={`form-control ${
              userFormErrors.name ? "border-danger" : ""
            }`}
            id="name"
            name="name"
            aria-describedby="register_name_help"
            value={userForm.name}
            onChange={handleInputChange}
          />
          {userFormErrors.name && (
            <div id="register_name_help" className="form-text text-danger">
              {userFormErrors.name}
            </div>
          )}
        </div>

        {/* email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className={`form-control ${
              userFormErrors.email ? "border-danger" : ""
            }`}
            id="email"
            name="email"
            aria-describedby="register_email_help"
            value={userForm.email}
            onChange={handleInputChange}
          />
          {userFormErrors.email && (
            <div id="register_email_help" className="form-text text-danger">
              {userFormErrors.email}
            </div>
          )}
        </div>

        {/* userName */}
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className={`form-control ${
              userFormErrors.userName ? "border-danger" : ""
            }`}
            id="userName"
            name="userName"
            aria-describedby="register_userName_help"
            value={userForm.userName}
            onChange={handleInputChange}
          />
          {userFormErrors.userName && (
            <div id="register_userName_help" className="form-text text-danger">
              {userFormErrors.userName}
            </div>
          )}
        </div>

        {/* password */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className={`form-control ${
              userFormErrors.password ? "border-danger" : ""
            }`}
            id="password"
            name="password"
            aria-describedby="register_password_help"
            value={userForm.password}
            onChange={handleInputChange}
          />
          {userFormErrors.password && (
            <div id="register_password_help" className="form-text text-danger">
              {userFormErrors.password}
            </div>
          )}
        </div>

        {/* confirm password */}
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className={`form-control ${
              userFormErrors.confirmPassword ? "border-danger" : ""
            }`}
            id="confirmPassword"
            name="confirmPassword"
            aria-describedby="register_confirmPassword_help"
            value={userForm.confirmPassword}
            onChange={handleInputChange}
          />
          {userFormErrors.confirmPassword && (
            <div
              id="register_confirmPassword_help"
              className="form-text text-danger"
            >
              {userFormErrors.confirmPassword}
            </div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
