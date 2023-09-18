import { Link } from 'react-router-dom';

function Main() {
  return (
    <>
      <div>Logged in</div>
      <Link to="auth">Auth</Link>
    </>
  );
}

export default Main;
