import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import avatar from '../../assets/avatar.png';
import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo_small.png';

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
      {/* nav start */}
      <div className="navbar-start justify-start">
        {/* logo for large device */}
        <NavLink to="/" className="hidden lg:block">
          <img className="md:h-14 h-10" src={logo} alt="Logo" />
        </NavLink>
        {/* user for small device */}
        <div className="drawer z-10 w-10 h-10">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <label htmlFor="my-drawer-2" className=" drawer-button">
              <div className="w-10 h-10 overflow-hidden rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user?.photoURL ? user.photoURL : avatar}
                />
              </div>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-60 sm:w-80 p-4">
              {/* Sidebar content here */}
              {navLinks}
            </ul>
          </div>
        </div>
        <div className="lg:hidden"></div>
      </div>
      {/* nav center */}
      <div className="navbar-center lg:flex">
        <ul className="hidden lg:flex menu menu-horizontal px-1 lg:text-lg text-accent">
          {navLinks}
        </ul>

        <NavLink to="/" className="lg:hidden">
          <img className="h-12" src={logo2} alt="Logo" />
        </NavLink>
      </div>
      {/* nav end */}
      <div className="navbar-end">
        <div className="hidden lg:block">
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
                    src={user?.photoURL ? user?.photoURL : avatar}
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
        </div>

        {user ? (
          <Link
            onClick={() => signOutUser()}
            to="/"
            className="btn btn-sm md:btn-md border-none ml-2 bg-secondary text-accent"
          >
            Logout
          </Link>
        ) : (
          <>
            <Link
              to="/login"
              className="btn btn-sm md:btn-md border-none bg-secondary text-accent ml-2 hover:text-primary"
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
