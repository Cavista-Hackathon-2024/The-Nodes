interface LocationForUser {
    name: string;
    coordinates: number[];
}

const nigerianLocations: LocationForUser[] = [
    { name: 'Lagos', coordinates: [6.5244, 3.3792] },
    { name: 'Abuja', coordinates: [9.0579, 7.4951] },
    { name: 'Kano', coordinates: [12.0022, 8.5916] },
    { name: 'Ibadan', coordinates: [7.3775, 3.9470] },
    { name: 'Kaduna', coordinates: [10.5180, 7.4313] },
    { name: 'Port Harcourt', coordinates: [4.8156, 7.0498] },
    { name: 'Benin City', coordinates: [6.3350, 5.6037] },
    { name: 'Maiduguri', coordinates: [11.8469, 13.1570] },
    { name: 'Zaria', coordinates: [11.0797, 7.7101] },
    { name: 'Aba', coordinates: [5.1130, 7.3667] },
    { name: 'Jos', coordinates: [9.9285, 8.8921] },
    { name: 'Ilorin', coordinates: [8.4966, 4.5427] },
    { name: 'Oyo', coordinates: [7.8500, 3.9333] },
    { name: 'Enugu', coordinates: [6.4472, 7.5079] },
    { name: 'Abeokuta', coordinates: [7.1561, 3.3456] },
    { name: 'Onitsha', coordinates: [6.1667, 6.7833] },
    { name: 'Warri', coordinates: [5.5167, 5.7500] },
    { name: 'Sokoto', coordinates: [13.0515, 5.2314] },
    { name: 'Osogbo', coordinates: [7.7669, 4.5607] },
    { name: 'Mubi', coordinates: [10.2670, 13.2670] },
    { name: 'Gombe', coordinates: [10.2833, 11.1667] },
    { name: 'Ondo City', coordinates: [7.1000, 5.1167] },
    { name: 'Damaturu', coordinates: [11.7480, 11.9660] },
    { name: 'Ikare', coordinates: [7.5167, 5.7500] },
    { name: 'Iwo', coordinates: [7.6333, 4.1833] },
    { name: 'Offa', coordinates: [8.1500, 4.7167] },
    { name: 'Okene', coordinates: [7.5500, 6.2333] },
    { name: 'Akure', coordinates: [7.2500, 5.1950] },
    { name: 'Umuahia', coordinates: [5.5230, 7.4947] },
    { name: 'Ondo', coordinates: [7.0931, 4.8353] },
    { name: 'Damboa', coordinates: [11.1519, 12.7553] },
];

export const generateRandomCoordinatesWithLocation = (locationName: string): number[] => {
    const matchedLocation = nigerianLocations.find(location => locationName.toLowerCase().includes(location.name.toLowerCase()));
    
    if (matchedLocation) {
        return matchedLocation.coordinates;
    } else {
        const randomIndex = Math.floor(Math.random() * nigerianLocations.length);
        return nigerianLocations[randomIndex].coordinates;
    }
};

