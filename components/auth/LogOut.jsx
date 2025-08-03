"use client";

import { signOut } from "next-auth/react";

const LogOut = () => {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "http://localhost:3000/login" })}
      className="login"
    >
      Sign Out
    </button>
  );
};

export default LogOut;
