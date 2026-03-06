"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import axios from "axios";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Link from "next/link";
import { Chrome } from "lucide-react";

export default function RegisterPage() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      await axios.post("/api/register", data);
      router.push("/login");
    } catch (err) {
      alert(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-bg">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="w-full max-w-md rounded-2xl p-[1px] bg-gradient-to-br from-[#0077B6] via-[#00B4D8] to-[#90E0EF] shadow-xl"
      >
        <div className="rounded-2xl bg-white dark:bg-slate-900 p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-[#03045E] dark:text-white">
              Create Account
            </h2>
            <p className="text-sm text-gray-500 mt-2">Join GadgetHub today</p>
          </div>

          {/* Google */}
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
            onClick={() => signIn("google")}
          >
            <Chrome size={18} />
            Continue with Google
          </Button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6 text-gray-400 text-sm">
            <div className="flex-1 h-px bg-gray-200"></div>
            OR
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input label="Full Name" name="name" register={register} required />

            <Input label="Email" name="email" register={register} required />

            <Input
              label="Password"
              name="password"
              type="password"
              register={register}
              required
            />

            <Button type="submit" className="w-full">
              Register
            </Button>
          </form>

          {/* Footer */}
          <p className="text-sm text-gray-500 text-center mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[#0077B6] font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
