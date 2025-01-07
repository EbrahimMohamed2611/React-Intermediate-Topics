import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  return (
    <form
      className="mx-3 my-5"
      onSubmit={(e) => {
        e.preventDefault();
        navigate("/");
      }}
    >
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default LoginPage;
