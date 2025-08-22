"use client";

import { registerUser } from "@/app/actions/auth/registerUser";

export default function RegisterForm() {
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const payload = { username, email, password };
    const result = await registerUser(payload);
    console.log(result);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-green-100 rounded-lg shadow-lg border border-gray-500/60">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        Create Your Account
      </h2>
      <form onSubmit={handleRegister} className="space-y-5">
        {/* Username */}
        <div>
          <label htmlFor="username" className="text-gray-700 font-medium">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your name"
            className="w-full mt-2 px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="text-gray-700 font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="w-full mt-2 px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="text-gray-700 font-medium">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="w-full my-2 px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-700 hover:bg-green-900 cursor-pointer text-white font-semibold py-2 rounded-lg transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}
