import { useEffect, type FC } from "react"
import { useForm, type SubmitHandler } from "react-hook-form"
import Button from "../../core/Button/Button"
import Checkbox from "../../core/Checkbox/Checkbox"
import Input from "../../core/Input/Input"
import TextArea from "../../core/TextArea/TextArea"
import type { Facility } from "../../../types/Facility"
import { useNavigate } from "react-router-dom"
import NavLinkButton from "../../core/Navigation/NavLinkButton"
import { useFacilityContext } from "../../../context/useFacilities"
import { isOpeningBeforeClosing, isValidTime } from "../../../utlis/timeUtils"

interface FacilityFormProps {
    initialFacility?: FacilityFormInputs
    isEditMode: boolean
}

type FacilityFormInputs = Facility

const FacilityForm: FC<FacilityFormProps> = ({ initialFacility, isEditMode }) => {
    const {
        register,
        handleSubmit,
        reset,
        setError,
        clearErrors,
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

    useEffect(() => {
        if (initialFacility) {
            reset(initialFacility)
        }
    }, [initialFacility, reset])

    const { addFacility } = useFacilityContext()
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<FacilityFormInputs> = (data: FacilityFormInputs) => {
        if (isOpeningBeforeClosing(data.openingHours, data.closingHours) === false) {
            setError("openingHours", {
                type: "manual",
                message: "Closing time must be after opening time",
            })
            return
        } else {
            clearErrors("openingHours")
        }
        addFacility(data)
        navigate("/")
    }

    return (
        <form className="bg-white shadow-custom py-4 px-6" onSubmit={handleSubmit(onSubmit)}>
            <h4>Facility Information</h4>

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

            <h4>Working Hours</h4>
            <div className="flex gap-4">
                <Input
                    label="Opening Time"
                    className="w-48"
                    {...register("openingHours", {
                        required: "Opening time is required",
                        validate: (value) =>
                            isValidTime(value) || "Time must be in HH:MM format (00:00-23:59)",
                    })}
                    error={errors.openingHours?.message}
                />

                <Input
                    label="Closing Time"
                    className="w-48"
                    {...register("closingHours", {
                        required: "Closing time is required",
                        validate: (value) =>
                            isValidTime(value) || "Time must be in HH:MM format (00:00-23:59)",
                    })}
                    error={errors.closingHours?.message}
                />
            </div>

            <div className="flex justify-end gap-2 mt-4">
                <NavLinkButton label="Cancel" variant="secondary" type="button" to={"/"} />
                <Button
                    label={!isEditMode ? "Create Facility" : "Update Facility"}
                    variant="primary"
                    type="submit"
                />
            </div>
        </form>
    )
}

export default FacilityForm
