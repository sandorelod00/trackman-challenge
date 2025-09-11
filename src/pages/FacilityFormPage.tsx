import { useParams } from 'react-router-dom';
import FacilityForm from '../components/facilityForm/FaclilityForm';

const FacilityFormPage = () => {
    const { id } = useParams<{ id: string }>();
    return (
        <div className='flex flex-col'>
            <h1>Create a New Facility</h1>
            <FacilityForm />
        </div>
    )
};
export default FacilityFormPage;
