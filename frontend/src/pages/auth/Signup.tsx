import { Button, Form } from "react-bootstrap";
import style from "./Login.module.css";
import GoogleIcon from "../../assets/images/google.png";
// import FacebookIcon from "../../assets/images/facebook.png";
import { Link, useNavigate } from "react-router-dom";
import { useState, type FormEvent } from "react";
import authService from "../../services/authService";
import type { SignupData } from "../../types/Auth";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { setToken } from "../../store/auth/tokenSlice";

const Signup = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const [form, setForm] = useState<SignupData>({
    name: "",
    email: "",
    password: "",
  });

  const [confirmPassowrd, setConfirmPassword] = useState<string>();

  const [error, setError] = useState<boolean>(false);

  const handleChangeCOnfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prevalue) => {
      return {
        ...prevalue,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    if (form.password !== confirmPassowrd) {
      setError(true);
      return;
    }

    try {
      const result = await authService.authSignup(form);

      console.log(result);
      dispatch(setToken({ name: result.name, token: result.token }));

      navigate("/home");
    } catch (err) {
      console.log(err);
      setError(true);
    }
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
          <Form.Group className="mb-3" controlId="name">
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
          <Form.Group className="mb-4" controlId="confirPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              name="confirm_password"
              type="password"
              placeholder="Password"
              onChange={handleChangeCOnfirm}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Submit
          </Button>
        </Form>
        <div className={style.orDivider}>or</div>
        <div className="d-flex justify-content-center gap-4 pt-2">
          <Button
            variant="light"
            className="w-25"
            onClick={() => {
              window.location.href = "http://localhost:3000/auth/google"; // ✅
            }}
          >
            <img src={GoogleIcon} alt="" width={30} />
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
