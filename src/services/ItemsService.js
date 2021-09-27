import { ITEMS } from '../constants/items';

class ItemsService {
    getItems = async () => {
        await this.sleep(1500);
        return ITEMS;
    }
    
    sleep = ms => new Promise((resolve) => setTimeout(resolve, ms))
};

export default new ItemsService();