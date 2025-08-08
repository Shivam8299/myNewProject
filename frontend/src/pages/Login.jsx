import React, { useState } from 'react';

function Login() {
  const [signUp, setSignUp] = useState(true);
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const formHandler = (e) => {
    e.preventDefault();
    if (!data.email || !data.password || (signUp && !data.name)) {
      alert('Please fill all required fields');
      return;
    }
    alert(signUp ? 'Account created!' : 'Logged in!');
    console.log('Submitted data:', data);
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="py-28 sm:py-24 md:py-16 w-full flex justify-center items-center px-4">
      <div className="bg-white backdrop-blur-md shadow-2xl rounded-xl p-8 md:p-10 w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center font-serif text-gray-700 mb-6">
          {signUp ? 'Sign Up' : 'Login'}
        </h1>

        <form onSubmit={formHandler}>
          {signUp && (
            <div className="mb-4">
              <input
                name="name"
                type="text"
                placeholder="Name"
                value={data.name}
                onChange={inputHandler}
                className="w-full p-3 rounded border border-gray-300 outline-none"
                required
              />
            </div>
          )}
          <div className="mb-4">
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={data.email}
              onChange={inputHandler}
              className="w-full p-3 rounded border border-gray-300 outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={data.password}
              onChange={inputHandler}
              className="w-full p-3 rounded border border-gray-300 outline-none"
              required
            />
          </div>

          <div className="text-sm text-gray-600 flex justify-between mb-6 cursor-pointer font-serif">
            <p className="hover:underline">Forgot your password?</p>
            <p
              onClick={() => setSignUp(!signUp)}
              className="text-blue-600 hover:underline"
            >
              {signUp ? 'Login Here' : 'Create New Account'}
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded font-medium transition duration-300"
          >
            {signUp ? 'Create Account' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
