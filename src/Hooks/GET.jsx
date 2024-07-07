import axios from 'axios';

export const Get = async (API) => {
    try {
        const response = await axios.get(API);
        return response.data;
    } catch (error) {
        console.error('Error fetching menu data:', error);
        return [];
    }
};

