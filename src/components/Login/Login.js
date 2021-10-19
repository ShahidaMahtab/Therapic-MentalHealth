import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Link, useHistory, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faGoogle } from "@fortawesome/free-brands-svg-icons";
import useAuth from "../../hooks/useAuth";
library.add(fab, faGoogle);
const Login = () => {
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .matches(/(?=.*?[A-Z])/, "Password Must Contain One Uppercase Letter"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);
  const { loginUsingEmail, signInUsingGoogle, setIsLoading, error, setError } =
    useAuth();
  const onSubmit = (data) => {
    const { email, password } = data;
    handleEmailSignIn(email, password);
  };
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/home";

  const handleGoogleLogin = () => {
    setIsLoading(true);
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_uri);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  const handleEmailSignIn = (email, password) => {
    loginUsingEmail(email, password)
      .then((result) => {
        history.push(redirect_uri);
        console.log(result.user);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  return (
    <Container className="my-5 p-5 d-flex justify-content-center align-item-center">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h4 className="mb-3 header-text fw-bold">Sign In To Your Account</h4>
          <label htmlFor="inputEmail3" className="">
            Email
          </label>
          <div className="row mb-3">
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                placeholder="abc@def.com"
                {...register("email", {
                  required: true,
                  pattern: "abcd@def.com",
                })}
              />
              {errors.email && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
          </div>
          <label htmlFor="inputpassword" className="">
            Password
          </label>
          <div className="row mb-3">
            <div className="col-sm-10 ">
              <input
                type="password"
                placeholder="Password"
                {...register("password")}
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.password?.message}</div>
              {<small className="text-danger">{error ? error : " "}</small>}
            </div>
          </div>
          <button type="submit" className="btn btn-clr text-white">
            SignIn
          </button>
          <p className="mt-3">
            New User? <Link to="/register">SignUp</Link>
          </p>
        </form>
        <div>
          <span className="lh-1 mb-0">or sign in with google </span>
          <button onClick={handleGoogleLogin} className="btn btn-dark rounded">
            <FontAwesomeIcon icon={["fab", "google"]} className="text-white" />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Login;
