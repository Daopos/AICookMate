import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { setToken } from "../../store/auth/tokenSlice";
import { useEffect } from "react";

const Redirect = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();

  const token = searchParams.get("token");
  const name = searchParams.get("name");

  useEffect(() => {
    if (!token || !name) {
      navigate("/login", { replace: true });
      return;
    }
    dispatch(setToken({ name: name, token: token }));

    navigate("/recipe", { replace: true });
  }, [token, name, dispatch, navigate]);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <h3>Loading...</h3>
    </div>
  );
};

export default Redirect;
