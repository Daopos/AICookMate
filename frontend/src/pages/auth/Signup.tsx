import { Button, Form, Stack } from "react-bootstrap";
import style from "./Login.module.css";
import GoogleIcon from "../../assets/images/google.png";
import FacebookIcon from "../../assets/images/facebook.png";
import { Link } from "react-router-dom";
import { useSignup } from "../../viewmodels/userSIgnup";
import { useState, type FormEvent } from "react";
import type { authSignup } from "../../model/User";

const Signup = () => {
  const { signup, loading, error, user } = useSignup();

  const [form, setForm] = useState<authSignup>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prevalue) => {
      return {
        ...prevalue,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    signup(form);
  };

  return (
    <div className={style.authBackground} style={{ minHeight: "100vh" }}>
      <div>
        <h1 className={`${style.logoText}`}>AICookMate</h1>
        <h2 className="fw-bold ">Signup</h2>
        {error && (
          <Form.Text className=" text-danger">Invalid Credentials</Form.Text>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Enter name"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              name="confirm_password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Submit
          </Button>
        </Form>
        <div className={style.orDivider}>or</div>
        <div className="d-flex justify-content-center gap-4 pt-2">
          <Button variant="light" className="w-25">
            <a href="">
              <img src={GoogleIcon} alt="" width={30} />
            </a>
          </Button>
          <Button variant="light" className="w-25">
            <a href="">
              <img src={FacebookIcon} alt="" width={30} />
            </a>
          </Button>
        </div>
        <p className="text-center pt-3">
          Don't have an account? <Link to={"/login"}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
