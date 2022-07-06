import * as API from "@/services/API";

export default {
    paginateSalesman() {
        return API.apiClient.get('/api/salesman');
    },
    async insertSalesman(payload){
        return await API.apiClient.post('/api/salesman',payload);
    },
    getOneSalesman(salesman_id){
        return API.apiClient.get('/api/salesman/'+salesman_id);
    },
    updateSalesman(payload, salesman_id){
        return API.apiClient.post('/api/salesman/'+salesman_id,payload);
    },
    
};
