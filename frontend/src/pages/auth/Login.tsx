import { Button, Form } from "react-bootstrap";
import style from "./Login.module.css";
import GoogleIcon from "../../assets/images/google.png";
import FacebookIcon from "../../assets/images/facebook.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={style.authBackground} style={{ minHeight: "100vh" }}>
      <div>
        <h1 className={`${style.logoText}`}>AICookMate</h1>
        <h2 className="fw-bold ">Login</h2>
        {/* <Form.Text className="text-muted">Invalid Credentials</Form.Text> */}
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
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
          Don't have an account? <Link to={"/signup"}>Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
