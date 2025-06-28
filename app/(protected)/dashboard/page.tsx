"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useTravelStore } from "../../store/travel-store"
import Image from "next/image"


// Popular destinations with images
const popularDestinations = [
  {
    name: "Tokyo, Japan",
    image: "/images/Tokyo.jpg",
  },
  {
    name: "Paris, France",
    image: "/images/Paris.jpg",
  },
  {
    name: "Bali, Indonesia",
    image: "/images/Bali.jpg",
  },
  {
    name: "New York, USA",
    image: "/images/USA.jpg",
  },
]

export default function Dashboard() {
  const { trips, favorites } = useTravelStore()

  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-600">Welcome to your travel dashboard!</p>
      </div>


      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Trips</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-blue-600">{trips.length}</p> 
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Favorites</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-600">{favorites.length}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Countries</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-purple-600">12</p>
          </CardContent>
        </Card>
      </div>

      {/* Your Trips */}
      <Card>
        <CardHeader>
          <CardTitle>Your Recent Trips</CardTitle>
        </CardHeader>
        <CardContent>
          {trips.length === 0 ? (
            <p className="text-gray-500">No trips yet. Start planning!</p>
          ) : (
            <div className="space-y-3">
              {trips.map((trip, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">{trip.destination}</p>
                    <p className="text-sm text-gray-600">
                      {trip.days} days • {trip.budget}
                    </p>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => useTravelStore.getState().removeTrip(index)}>
                    Remove
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Popular Destinations - WITH IMAGES */}
      <Card>
        <CardHeader>
          <CardTitle>Popular Destinations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {popularDestinations.map((destination) => (
              <div
                key={destination.name}
                className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow"
              >
                {/* Real Image instead of gray placeholder */}
                <div className="relative w-full h-32 bg-gray-200 rounded-lg mb-3 overflow-hidden">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      e.currentTarget.src = "/placeholder.svg"
                    }}
                  />
                </div>
                <p className="font-medium">{destination.name}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-2"
                  onClick={() => useTravelStore.getState().addFavorite(destination.name)}
                >
                  Add to Favorites
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
