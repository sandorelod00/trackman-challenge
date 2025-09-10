import { useParams } from 'react-router-dom';

const FacilityFormPage = () => {
    const { id } = useParams<{ id: string }>();
    return <div>Facility Form Page {id}</div>;
};
export default FacilityFormPage;
