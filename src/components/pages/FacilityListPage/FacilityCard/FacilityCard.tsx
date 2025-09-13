import type { FC } from 'react';
import type { Facility } from '../../../../types/Facility';
import IconButton from '../../../core/Button/IconButton';
import IconDelete from '../../../core/Icons/IconDelete';
import IconLocation from '../../../core/Icons/IconLocation';
import IconStar from '../../../core/Icons/IconStar';
import Label from '../../../core/Label/Label';
import mockImage from '/mock.jpg';
import NavLinkButton from '../../../core/Navigation/NavLinkButton';
import { calculateIsOpen } from '../../../../utlis/timeUtils';

type FacilityCardProp = Omit<Facility, 'description'>;

interface CardProps {
    facility: FacilityCardProp;
    onDeleteClick: () => void;
    className?: string;
}

const FacilityCard: FC<CardProps> = ({ facility, onDeleteClick, className = '' }) => {
    const isOpen = calculateIsOpen(facility.openingHours, facility.closingHours);

    return (
        <div
            className={`
                max-w-96
                h-72
                rounded-xl
                px-4
                py-2
                mb-2
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
            <div className="relative w-full aspect-[324/176] rounded-xl overflow-hidden">
                <img src={mockImage} alt="Card image" className="w-full h-full object-cover" />
                {facility.defaultFacility && (
                    <div className="absolute top-2 left-2">
                        <IconStar
                            className="bg-brown bg-opacity-50 rounded-full p-1"
                            color="#FFFFFF"
                        />
                    </div>
                )}
            </div>
            <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                    <h5>{facility.name}</h5>
                    <Label
                        text={isOpen ? 'Open' : 'Closed'}
                        type={isOpen ? 'success' : 'error'}
                        className="ml-2"
                    />
                </div>
                <div className="flex items-center">
                    <div className="flex text-gray-500 items-center truncate max-w-sm">
                        <IconLocation />
                        <p className="truncate">{facility.address}</p>
                    </div>
                    <div className="flex ml-auto gap-1 items-center">
                        <IconButton className="bg-gray-200" onClick={onDeleteClick}>
                            <IconDelete size={16} />
                        </IconButton>
                        <NavLinkButton
                            label="Edit"
                            variant="secondary"
                            to={`/edit/${facility.id}`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacilityCard;
