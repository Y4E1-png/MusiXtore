import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { createUser } from "../../redux/slices/usersSlice";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert ("Passwords don't match");
      return;
    } 

    try {
      await dispatch(createUser({ name: user, email, password })).unwrap();
      navigate("/");
    } catch {
      
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <label>User</label>
        <input 
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />
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
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label>Confirm Password</label>
        <input 
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit" >Register</button>
        {status === "failed" && <p>Error</p> }
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};


export default RegisterForm;