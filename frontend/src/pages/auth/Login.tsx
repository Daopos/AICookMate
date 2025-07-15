import { Button, Form } from "react-bootstrap";
import style from "./Login.module.css";
import GoogleIcon from "../../assets/images/google.png";
// import FacebookIcon from "../../assets/images/facebook.png";
import { Link, useNavigate } from "react-router-dom";
import type { SignupData } from "../../types/Auth";
import { useState, type FormEvent } from "react";
import authService from "../../services/authService";
import { useDispatch } from "react-redux";
import { setToken } from "../../store/auth/tokenSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState(false);

  const [formData, setFormData] = useState<Omit<SignupData, "name">>({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    try {
      const result = await authService.authLogin(formData);
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
        <h2 className="fw-bold ">Login</h2>
        {error && (
          <Form.Text className="text-muted">Invalid Credentials</Form.Text>
        )}
        <Form onSubmit={handleSubmit}>
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
          Don't have an account? <Link to={"/signup"}>Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
