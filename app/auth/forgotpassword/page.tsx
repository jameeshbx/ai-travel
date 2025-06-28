"use client"
import { useState } from "react"
import type React from "react"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plane, Mail, ArrowLeft, Send, CheckCircle, AlertCircle, Clock, Shield } from "lucide-react"


export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isEmailSent, setIsEmailSent] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic email validation
    if (!email.trim()) {
      setError("Email is required")
      return
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log("Password reset requested for:", email)
      setIsEmailSent(true)
    } catch (error) {
      console.error("Forgot password error:", error)
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleResendEmail = async () => {
    setIsLoading(true)

    try {
      // Simulate resend API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log("Password reset email resent to:", email)
      alert("Email resent successfully!")
    } catch (error) {
      setError("Failed to resend email. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4">
      {/* Beautiful Travel Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        // style={{
        //   backgroundImage: `url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2835&q=80')`,
        // }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Gradient overlay for extra depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-purple-900/30"></div>
      </div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
            }}
            animate={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-md relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>

          {/* Back to SignIn Link */}
          <div className="mb-6">

            {/* <Link href="/auth/signin" className="inline-flex items-center text-white hover:text-blue-200 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Sign In
            </Link> */}

          </div>


          <Card className="shadow-2xl border-0 backdrop-blur-sm bg-white/95">
            {!isEmailSent ? (
              // Forgot Password Form
              <>
                <CardHeader className="text-center pb-6">
                  {/* Logo */}
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white mr-3">
                      <Plane className="h-6 w-6" />
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900">TravelAI</h1>
                      <p className="text-sm text-gray-500">Smart Travel Planning</p>
                    </div>
                  </div>

                  <CardTitle className="text-2xl font-bold text-gray-900">Forgot Password?</CardTitle>
                  <p className="text-gray-600">
                    No worries! Enter your email address and we'll send you a link to reset your password.
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email Input */}
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value)
                            setError("") // Clear error when typing
                          }}
                          className="pl-10 bg-white/90 backdrop-blur-sm"
                          placeholder="Enter your email address"
                          required
                        />
                      </div>
                      {error && (
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          {error}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium shadow-lg"
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending Reset Link...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Send className="h-4 w-4 mr-2" />
                          Send Reset Link
                        </div>
                      )}
                    </Button>
                  </form>

                  {/* Additional Info */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <Shield className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <div className="text-sm text-blue-800">
                        <p className="font-medium mb-1">Security Notice</p>
                        <p>
                          For your security, the reset link will expire in 15 minutes. If you don't receive the email,
                          check your spam folder.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Back to Sign In */}
                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      Remember your password?{" "}
                      <Link href="/auth/signin" className="text-blue-600 hover:text-blue-700 font-medium">
                        Sign in here
                      </Link>
                    </p>
                  </div>
                </CardContent>
              </>
            ) : (
              // Email Sent Success State
              <>
                <CardHeader className="text-center pb-6">
                  {/* Success Icon */}
                  <motion.div
                    className="flex justify-center mb-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                  </motion.div>

                  <CardTitle className="text-2xl font-bold text-gray-900">Check Your Email</CardTitle>
                  <p className="text-gray-600">
                    We've sent a password reset link to <span className="font-medium text-gray-900">{email}</span>
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Instructions */}
                  <div className="space-y-4">
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <h3 className="font-medium text-gray-900 mb-2">What's next?</h3>
                      <ol className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-start">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xs font-medium mr-2 mt-0.5">
                            1
                          </span>
                          Check your email inbox (and spam folder)
                        </li>
                        <li className="flex items-start">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xs font-medium mr-2 mt-0.5">
                            2
                          </span>
                          Click the reset password link
                        </li>
                        <li className="flex items-start">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xs font-medium mr-2 mt-0.5">
                            3
                          </span>
                          Create your new password
                        </li>
                      </ol>
                    </div>

                    {/* Timer Info */}
                    <div className="flex items-center justify-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      Link expires in 15 minutes
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <Button
                      onClick={handleResendEmail}
                      disabled={isLoading}
                      variant="outline"
                      className="w-full bg-white/90 backdrop-blur-sm hover:bg-white"
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600 mr-2"></div>
                          Resending...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Send className="h-4 w-4 mr-2" />
                          Resend Email
                        </div>
                      )}
                    </Button>

                    <Link href="/signin">
                      <Button variant="ghost" className="w-full">
                        Back to Sign In
                      </Button>
                    </Link>
                  </div>

                  {/* Support */}
                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      Still having trouble?{" "}
                      <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
                        Contact Support
                      </Link>
                    </p>
                  </div>
                </CardContent>
              </>
            )}
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
