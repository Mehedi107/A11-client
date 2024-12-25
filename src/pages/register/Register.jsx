import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import {
  AuthContext,
  notifyError,
  notifySuccess,
} from '../../provider/AuthProvider';

const Register = () => {
  const { createUser, loginWithGoogle } = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const toggleEyeButton = () => setToggle(!toggle);

  const register = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, photo, email, password);
    const userDetails = { name, photo, email, password };

    if (password.length < 6) {
      return notifyError('Password must be at least 6 characters long.');
    }

    if (!/[A-Z]/.test(password)) {
      return notifyError('Password must have at least one uppercase letter.');
    }
    if (!/[a-z]/.test(password)) {
      return notifyError('Password must have at least one lowercase letter.');
    }

    createUser(email, password)
      .then(userCredential => {
        // Signed up
        // const user = userCredential.user;
        // console.log(user);

        // Send user data to database
        fetch('https://visa-flow-server.vercel.app/users', {
          method: 'post',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(userDetails),
        })
          .then(res => res.json())
          .then(data => {
            // console.log('data send to database successfully', data);
          });

        notifySuccess('Account created successfully');
        // ...
        navigate('/');
      })
      .catch(error => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // console.log(errorCode);

        if (errorCode === 'auth/email-already-in-use')
          return notifyError('This email already exists');

        notifyError('Something went wrong');
      });
  };

  const googleLogin = () => loginWithGoogle().then(() => navigate('/'));
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-68px)] bg-clr-primary">
      <div className="w-full max-w-md  m-5 p-6 rounded-lg shadow-lg bg-white">
        <h2 className="text-3xl  text-center mb-4">Register</h2>

        <form onSubmit={register}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              id="username"
              className="input w-full mt-2  input-bordered"
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="photo"
              id="photo"
              className="input w-full mt-2 input-bordered"
              placeholder="Enter Photo URL"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              id="email"
              className="input  w-full mt-2 input-bordered"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="input input-bordered flex items-center gap-2">
              <input
                type={toggle ? 'text' : 'password'}
                className="grow"
                placeholder="Enter a password"
                name="password"
              />
              <span onClick={toggleEyeButton} className="cursor-pointer">
                {' '}
                {toggle ? <FaEye /> : <FaEyeSlash />}
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="btn border-none hover:bg-clrSecondary btn-block bg-clr-secondary hover:bg-clr-secondary mt-3"
          >
            Create Account
          </button>
        </form>

        <div className="mt-7">
          <button onClick={googleLogin} className=" btn b btn-block">
            <FaGoogle />
            Sign up with google
          </button>
        </div>

        <div className="flex justify-center items-center mt-6 gap-2">
          <span className="">Already have an account?</span>
          <Link className=" link" to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
