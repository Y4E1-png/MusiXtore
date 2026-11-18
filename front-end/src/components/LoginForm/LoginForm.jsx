import { useState } from "react";
import { useNavigate } from "react-router";
import { fetchUser, loginUser } from "../../redux/slices/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";



const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { status } = useSelector((state) => state.user)
 ;

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate ("/");
  };

   
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange = {(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {status === status.rejected}
        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </form>
    </div>
  );
};

export default LoginForm;