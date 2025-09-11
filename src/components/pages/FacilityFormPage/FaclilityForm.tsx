import Button from "../../core/Button/Button";
import Checkbox from "../../core/Checkbox/Checkbox";
import Input from "../../core/Input/Input";
import TextArea from "../../core/TextArea/TextArea";


const FacilityForm = () => {
    return (
        <form className="bg-white shadow[#0C0C0D0D] py-4 px-6">
            <h2>Facility Information</h2>
            <Input type="text" label="Facility Name" name="facilityName" required />
            <Input type="text" label="Address" name="location" required />
            <TextArea label="Description" name="description" required />
            <Input type="text" label="Cover Image URL" name="coverImageUrl" required />
            <Checkbox
                label="Default Facility"
                description="Setting this facility as default will override the currently marked default facility."
                name="isDefault"
            />
            <h2>Working Hours</h2>
            <div className="flex">
                <Input type="time" label="Opening Time" name="openingTime" required />
                <Input type="time" label="Closing Time" name="closingTime" required />
            </div>
            <div className="flex justify-end gap-2">
                <Button label={'Cancel'} variant="secondary" />
                <Button label="Create Facility" variant="primary" />
            </div>
        </form>
    );
};

export default FacilityForm;
