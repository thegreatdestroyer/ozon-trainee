import { ITEMS } from '../constants/items';
import { TYPES } from '../constants/types';

class ItemsService {
    getItems = async () => {
        await this.sleep(1500);
        return ITEMS;
    }

    getTypes = async () => {
        await this.sleep(1500);
        return TYPES;
    }
    
    sleep = ms => new Promise((resolve) => setTimeout(resolve, ms))
};

    

export default new ItemsService();