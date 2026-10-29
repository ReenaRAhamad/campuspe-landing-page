"use client";
import React, { useState } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

const Button: React.FC<ButtonProps> = ({ children, variant = "primary", className = "", ...props }) => {
  const base = "px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 transform active:scale-95";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg",
    secondary: "bg-gray-900 text-white hover:bg-gray-800",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50"
  };
  return <button className={`${base} ${variants[variant]} ${className}`} {...props}>{children}</button>;
};

export default function Home() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="font-bold text-xl text-blue-600">CampusPe</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-blue-600">Features</a>
            <a href="#" className="hover:text-blue-600">Solutions</a>
            <a href="#" className="hover:text-blue-600">Pricing</a>
          </div>
          <div className="hidden md:flex gap-4"><Button variant="outline">Sign In</Button><Button>Get Started</Button></div>
          <button onClick={() => setMenu(!menu)} className="md:hidden text-gray-600">☰</button>
        </div>
        {menu && <div className="md:hidden bg-white p-6 border-b flex flex-col gap-4"><Button variant="outline">Sign In</Button><Button>Get Started</Button></div>}
      </nav>
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-24 text-center lg:text-left grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-extrabold tracking-tight mb-6">Simplify Your <span className="text-blue-600">Campus Ecosystem</span></h1>
          <p className="text-lg text-gray-600 mb-8">The all-in-one platform built tailored for students, faculties, and administrators.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"><Button>Start Free Trial</Button><Button variant="outline">Watch Demo</Button></div>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xl aspect-video flex items-center justify-center text-gray-400">Interactive Component View</div>
      </section>
    </div>
  );
}
