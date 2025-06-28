"use client"

import { useState } from "react"
import type React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { User, Mail, Lock, Eye, EyeOff, Phone, AlertCircle, ArrowLeft } from "lucide-react"
import axios from "axios"

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<any>({})
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
    if (errors[name]) {
      setErrors((prev: any) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: any = {}

    if (!formData.name.trim()) newErrors.name = "Full name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)
console.log("Submitting form data:", formData);

    try {
      const response = await axios.post("/api/auth/signup", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      
      const data = response.data
      alert(data.message || "Account created successfully!")
      // Optional: redirect to signin page
      window.location.href = "/auth/signin"
    } catch (error: any) {
      console.error("Sign up error:", error)

      // Handle axios error response
      if (error.response && error.response.data) {
        alert(error.response.data.error || "Something went wrong. Please try again.")
      } else {
        alert("Something went wrong. Please try again.")
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: "url('/images/signuppp.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="w-full max-w-4xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-2">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>

            <div className="flex justify-end">
              <Card className="shadow-2xl border-0 w-full max-w-md">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900">Create Account</CardTitle>
                  <p className="text-gray-600">Fill in your details to get started</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="pl-10"
                          placeholder="John Doe"
                        />
                      </div>
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="pl-10"
                          placeholder="john@example.com"
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="pl-10"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          value={formData.password}
                          onChange={handleInputChange}
                          className="pl-10 pr-10"
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                      {errors.password && (
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          {errors.password}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium"
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Creating Account...
                        </div>
                      ) : (
                        "Create Account"
                      )}
                    </Button>
                  </form>

                  <div className="mt-6">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <Separator />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or continue with</span>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <a href="https://gmail.com" target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button variant="outline" className="w-full bg-transparent">
                          Google
                        </Button>
                      </a>

                      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button variant="outline" className="w-full bg-transparent">
                          Facebook
                        </Button>
                      </a>
                    </div>
                  </div>

                  <div className="text-center mt-6">
                    <p className="text-sm text-gray-600">
                      Already have an account?{" "}
                      <Link href="/auth/signin" className="text-blue-600 hover:text-blue-700 font-medium">
                        Sign in here
                      </Link>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
