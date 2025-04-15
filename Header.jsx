import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b bg-white shadow-sm">
      <h1 className="text-2xl font-bold text-red-600">
        book<span className="text-black">my</span>show
      </h1>
      <input
        type="text"
        placeholder="Search for Movies, Events, Plays, Sports and Activities"
        className="border p-2 rounded w-1/2 shadow-sm"
      />
      <div className="flex items-center gap-4">
        <span className="text-sm">Kolkata Pune </span>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Sign in
        </button>
      </div>
    </header>
  );
}
