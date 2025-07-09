import { Button, Form, Stack } from "react-bootstrap";
import style from "./Login.module.css";

const Login = () => {
  return (
    <div className={style.authBackground} style={{ minHeight: "100vh" }}>
      <div className="p-4">
        <h1>AICookMate</h1>
        <h2 className="fw-bold">Login</h2>
        {/* <Form.Text className="text-muted">Invalid Credentials</Form.Text> */}
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Submit
          </Button>
        </Form>
        <div className={style.orDivider}>or</div>
        <div className="d-flex justify-content-center gap-4 pt-2">
          <Button variant="light">
            <a href="">Google</a>
          </Button>
          <Button variant="light">
            <a href="">Facebook</a>
          </Button>
        </div>
        <p className="text-center pt-3">
          Don't have an account? <a href="">Signup</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
