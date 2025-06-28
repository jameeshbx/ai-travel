import { create } from "zustand"

// Simple store - easy to understand
interface TravelStore {
  // Data
  trips: string[]
  favorites: string[]

  // Actions (functions to change data)
  addTrip: (trip: string) => void
  addFavorite: (place: string) => void
  removeTrip: (trip: string) => void
}

export const useTravelStore = create<TravelStore>((set) => ({
  // Starting data
  trips: [],
  favorites: [],

  // Functions to change data
  addTrip: (trip) =>
    set((state) => ({
      trips: [...state.trips, trip],
    })),

  addFavorite: (place) =>
    set((state) => ({
      favorites: [...state.favorites, place],
    })),

  removeTrip: (trip) =>
    set((state) => ({
      trips: state.trips.filter((t) => t !== trip),
    })),
}))
