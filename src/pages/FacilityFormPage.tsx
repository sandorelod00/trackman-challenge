import FacilityForm from '../components/pages/FacilityFormPage/FaclilityForm';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { Facility } from '../types/Facility';
import { useFacilityContext } from '../context/useFacilities';

const FacilityFormPage = () => {
    const { id } = useParams();
    const { getFacilityById } = useFacilityContext();

    const [facility, setFacility] = useState<Facility>();
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        if (id) {
            const initialFacility = getFacilityById(id);
            setFacility(initialFacility);
            setIsEditMode(true);
        }
    }, [getFacilityById, id]);

    return (
        <div className="flex flex-col">
            <h2>{!isEditMode ? 'Create a New Facility' : 'Edit Facility'}</h2>
            <FacilityForm initialFacility={facility} isEditMode={isEditMode} />
        </div>
    );
};
export default FacilityFormPage;
