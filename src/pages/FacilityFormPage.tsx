
import FacilityForm from "../components/pages/FacilityFormPage/FaclilityForm";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Facility } from "../types/Facility";
import { useFacilityContext } from "../context/FacilityContext";


const FacilityFormPage = () => {

    const { id } = useParams()
    const { getFacilityById } = useFacilityContext()

    const [facility, setFacility] = useState<Facility>();
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        if (id) {
            const initialFacility = getFacilityById(id);
            setFacility(initialFacility);
            setIsEditMode(true);
        }
    }, [getFacilityById, id])

    return (
        <div className="flex flex-col">
            {!isEditMode ? <h1>Create a New Facility</h1> : <h1>Edit Facility</h1>}
            <FacilityForm initialFacility={facility} isEditMode={isEditMode}/>
        </div>
    );
};
export default FacilityFormPage;
