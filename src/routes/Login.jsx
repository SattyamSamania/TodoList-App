import { useState } from 'react';
import styles from '@/styles/Login.module.css';
import { useAuthContext } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('');
  const { login } = useAuthContext();

const navigate = useNavigate();



  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) return;
    login(username)
    navigate('/', {replace: true})
    console.log(username);
  };
  return (
    <div>
      <h1>Login</h1>
      <div className={styles.formWrapper}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
