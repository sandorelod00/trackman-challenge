import { createContext, useContext } from 'react';
import type { Facility } from '../types/Facility';

interface FacilitiesContextType {
    facilities: Facility[];
    addFacility: (facility: Omit<Facility, 'id'>) => void;
    updateFacility: (facility: Facility) => void;
    deleteFacility: (id: string) => void;
    getFacilityById: (id: string) => Facility | undefined;
}

export const FacilitiesContext = createContext<FacilitiesContextType | undefined>(undefined);

export const useFacilityContext = () => {
    const context = useContext(FacilitiesContext);
    if (!context) throw new Error('useFacilities must be used within FacilitiesProvider');
    return context;
};
