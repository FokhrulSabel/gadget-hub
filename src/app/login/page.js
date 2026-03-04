"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCredentialsLogin = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!res.error) {
      router.push("/");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 shadow-lg rounded-xl">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Login to GadgetHub
        </h2>

        <form onSubmit={handleCredentialsLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded-lg"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded-lg"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full bg-black text-white py-2 rounded-lg">
            Login
          </button>
        </form>

        <div className="my-4 text-center">OR</div>

        <button
          onClick={() => signIn("google")}
          className="w-full border py-2 rounded-lg"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}
