import { useState } from "react";
import NavLinkButton from "../components/core/Navigation/NavLinkButton";
import DeleteFacilityDialog from "../components/pages/FacilityListPage/DeleteFacilityDialog";
import FacilityCard from "../components/pages/FacilityListPage/FacilityCard/FacilityCard";
import type { Facility } from "../types/Facility";
import { useFacilityContext } from "../context/FacilityContext";

const FacilityListPage = () => {

    const {facilities, deleteFacility} = useFacilityContext();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [facilityToDelete, setFacilityToDelete] = useState<Facility | null>();

    const openDialog = (facilityToDelete: Facility) => {
        setFacilityToDelete(facilityToDelete);
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
        setFacilityToDelete(null);
    };

    const confirmDelete = () => {
        if (facilityToDelete) {
            deleteFacility(facilityToDelete.id);
        }
        closeDialog();
    };

    return (
        <>
            <div className="flex flex-col">
                <div className="flex justify-end">
                    <NavLinkButton to="/create" label="Create Facility" variant={"primary"} />
                </div>
                <div className="flex grid grid-cols-3 gap-4 mt-1">
                    {facilities.map((facility) => (
                        <FacilityCard
                            key={facility.id}
                            facility={facility}
                            onDeleteClick={() => openDialog(facility)}
                        />
                    ))}
                </div>
            </div>

            <DeleteFacilityDialog
                isOpen={isDialogOpen}
                closeDialog={closeDialog}
                confirmDelete={confirmDelete}
                facilityName={facilityToDelete?.name || ''}
            />
        </>
    );
};
export default FacilityListPage;
