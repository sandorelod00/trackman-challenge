import type { FC } from 'react';
import Button from '../Button/Button';
import IconButton from '../Button/IconButton';
import IconDelete from '../Icons/IconDelete';
import IconLocation from '../Icons/IconLocation';
import IconStar from '../Icons/IconStar';
import Label from '../Label/Label';
import mockImage from '../../../../public/mock.jpg';

type Facility = {
    name: string;
    address: string;
    isOpen: boolean;
    description: string;
    imageUrl: string;
    defaultFacility: boolean;
    openingHours: string;
    closingHours: string;
};

interface CardProps {
    className?: string;
}

const FacilityCard: FC<CardProps> = ({ className = '' }) => {
    const testFacility: Facility = {
        name: 'Test Facility',
        address: '123 Test St, Test City',
        isOpen: false,
        description: 'This is a test facility used for demonstration purposes.',
        imageUrl: mockImage,
        defaultFacility: true,
        openingHours: '08:00',
        closingHours: '20:00',
    };

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
                    <h5>{testFacility.name}</h5>
                    <Label
                        text={testFacility.isOpen ? 'Open' : 'Closed'}
                        type={testFacility.isOpen ? 'success' : 'error'}
                        className="ml-2"
                    />
                </div>
                <div className="flex items-center">
                    <div className="flex text-gray-500 items-center gap-1">
                        <IconLocation />
                        {testFacility.address}
                    </div>
                    <div className="flex ml-auto gap-2 items-center">
                        <IconButton
                            className="bg-gray-200"
                            onClick={() => alert('Icon Button Clicked!')}
                        >
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
