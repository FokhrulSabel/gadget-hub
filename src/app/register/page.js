"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

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
    <div className="flex items-center justify-center min-h-[80vh] px-4">
      <div className="w-full max-w-md p-8 rounded-xl shadow-lg bg-white dark:bg-slate-800">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input label="Name" name="name" register={register} required />

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
      </div>
    </div>
  );
}
