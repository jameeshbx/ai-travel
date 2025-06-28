"use client"

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import LandingPage from "@/components/landing/landing";



export default function page() {
  return (
    <div>
        <Header/>
        <LandingPage/>
        <Footer/>
    </div>
  )
}