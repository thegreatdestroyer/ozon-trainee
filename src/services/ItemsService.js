import { TYPES } from '../constants/types';

class ItemsService {

    getItems = async () => {
        await this.sleep(1500);
        const items = localStorage.getItem('storedTable');
        if (items) {
            return JSON.parse(items);
        }
        return [];
    }

    getTypes = async () => {
        await this.sleep(1500);
        return TYPES;
    }
    
    sleep = ms => new Promise((resolve) => setTimeout(resolve, ms))
};

    
export const ITEMS_DATA_STORAGE_KEY = 'storageTable';
export default new ItemsService();