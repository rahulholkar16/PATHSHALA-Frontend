import React, { useState } from "react";
import Wrapper from "../components/Wrapper"
import Logincomponenet from "../components/Logincomponenet";
import RegisterComponet from "../components/RegisterComponet";

export default function AuthPage() {
    const [tab, setTab] = useState("login");

    return (
            <div className="bg-[#f6f7f8] font-display text-[#111618]">
                <div className="flex min-h-screen">
                    {/* Left Side (Login/Register form) */}
                    <div className="flex-1 flex flex-col bg-[#ffffff] justify-center items-center px-4 sm:px-6 lg:px-20 py-12 lg:py-24">
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

                            <div className="rounded-xl shadow-lg p-8">
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
                                    <Logincomponenet/>
                                )}

                                {/* Register Form */}
                                {tab === "register" && (
                                   < RegisterComponet/>
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
    );
};