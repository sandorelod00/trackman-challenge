import { createContext, useContext, useEffect, useState } from "react"
import type { Facility } from "../types/Facility"
import { v4 as uuidv4 } from "uuid"

const STORAGE_KEY = "facilities"

interface FacilitiesContextType {
    facilities: Facility[]
    addFacility: (facility: Omit<Facility, "id">) => void
    updateFacility: (facility: Facility) => void
    deleteFacility: (id: string) => void
    getFacilityById: (id: string) => Facility | undefined
}

const FacilitiesContext = createContext<FacilitiesContextType | undefined>(undefined)

export const FacilitiesContextProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [facilities, setFacilities] = useState<Facility[]>(() => {
        const stored = localStorage.getItem(STORAGE_KEY)
        return stored ? JSON.parse(stored) : []
    })

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(facilities))
    }, [facilities])

    const setDefaultFacility = (facilitiesList: Facility[], targetId: string) => {
        return facilitiesList.map((f) => ({
            ...f,
            defaultFacility: f.id === targetId,
        }))
    }

    const assignNewDefaultFacility = (facilitiesList: Facility[]) => {
        if (facilitiesList.length === 0) return facilitiesList
        return facilitiesList.map((f, i) => ({
            ...f,
            defaultFacility: i === 0,
        }))
    }

    const addFacility = (facility: Omit<Facility, "id">) => {
        setFacilities((prev) => {
            const newFacility: Facility = {
                ...facility,
                id: uuidv4(),
            }
            const updatedList = [...prev, newFacility]

            return newFacility.defaultFacility
                ? setDefaultFacility(updatedList, newFacility.id)
                : updatedList
        })
    }

    const updateFacility = (updatedFacility: Facility) => {
        setFacilities((prev) => {
            let updatedList = prev.map((f) => (f.id === updatedFacility.id ? updatedFacility : f))
            if (updatedFacility.defaultFacility) {
                updatedList = setDefaultFacility(updatedList, updatedFacility.id)
            }
            return updatedList
        })
    }

    const deleteFacility = (id: string) => {
        setFacilities((prev) => {
            const updatedList = prev.filter((f) => f.id !== id)
            const wasDefault = prev.find((f) => f.id === id)?.defaultFacility
            return wasDefault ? assignNewDefaultFacility(updatedList) : updatedList
        })
    }

    const sortedFacilities: Facility[] = [...facilities].sort((a, b) => {
        if (a.defaultFacility && !b.defaultFacility) return -1
        if (!a.defaultFacility && b.defaultFacility) return 1
        return a.name.localeCompare(b.name)
    })

    const getFacilityById = (id: string) => facilities.find((f) => f.id === id)

    return (
        <FacilitiesContext.Provider
            value={{
                facilities: sortedFacilities,
                addFacility,
                updateFacility,
                deleteFacility,
                getFacilityById,
            }}
        >
            {children}
        </FacilitiesContext.Provider>
    )
}
export const useFacilityContext = () => {
    const context = useContext(FacilitiesContext)
    if (!context) throw new Error("useFacilities must be used within FacilitiesProvider")
    return context
}
