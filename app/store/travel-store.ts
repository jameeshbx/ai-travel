import { create } from "zustand"
import { z } from "zod"

// Zod schema for validation
export const TripSchema = z.object({
  destination: z.string().min(1, "Please enter a destination"),
  days: z.number().min(1, "Trip must be at least 1 day"),
  budget: z.string().min(1, "Please select a budget"),
})

export type Trip = z.infer<typeof TripSchema>

// Simple Zustand store
interface TravelStore {
  trips: Trip[]
  favorites: string[]
  addTrip: (trip: Trip) => void
  addFavorite: (place: string) => void
  removeTrip: (index: number) => void
}

export const useTravelStore = create<TravelStore>((set) => ({
  trips: [],
  favorites: [],

  addTrip: (trip) =>
    set((state) => ({
      trips: [...state.trips, trip],
    })),

  addFavorite: (place) =>
    set((state) => ({
      favorites: [...state.favorites, place],
    })),

  removeTrip: (index) =>
    set((state) => ({
      trips: state.trips.filter((_, i) => i !== index),
    })),
}))
