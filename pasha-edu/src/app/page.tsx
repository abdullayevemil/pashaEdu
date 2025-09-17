"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo_white.png";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password, remember });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1483f7] to-[#5ac8fa] p-4">
      <div className="w-full max-w-md">
        <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
          {/* Header */}
          <div className="login-header mb-6">
            <Image
              src={Logo}
              alt="Platform Logo"
              width={200}
              height={50}
              className="mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800">
              Welcome Back
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Login to continue your learning journey
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="text-left">
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-gray-800 text-sm mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm placeholder-gray-700 focus:outline-none focus:border-[#1483f7] transition"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="password"
                className="block text-gray-800 text-sm mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm placeholder-gray-700 focus:outline-none focus:border-[#1483f7] transition"
              />
            </div>

            <div className="flex justify-between items-center text-xs mb-5">
              <label className="flex items-center gap-2 text-gray-800">
                <input
                  type="checkbox"
                  name="remember"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="w-3 h-3 accent-[#1483f7]"
                />
                Remember me
              </label>
              <Link
                href="/forgot-password"
                className="text-[#1483f7] hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <Link href="/main_dashboard/index.html">
              <button
                type="submit"
                className="w-full bg-[#1483f7] hover:bg-[#0d6cd6] text-white py-3 rounded-lg text-sm transition"
              >
                Sign In
              </button>{" "}
            </Link>
          </form>

          {/* Footer */}
          <div className="mt-5 text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-[#1483f7] hover:underline">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
