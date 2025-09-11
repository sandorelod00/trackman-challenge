import type { FC } from "react";
import type { Facility } from "../../../../types/Facility";
import Button from "../../../core/Button/Button";
import IconButton from "../../../core/Button/IconButton";
import IconDelete from "../../../core/Icons/IconDelete";
import IconLocation from "../../../core/Icons/IconLocation";
import IconStar from "../../../core/Icons/IconStar";
import Label from "../../../core/Label/Label";
import mockImage from '/mock.jpg';


type FacilityCardProp = Omit<Facility, 'description' | 'id'>;

interface CardProps {
    facility: FacilityCardProp;
    onDeleteClick: () => void;
    className?: string;
}

const FacilityCard: FC<CardProps> = ({ facility, onDeleteClick, className = '' }) => {
    return (
        <div
            className={`
                w-[381px]
                min-w-[348px]
                h-[272.727px]
                rounded-[16px]
                px-4
                py-2
                flex
                flex-col
                gap-1
                bg-white
                hover:shadow-lg
                transition-shadow
                duration-200
                ${className}
            `}
        >
            <div className="relative w-full h-[160px] rounded-[12px] overflow-hidden">
                <img src={mockImage} alt="Card image" className="w-full h-full object-cover" />
                <div className="absolute top-[8px] left-[8px]">
                    <IconStar className="bg-yellow-300 opacity-80 rounded-full" />
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                    <h5>{facility.name}</h5>
                    <Label
                        text={facility.isOpen ? 'Open' : 'Closed'}
                        type={facility.isOpen ? 'success' : 'error'}
                        className="ml-2"
                    />
                </div>
                <div className="flex items-center">
                    <div className="flex text-gray-500 items-center gap-1">
                        <IconLocation />
                        {facility.address}
                    </div>
                    <div className="flex ml-auto gap-2 items-center">
                        <IconButton className="bg-gray-200" onClick={onDeleteClick}>
                            <IconDelete />
                        </IconButton>
                        <Button
                            label="Edit"
                            variant="secondary"
                            onClick={() => alert('Button Clicked!')}
                            className="h-[32px"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacilityCard;
