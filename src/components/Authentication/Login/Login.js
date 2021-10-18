import React from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import useAuth from "../../../hook/useAuth";

// import useFirebase from "../../hooks/useFirebase";

export default function Login() {
  const {
    setIsLogin,
    setName,
    setEmail,
    setPassword,
    email,
    password,
    setError,
    processLogin,
    registerNewUser,
    isLogin,
    handleResetPassword,
    error,
    handleGoogleSignIn,
  } = useAuth();
  const toggleLogin = (e) => {
    setIsLogin(e.target.checked);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (password.length < 6) {
      setError("Password Must be at least 6 characters long.");
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("Password Must contain 2 upper case");
      return;
    }

    if (isLogin) {
      processLogin(email, password);
    } else {
      registerNewUser(email, password);
    }
  };
  return (
    <div className="w-75 m-auto">
      <Form onSubmit={handleRegistration}>
        <h3 className="text-primary">
          Wlcome to {isLogin ? "Login" : "Registration"}
        </h3>
        {!isLogin && (
          <FloatingLabel
            controlId="floatingInput"
            label="Name"
            className="mb-3"
          >
            <Form.Control
              onBlur={handleNameChange}
              type="email"
              placeholder="name@example.com"
            />
          </FloatingLabel>
        )}
        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
          <Form.Control
            onBlur={handleEmailChange}
            type="email"
            placeholder="name@example.com"
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            onBlur={handlePasswordChange}
            type="password"
            placeholder="Password"
          />
        </FloatingLabel>
        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check
            onChange={toggleLogin}
            type="checkbox"
            label="Already Have an Account"
          />
        </Form.Group>

        <div className="row mb-3 text-danger">{error}</div>
        <Button type="submit">{isLogin ? "Login" : "Register"}</Button>
        {isLogin && (
          <p className="mt-2" onClick={handleResetPassword}>
            <u> Forget your password?</u>
          </p>
        )}
      </Form>
      <Button className="my-3" onClick={handleGoogleSignIn}>
        Google Sign In
      </Button>
    </div>
  );
}

// <FloatingLabel
//   controlId="floatingInput"
//   label="Email address"
//   className="mb-3"
// >
//   <Form.Control type="email" placeholder="name@example.com" />
// </FloatingLabel>
// <FloatingLabel controlId="floatingPassword" label="Password">
//   <Form.Control type="password" placeholder="Password" />
// </FloatingLabel>
// <div className="mt-3">
//   <Button>Login</Button>
//   <p>or</p>
//   <Button onClick={handleClickGoogle}>Login with Google</Button>

// onBlur={handleNameChange}

//  onBlur = { handleEmailChange };
