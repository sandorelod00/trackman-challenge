import FacilityCard from '../components/core/FacilityCard/FacilityCard';
import NavLinkButton from '../components/core/Navigation/NavLinkButton';

const FacilityListPage = () => {
    return (
        <div className="flex flex-col">
            <div className="flex justify-end">
                <NavLinkButton to="/create" label="Create Facility" />
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
