import { TYPES } from '../constants/types';

export const ITEMS_DATA_STORAGE_KEY = 'storageTable';

class ItemsService {

    getItems = async () => {
        await this.sleep(1500);
        const items = localStorage.getItem(ITEMS_DATA_STORAGE_KEY);
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

export default new ItemsService();