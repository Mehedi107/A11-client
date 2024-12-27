import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import avatar from '../../assets/avatar.png';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-artifacts">All Artifacts</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/add-artifacts">Add Artifacts</NavLink>
        </li>
      )}
    </>
  );

  return (
    <nav className="navbar px-4 bg-primary">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" text-tertiary lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-tertiary rounded-box z-[10] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <NavLink to="/" className="text-xl">
          <img className="md:h-14 h-10" src={logo} alt="Logo" />
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 lg:text-lg text-accent">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        {user && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
              data-tip={user?.displayName || 'User'}
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user?.photoURL ? user.photoURL : avatar}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-tertiary rounded-box mt-3 w-52 p-2 shadow z-10"
            >
              <li>
                <Link to={'/my-artifacts'}>My Artifacts</Link>
              </li>
              <li>
                <Link to={'/liked-artifacts'}>Liked Artifacts</Link>
                <a></a>
              </li>
            </ul>
          </div>
        )}

        {user ? (
          <Link
            onClick={() => signOutUser()}
            to="/"
            className="btn border-none ml-2 bg-secondary text-accent"
          >
            Logout
          </Link>
        ) : (
          <>
            <Link
              to="/login"
              className=" btn border-none bg-secondary text-accent ml-2 hover:text-primary"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
