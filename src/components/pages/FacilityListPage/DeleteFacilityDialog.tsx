import type { FC } from 'react';

import IconButton from '../../core/Button/IconButton';
import Dialog from '../../core/dialog/Dialog';
import Button from '../../core/Button/Button';

interface DeleteFacilityDialogProps {
    facilityName: string;
    isOpen: boolean;
    closeDialog: () => void;
    confirmDelete: () => void;
}

const DeleteFacilityDialog: FC<DeleteFacilityDialogProps> = ({
    facilityName,
    isOpen,
    closeDialog,
    confirmDelete,
}) => {
    return (
        <Dialog
            isOpen={isOpen}
            onClose={closeDialog}
            title="Delete Facility"
            className="w-[400px] rounded-md"
        >
            <div className="">
                <div className="flex justify-between items-center p-2">
                    <p>Delete Facility</p>
                    <IconButton className="bg-[#F5F5F5]" onClick={closeDialog}>
                        X
                    </IconButton>
                </div>
                <div className="border-y-1 border-[#D9D9D9]">
                    <div className="p-2">
                        <p>
                            Are you sure you want to delete this facility? This action cannot be
                            undone.
                        </p>
                        <p>
                            Facility: <b>{facilityName}</b>
                        </p>
                    </div>
                </div>
                <div className="flex justify-end gap-2 p-2">
                    <Button label="Cancel" onClick={closeDialog} variant="secondary" />
                    <Button label="Yes, Delete" onClick={confirmDelete} />
                </div>
            </div>
        </Dialog>
    );
};

export default DeleteFacilityDialog;
