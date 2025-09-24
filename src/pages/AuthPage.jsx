import React, { useState } from "react";
import Wrapper from "../components/Wrapper"

export default function AuthPage() {
    const [tab, setTab] = useState("login");

    return (
        <Wrapper> 
            <div className="bg-[#f6f7f8] dark:bg-[#101c22] font-display text-[#111618]">
                <div className="flex min-h-screen">
                    {/* Left Side (Login/Register form) */}
                    <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-20 py-12 lg:py-24">
                        <div className="w-full max-w-md">
                            <a
                                href="#"
                                className="flex items-center justify-center gap-2 text-2xl font-bold text-[#111618] mb-8"
                            >
                                <div className="size-6">
                                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                                <span>PATHSHALA</span>
                            </a>

                            <div className="bg-white dark:bg-[#101c22]/50 rounded-xl shadow-lg p-8">
                                {/* Tabs */}
                                <div className="flex border-[#dbe2e6] mb-6 ">
                                    <button
                                        onClick={() => setTab("login")}
                                        className={`flex-1 py-3 px-4 transition delay-150 duration-500 ease-all text-center font-semibold border-b-2 transition-colors ${tab === "login"
                                            ? "border-[#1193d4] text-[#1193d4]"
                                                : "border-transparent text-[#617c89] hover:text-[#111618]"
                                            }`}
                                    >
                                        Log In
                                    </button>
                                    <button
                                        onClick={() => setTab("register")}
                                        className={`flex-1 py-3 px-4 transition delay-150 duration-500 ease-in-out text-center font-semibold border-b-2 transition-colors ${tab === "register"
                                            ? "border-[#1193d4] text-[#1193d4]"
                                            : "border-transparent text-[#617c89] hover:text-#111618 "
                                            }`}
                                    >
                                        Register
                                    </button>
                                </div>

                                {/* Login Form */}
                                {tab === "login" && (
                                    <div>
                                        <form className="space-y-6">
                                            <div>
                                                <label
                                                    htmlFor="login-email"
                                                    className="block text-sm font-medium text-[#617c89] dark:text-[#a0b4bf]"
                                                >
                                                    Email Address
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        type="email"
                                                        id="login-email"
                                                        name="email"
                                                        placeholder="you@example.com"
                                                        autoComplete="email"
                                                        required
                                                        className="w-full px-4 py-2 rounded-lg border border-[#dbe2e6] bg-[#f6f7f8] focus:outline-none focus:ring-2 focus:ring-[#1193d4] focus:border-transparent transition-all"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <div className="flex items-center justify-between">
                                                    <label
                                                        htmlFor="login-password"
                                                        className="block text-sm font-medium text-[#617c89]"
                                                    >
                                                        Password
                                                    </label>
                                                    <a
                                                        href="#"
                                                        className="text-sm text-[#1193d4] hover:underline"
                                                    >
                                                        Forgot password?
                                                    </a>
                                                </div>
                                                <div className="mt-1">
                                                    <input
                                                        type="password"
                                                        id="login-password"
                                                        name="password"
                                                        placeholder="••••••••"
                                                        autoComplete="current-password"
                                                        required
                                                        className="w-full px-4 py-2 rounded-lg border border-[#dbe2e6] bg-[#f6f7f8] focus:outline-none focus:ring-2 focus:ring-[#1193d4] focus:border-transparent transition-all"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <button
                                                    type="submit"
                                                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-[#1193d4] hover:bg-[#1193d4]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1193d4] transition-colors"
                                                >
                                                    Log In
                                                </button>
                                            </div>
                                        </form>

                                        {/* Divider */}
                                        <div className="mt-6">
                                            <div className="relative">
                                                <div className="absolute inset-0 flex items-center">
                                                    <div className="w-full border-t border-[#dbe2e6]"></div>
                                                </div>
                                                <div className="relative flex justify-center text-sm">
                                                    <span className="px-2 bg-white text-[#617c89]">
                                                        Or continue with
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Social Login */}
                                            <div className="mt-6 grid grid-cols-2 gap-4">
                                                <div>
                                                    <a
                                                        href="#"
                                                        className="w-full inline-flex justify-center py-2.5 px-4 border border-[#dbe2e6] rounded-lg shadow-sm bg-white hover:bg-[#f6f7f8] text-sm font-medium text-[#617c89] transition-colors"
                                                    >
                                                        <svg
                                                            className="w-5 h-5 mr-2"
                                                            viewBox="0 0 48 48"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fill="#FFC107"
                                                                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                                                            />
                                                            <path
                                                                fill="#FF3D00"
                                                                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                                                            />
                                                            <path
                                                                fill="#4CAF50"
                                                                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.657-3.27-11.28-7.94l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                                                            />
                                                            <path
                                                                fill="#1976D2"
                                                                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C42.022,34.627,44,29.836,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                                                            />
                                                        </svg>
                                                        Google
                                                    </a>
                                                </div>
                                                <div>
                                                    <a
                                                        href="#"
                                                        className="w-full inline-flex justify-center py-2.5 px-4 border border-[#dbe2e6] rounded-lg shadow-sm bg-white hover:bg-[#f6f7f8] text-sm font-medium text-[#617c89] transition-colors"
                                                    >
                                                        <svg
                                                            className="w-5 h-5 mr-2"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fill="#1877F2"
                                                                d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24h11.494v-9.294H9.692v-3.622h3.126V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.324V1.324C24 .593 23.407 0 22.676 0z"
                                                            />
                                                        </svg>
                                                        Facebook
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Register Form */}
                                {tab === "register" && (
                                    <div>
                                        <form className="space-y-6">
                                            <div>
                                                <label
                                                    htmlFor="register-name"
                                                    className="block text-sm font-medium text-[#617c89]"
                                                >
                                                    Full Name
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        type="text"
                                                        id="register-name"
                                                        name="name"
                                                        placeholder="John Doe"
                                                        autoComplete="name"
                                                        required
                                                        className="w-full px-4 py-2 rounded-lg border border-[#dbe2e6] bg-[#f6f7f8] focus:outline-none focus:ring-2 focus:ring-[#1193d4] focus:border-transparent transition-all"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="register-email"
                                                    className="block text-sm font-medium text-[#617c89]"
                                                >
                                                    Email Address
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        type="email"
                                                        id="register-email"
                                                        name="email"
                                                        placeholder="you@example.com"
                                                        autoComplete="email"
                                                        required
                                                        className="w-full px-4 py-2 rounded-lg border border-[#dbe2e6] bg-[#f6f7f8] focus:outline-none focus:ring-2 focus:ring-[#1193d4] focus:border-transparent transition-all"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="register-password"
                                                    className="block text-sm font-medium text-[#617c89]"
                                                >
                                                    Password
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        type="password"
                                                        id="register-password"
                                                        name="password"
                                                        placeholder="••••••••"
                                                        autoComplete="new-password"
                                                        required
                                                        className="w-full px-4 py-2 rounded-lg border border-[#dbe2e6] dark:border-[#314552] bg-[#f6f7f8] focus:outline-none focus:ring-2 focus:ring-[#1193d4] focus:border-transparent transition-all"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <button
                                                    type="submit"
                                                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-[#1193d4] hover:bg-[#1193d4]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1193d4] transition-colors"
                                                >
                                                    Create Account
                                                </button>
                                            </div>
                                        </form>
                                        <p className="mt-6 text-xs text-center text-[#617c89]">
                                            By creating an account, you agree to our{" "}
                                            <a href="#" className="text-[#1193d4] hover:underline">
                                                Terms of Service
                                            </a>{" "}
                                            and{" "}
                                            <a href="#" className="text-[#1193d4] hover:underline">
                                                Privacy Policy
                                            </a>
                                            .
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Side (Hero Section with BG Image) */}
                    <div className="hidden lg:flex flex-1 bg-[#101c22] relative">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage:
                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAzT_-okMskrbS9ma9im-e9v1ZmW6meJcOnXrmerRDLDNfjn6ytrTDket5FdwWYm3zw6g8Cr0jbwIliYfR1-Ym6Nk9WKPCzCxmFS7A8aAM59nt2mxkKrOD-gRO6p-AFxME2ZaSnL_f6qMCI_ZesYZT8Dj6sPJv-r9HzWdZNIWZFZkb7cgVuYzXoR7nvTcqCuqpcoLYfBJJ9EbQowVjTKO8RiaWjBFBzGvAYSbTqIuDc2pkhrpBVCPj9NfoMdVnCWWF7_bVJenI_XP-z")',
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#101c22] via-[#101c22]/70 to-transparent"></div>
                        <div className="relative flex items-end p-12">
                            <div className="max-w-md">
                                <h2 className="text-3xl font-bold text-white">
                                    Start your learning journey today.
                                </h2>
                                <p className="mt-4 text-white/80">
                                    Access thousands of expert-led courses to achieve your personal
                                    and professional goals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};