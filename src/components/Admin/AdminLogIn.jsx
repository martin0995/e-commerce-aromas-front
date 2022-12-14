import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useInput } from "../../hooks/useInput";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userLogin } from "../../store/user";

const AdminLogIn = () => {
  const userName = useInput("userName");
  const password = useInput("password");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // POST user credentials:
      const { data } = await axios.post(
        "http://localhost:8000/api/admin/login",
        {
          nickname: userName.value,
          password: password.value,
        }
      );

      console.log(data);

      // Set userState:
      dispatch(userLogin(data.dataValues));

      // Store the user in localStorage to PERSIST:
      localStorage.setItem("user", JSON.stringify(data.dataValues));

      // Redirect to home page
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div>
        <Link to="/">
          <button className="btn btn-secondary btn-sm">Home</button>
        </Link>
      </div>

      <h1>Admin Login</h1>

      <div className="container">
        <form className="row" onSubmit={handleSubmit}>
          <div>
            <label>Nombre de Admin:</label>
            <input
              type="nickName"
              className="form-control"
              id="floatingInput"
              placeholder="Apodo"
              {...userName}
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Escribi tu contraseña"
              {...password}
            />
            <br />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogIn;
