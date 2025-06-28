"use client"
import { useState } from "react"
import type React from "react"


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useTravelStore } from "../../store/travel-store"
import { TripSchema } from "../../store/travel-store"


export default function TripPlanner() {
  const [destination, setDestination] = useState("")
  const [days, setDays] = useState("")
  const [budget, setBudget] = useState("")
  const [errors, setErrors] = useState<any>({})

  const { addTrip } = useTravelStore()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate with Zod
    const result = TripSchema.safeParse({
      destination,
      days: Number.parseInt(days),
      budget,
    })

    if (!result.success) {
      const fieldErrors: any = {}
      result.error.errors.forEach((error) => {
        fieldErrors[error.path[0]] = error.message
      })
      setErrors(fieldErrors)
      return
    }

    // Add trip if validation passes
    addTrip(result.data)
    setDestination("")
    setDays("")
    setBudget("")
    setErrors({})
    alert("Trip planned successfully!")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Trip Planner</h1>
        <p className="text-gray-600">Plan your next adventure!</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Planning Form */}
        <Card>
          <CardHeader>
            <CardTitle>Plan Your Trip</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="destination">Destination</Label>
                <Input
                  id="destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Where do you want to go?"
                />
                {errors.destination && <p className="text-red-500 text-sm mt-1">{errors.destination}</p>}
              </div>

              <div>
                <Label htmlFor="days">Number of Days</Label>
                <Input
                  id="days"
                  type="number"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  placeholder="How many days?"
                />
                {errors.days && <p className="text-red-500 text-sm mt-1">{errors.days}</p>}
              </div>

              <div>
                <Label htmlFor="budget">Budget</Label>
                <select
                  id="budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select budget</option>
                  <option value="Budget ($0-$50/day)">Budget ($0-$50/day)</option>
                  <option value="Mid-range ($50-$150/day)">Mid-range ($50-$150/day)</option>
                  <option value="Luxury ($150+/day)">Luxury ($150+/day)</option>
                </select>
                {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget}</p>}
              </div>

              <Button type="submit" className="w-full">
                Plan My Trip
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Sample Itinerary */}
        <Card>
          <CardHeader>
            <CardTitle>Sample Itinerary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium">Day 1</h4>
                <p className="text-sm text-gray-600">Arrival and check-in</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-medium">Day 2</h4>
                <p className="text-sm text-gray-600">Explore main attractions</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-medium">Day 3</h4>
                <p className="text-sm text-gray-600">Local culture and food</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-medium">Day 4</h4>
                <p className="text-sm text-gray-600">Shopping and departure</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
