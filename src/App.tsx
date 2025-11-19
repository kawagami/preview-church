import { Outlet, Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <nav style={{ padding: 16 }}>
        {/* <Link to="/">Home</Link> | <Link to="/about">About</Link> */}
        <Link to="/">Home</Link>
      </nav>

      <Outlet />
    </div>
  );
}
