import { type FC } from "react"
import { useForm, type SubmitHandler } from "react-hook-form"
import Button from "../../core/Button/Button"
import Checkbox from "../../core/Checkbox/Checkbox"
import Input from "../../core/Input/Input"
import TextArea from "../../core/TextArea/TextArea"
import type { Facility } from "../../../types/Facility"

interface FacilityFormProps {
    initialFacility?: FacilityFormInputs
}

type FacilityFormInputs = Omit<Facility, "id" | "isOpen">

const FacilityForm: FC<FacilityFormProps> = ({ initialFacility }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FacilityFormInputs>({
        defaultValues: initialFacility ?? {
            name: "",
            address: "",
            description: "",
            imageUrl: "",
            defaultFacility: false,
            openingHours: "",
            closingHours: "",
        },
    })

    const onSubmit: SubmitHandler<FacilityFormInputs> = (data: FacilityFormInputs) => {
        console.log("Submitted:", data)
    }

    return (
        <form className="bg-white shadow[#0C0C0D0D] py-4 px-6" onSubmit={handleSubmit(onSubmit)}>
            <h2>Facility Information</h2>

            <Input
                type="text"
                label="Facility Name"
                {...register("name", { required: "Facility name is required" })}
                error={errors.name?.message}
            />

            <Input
                type="text"
                label="Location"
                {...register("address", { required: "Location is required" })}
                error={errors.address?.message}
            />

            <TextArea
                label="Description"
                {...register("description", { required: "Description is required" })}
                error={errors.description?.message}
            />

            <Input
                type="text"
                label="Cover Image URL"
                {...register("imageUrl", {
                    required: "Image URL is required",
                })}
                error={errors.imageUrl?.message}
            />

            <Checkbox
                label="Default Facility"
                description="Setting this facility as default will override the currently marked default facility."
                {...register("defaultFacility")}
            />

            <h2>Working Hours</h2>
            <div className="flex gap-4">
                <Input
                    type="time"
                    label="Opening Time"
                    {...register("openingHours", { required: "Opening time is required" })}
                    error={errors.openingHours?.message}
                />

                <Input
                    type="time"
                    label="Closing Time"
                    {...register("closingHours", { required: "Closing time is required" })}
                    error={errors.closingHours?.message}
                />
            </div>

            <div className="flex justify-end gap-2 mt-4">
                <Button label="Cancel" variant="secondary" type="button" />
                <Button label="Create Facility" variant="primary" type="submit" />
            </div>
        </form>
    )
}

export default FacilityForm
