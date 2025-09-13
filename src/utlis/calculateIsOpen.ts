export const calculateIsOpen = (openingHours: string, closingHours: string): boolean => {
    const now = new Date();

    const [openHour, openMinute] = openingHours.split(':').map(Number);
    const [closeHour, closeMinute] = closingHours.split(':').map(Number);

    const openTime = new Date(now);
    openTime.setHours(openHour, openMinute, 0, 0);

    const closeTime = new Date(now);
    closeTime.setHours(closeHour, closeMinute, 0, 0);

    if (closeTime <= openTime) {
        if (now >= openTime) {
            return true;
        }
        return now <= closeTime;
    }

    return now >= openTime && now <= closeTime;
};
