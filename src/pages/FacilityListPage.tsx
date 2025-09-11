import { useState } from 'react';
import FacilityCard from '../components/core/FacilityCard/FacilityCard';
import NavLinkButton from '../components/core/Navigation/NavLinkButton';
import type { Facility } from '../types/Facility';
import Dialog from '../components/core/dialog/Dialog';
import Button from '../components/core/Button/Button';
import DeleteFacilityDialog from '../components/DeleteFacilityDialog';

const mockFacilityData: Facility = {
    id: '1',
    name: 'Mock Facility',
    address: '123 Mock St, Mock City',
    isOpen: true,
    description: 'This is a mock facility used for demonstration purposes.',
    defaultFacility: false,
    imageUrl: '/mock.jpg',
    openingHours: '08:00 AM',
    closingHours: '10:00 PM',
};

const mockFacilityDataList: Facility[] = [
    mockFacilityData,
    { ...mockFacilityData, id: '2', name: 'Mock Facility 2', isOpen: false },
    { ...mockFacilityData, id: '3', name: 'Mock Facility 3', isOpen: true },
    { ...mockFacilityData, id: '4', name: 'Mock Facility 4', isOpen: false },
    { ...mockFacilityData, id: '5', name: 'Mock Facility 5', isOpen: true },
    { ...mockFacilityData, id: '6', name: 'Mock Facility 6', isOpen: true },
    { ...mockFacilityData, id: '7', name: 'Mock Facility 7', isOpen: false },
    { ...mockFacilityData, id: '8', name: 'Mock Facility 8', isOpen: true },
    { ...mockFacilityData, id: '9', name: 'Mock Facility 9', isOpen: false },
];

const FacilityListPage = () => {
    const [facilities, setFacilities] = useState<Facility[]>(mockFacilityDataList);
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
            setFacilities((prev) => prev.filter((f) => f.id !== facilityToDelete.id));
        }
        closeDialog();
    };

    return (
        <>
            <div className="flex flex-col">
                <div className="flex justify-end">
                    <NavLinkButton to="/create" label="Create Facility" />
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
                facilityName={facilityToDelete?.name || ""}
            />
        </>
    );
};
export default FacilityListPage;
