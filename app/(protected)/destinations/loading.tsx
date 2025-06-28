"use client"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTravelStore } from "../../store/travel-store"
import Image from "next/image"

const destinations = [
  {
    name: "Tokyo, Japan",
    rating: "4.9",
    price: "$$$",
    description: "Amazing culture and technology",
    image: "/images/Tokyo.jpg", // Images in public/images/
  },
  {
    name: "Paris, France",
    rating: "4.8",
    price: "$$$$",
    description: "City of love and art",
    image: "/images/Paris.jpg", // Images in public/images/
  },
  {
    name: "Bali, Indonesia",
    rating: "4.7",
    price: "$$",
    description: "Beautiful beaches and temples",
    image: "/images/Bali.jpg", // Images in public/images/
  },
  {
    name: "New York, USA",
    rating: "4.6",
    price: "$$$",
    description: "The city that never sleeps",
    image: "/images/USA.jpg", // Images in public/images/
  },
  {
    name: "Rome, Italy",
    rating: "4.8",
    price: "$$$",
    description: "Ancient history and great food",
    image: "/images/Rome.jpg", // Images in public/images/
  },
  {
    name: "Bangkok, Thailand",
    rating: "4.5",
    price: "$",
    description: "Street food and temples",
    image: "/images/Bangkok.jpg", // Images in public/images/
  },
]

export default function Destinations() {
  const [searchTerm, setSearchTerm] = useState("")
  const { addFavorite } = useTravelStore()

  const filteredDestinations = destinations.filter((dest) => dest.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Destinations</h1>
        <p className="text-gray-600">Discover amazing places to visit!</p>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search destinations..."
            className="max-w-md"
          />
        </CardContent>
      </Card>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDestinations.map((destination) => (
          <Card key={destination.name} className="hover:shadow-lg transition-shadow overflow-hidden">
            <CardContent className="p-0">
              <div className="space-y-4">
                {/* Local Image from public folder */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="p-4 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">{destination.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{destination.description}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-sm">{destination.rating}</span>
                    </div>
                    <span className="text-sm font-medium">{destination.price}</span>
                  </div>

                  <Button onClick={() => addFavorite(destination.name)} className="w-full" variant="outline">
                    Add to Favorites
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredDestinations.length === 0 && (
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="text-gray-500">No destinations found. Try a different search term.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
