import * as API from "@/services/API";

export default {
    paginateShops(page_number,searchData) {          
            if (searchData.shopId != '' && searchData.shopId != 0) {
                const headers = {};
                headers['shopId'] = searchData.shopId;
            
        return API.apiClient.get('/api/shops?page=' + page_number,{ 
            headers: headers
            
        });
    }
        else{ 
            return API.apiClient.get('/api/shops?page=' + page_number);
        }
       
    },

    async insertShop(payload){
        return await API.apiClient.post('/api/shops',payload);
    },

    getOneShop(shop_id){
        return API.apiClient.get('/api/shops/'+shop_id);
    },

    updateShop(payload, shop_id){
        return API.apiClient.put('/api/shops/'+shop_id,payload);
    },
    async getAllShops(){
        return await API.apiClient.get('/api/shopskeepers/all')
        
        
    }
};
