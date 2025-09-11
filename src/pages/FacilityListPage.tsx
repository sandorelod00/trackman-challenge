import Button from '../components/core/Button/Button';
import FacilityCard from '../components/core/FacilityCard/FacilityCard';

const FacilityListPage = () => {
    return (
        <div className="flex flex-col">
            <div className="flex justify-end">
                <Button label={'Create Facility'} />
            </div>
            <div className="flex grid grid-cols-3 gap-4 mt-1">
                <FacilityCard />
                <FacilityCard />
                <FacilityCard />
                <FacilityCard />
                <FacilityCard />
                <FacilityCard />
                <FacilityCard />
                <FacilityCard />
                <FacilityCard />
            </div>
        </div>
    );
};
export default FacilityListPage;
