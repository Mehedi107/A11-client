import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import {
  AuthContext,
  notifyError,
  notifySuccess,
} from '../../provider/AuthProvider';

const Login = () => {
  const [toggle, setToggle] = useState(false);
  const { login, loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleEyeButton = () => setToggle(!toggle);

  const loginUser = e => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // navigate('/');
    login(email, password)
      .then(userCredential => {
        // Signed in
        // const user = userCredential.user;
        // console.log(user);
        notifySuccess('Login successful');

        navigate('/');
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        notifyError('Wrong email or password');
      });
  };

  const googleLogin = () => loginWithGoogle().then(() => navigate('/'));

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-68px)] bg-clr-primary ">
      <div className="w-full max-w-md  m-5 p-8 rounded-lg shadow-lg bg-white">
        <h2 className="text-3xl text-center mb-6">Login</h2>

        <form onSubmit={loginUser}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-start">
              Email
            </label>
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
            <p className=" mb-2 text-left">Password</p>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type={toggle ? 'text' : 'password'}
                className="grow"
                name="password"
                placeholder="Enter a password"
                required
              />
              <span onClick={toggleEyeButton} className="cursor-pointer">
                {' '}
                {toggle ? <FaEye /> : <FaEyeSlash />}
              </span>
            </label>
            <p
              // onClick={handleForgetPassword}
              className=" mt-2 text-left text-sm hover:underline cursor-pointer"
            >
              Forget password?
            </p>
          </div>

          <button
            type="submit"
            className="btn  w-full mt-4 text-base hover:bg-clr-secondary bg-clr-secondary"
          >
            Login
          </button>
        </form>

        <div className="divider divider-info ">Or</div>

        <div className="flex justify-center items-center space-x-4">
          <button onClick={googleLogin} className="text-base btn btn-block">
            <FaGoogle />
            Login with google
          </button>
        </div>

        <div className=" text-center mt-5">
          <p>
            Don&apos;t have account?{' '}
            <Link className=" link" to="/register">
              Create Account
            </Link>{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
