"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Plane,
  MapPin,
  Calendar,
  Users,
  Star,
  ArrowRight,
  Play,
  Globe,
  Camera,
  MessageSquare,
  Sparkles,
  Mountain,
  Waves,
  Building,
  TreePine,
  Sun,
} from "lucide-react"

// Tourist places data with animations and themes
const touristPlaces = [
  {
    id: 1,
    name: "Santorini, Greece",
    description: "Beautiful white buildings and blue domes",
    rating: 4.9,
    visitors: "2M+ visitors",
    theme: "mediterranean",
    icon: Building,
    colors: ["#3B82F6", "#60A5FA", "#93C5FD"],
    particles: 20,
  },
  {
    id: 2,
    name: "Kyoto, Japan",
    description: "Ancient temples and cherry blossoms",
    rating: 4.8,
    visitors: "5M+ visitors",
    theme: "zen",
    icon: TreePine,
    colors: ["#EC4899", "#F472B6", "#F9A8D4"],
    particles: 25,
  },
  {
    id: 3,
    name: "Machu Picchu, Peru",
    description: "Ancient Incan citadel in the mountains",
    rating: 4.9,
    visitors: "1.5M+ visitors",
    theme: "mountain",
    icon: Mountain,
    colors: ["#10B981", "#34D399", "#6EE7B7"],
    particles: 15,
  },
  {
    id: 4,
    name: "Bali, Indonesia",
    description: "Tropical paradise with stunning beaches",
    rating: 4.7,
    visitors: "6M+ visitors",
    theme: "tropical",
    icon: Waves,
    colors: ["#06B6D4", "#22D3EE", "#67E8F9"],
    particles: 30,
  },
  {
    id: 5,
    name: "Paris, France",
    description: "City of love and iconic landmarks",
    rating: 4.8,
    visitors: "30M+ visitors",
    theme: "romantic",
    icon: Building,
    colors: ["#8B5CF6", "#A78BFA", "#C4B5FD"],
    particles: 18,
  },
  {
    id: 6,
    name: "Dubai, UAE",
    description: "Modern city with luxury and innovation",
    rating: 4.6,
    visitors: "16M+ visitors",
    theme: "modern",
    icon: Sun,
    colors: ["#F59E0B", "#FBBF24", "#FCD34D"],
    particles: 22,
  },
]

const features = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "AI-Powered Planning",
    description: "Smart recommendations based on your preferences and travel history",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Destination Discovery",
    description: "Explore hidden gems and popular destinations worldwide",
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Smart Itineraries",
    description: "Automatically generated itineraries optimized for your time",
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Travel Assistant",
    description: "24/7 AI chat support for all your travel questions",
  },
]

// Animated Background Component
const AnimatedBackground = ({ place, isActive }: { place: any; isActive: boolean }) => {
  const IconComponent = place.icon

  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 1.5 }}
    >
      {/* Gradient Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${place.colors[0]}, ${place.colors[1]}, ${place.colors[2]})`,
        }}
        animate={{
          background: [
            `linear-gradient(135deg, ${place.colors[0]}, ${place.colors[1]}, ${place.colors[2]})`,
            `linear-gradient(225deg, ${place.colors[1]}, ${place.colors[2]}, ${place.colors[0]})`,
            `linear-gradient(315deg, ${place.colors[2]}, ${place.colors[0]}, ${place.colors[1]})`,
            `linear-gradient(135deg, ${place.colors[0]}, ${place.colors[1]}, ${place.colors[2]})`,
          ],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      {/* Floating Particles */}
      {/* {Array.from({ length: place.particles }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))} */}

      {/* Large Floating Icons */}
      <motion.div
        className="absolute top-1/4 left-1/4 text-white/10"
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 5, -5, 0],
        }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <IconComponent size={120} />
      </motion.div>

      <motion.div
        className="absolute top-3/4 right-1/4 text-white/10"
        animate={{
          y: [20, -20, 20],
          rotate: [0, -5, 5, 0],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <IconComponent size={80} />
      </motion.div>

      {/* Geometric Shapes */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-32 h-32 border-2 border-white/20 rounded-full"
        style={{ transform: "translate(-50%, -50%)" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      <motion.div
        className="absolute top-1/3 right-1/3 w-16 h-16 bg-white/10 rounded-lg"
        animate={{
          rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
    </motion.div>
  )
}

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0)  
  const [isVisible, setIsVisible] = useState(false)

  // Auto-slide effect for tourist places
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % touristPlaces.length)
    }, 5000) // Increased to 5 seconds for better viewing               
    return () => clearInterval(timer)
  }, [])

  // Animation on scroll
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          {touristPlaces.map((place, index) => (
            <AnimatedBackground key={place.id} place={place} isActive={index === currentSlide} />
          ))}
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center text-white px-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Discover Your Next
            <motion.span
              className="block text-blue-400"
              animate={{
                textShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.5)",
                  "0 0 40px rgba(59, 130, 246, 0.8)",
                  "0 0 20px rgba(59, 130, 246, 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              Adventure
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            AI-powered travel planning that turns your dream destinations into unforgettable journeys
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Link href="/">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                  <Plane className="mr-2 h-5 w-5" />
                  Start Planning
                </Button>
              </motion.div>
            </Link>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white hover:text-black text-lg px-8 py-4"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Current destination info */}
          <motion.div
            className="mt-12 inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <MapPin className="h-4 w-4 mr-2" />
            <AnimatePresence mode="wait">
              <motion.span
                key={currentSlide}
                className="text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                Now featuring: {touristPlaces[currentSlide].name}
              </motion.span>
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {touristPlaces.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose TravelAI?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of travel planning with our intelligent platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardContent className="pt-8 pb-6">
                    <motion.div
                      className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
            <p className="text-xl text-gray-600">Explore the world's most amazing places</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {touristPlaces.slice(0, 6).map((place, index) => (
              <motion.div
                key={place.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-0">
                    <div className="relative h-64 overflow-hidden">
                      {/* Animated destination preview */}
                      <motion.div
                        className="w-full h-full"
                        style={{
                          background: `linear-gradient(135deg, ${place.colors[0]}, ${place.colors[1]})`,
                        }}
                        whileHover={{
                          background: `linear-gradient(225deg, ${place.colors[1]}, ${place.colors[2]})`,
                        }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          >
                            <place.icon size={80} className="text-white/30" />
                          </motion.div>
                        </div>
                      </motion.div>

                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="text-sm font-medium">{place.rating}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
                      <p className="text-gray-600 mb-3">{place.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {place.visitors}
                        </span>
                        <motion.div whileHover={{ x: 5 }}>
                          <Button variant="ghost" size="sm">
                            Explore <ArrowRight className="h-4 w-4 ml-1" />
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 opacity-90"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of travelers who trust TravelAI for their adventures
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                  <Globe className="mr-2 h-5 w-5" />
                  Get Started Free
                </Button>
              </motion.div>
            </Link>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
              >
                <Camera className="mr-2 h-5 w-5" />
                View Gallery
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
