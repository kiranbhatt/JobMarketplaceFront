"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Mail, User, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

//Zod validation schema
const signupSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Must contain an uppercase letter")
    .regex(/[0-9]/, "Must contain a number")
    .regex(/[^A-Za-z0-9]/, "Must contain a special character"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type SignupFormData = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: SignupFormData) => {
    setErrorMsg("");
    console.log("User signup data:", data);
    try {
      const res = await fetch("/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        setErrorMsg(err.message || "Something went wrong");
        return;
      }

      //Success → redirect or show message
      alert("Account created successfully!");
    } catch (err) {
      setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md shadow-xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <div>
              <Input
                placeholder="Full Name"
                {...register("name")}
                className="pl-10"
              />

              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <Input
                  placeholder="Email"
                  {...register("email")}
                  className="pl-10" // add padding so text doesn’t overlap icon
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              {/* Left lock icon */}
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />

              {/* Input */}
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password")}
                className="pl-10 pr-10" // padding left for icon, right for eye toggle
              />

              {/* Right eye toggle */}
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>

              {/* Error message */}
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <Input
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
              )}
            </div>

            {/* Error */}
            {errorMsg && <p className="text-red-600 text-center">{errorMsg}</p>}

            {/* Submit */}
            <Button
              type="submit"
              disabled={!isValid || isSubmitting}
              className="w-full"
            >
              {isSubmitting ? "Creating..." : "Sign Up"}
            </Button>

            {/* OAuth */}
            <div className="mt-4 space-y-2">
              <Button
                type="button"
                variant="outline"
                className="w-full flex items-center gap-2"
                onClick={() => (window.location.href = "/auth/google")}
              >
                <img src="/google.svg" alt="Google" className="w-5 h-5" />
                Sign up with Google
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
