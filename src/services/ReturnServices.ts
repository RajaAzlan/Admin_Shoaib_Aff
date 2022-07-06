import * as API from "@/services/API";

export default {
    
    addReturn(payload){
        return API.apiClient.post('/api/return',payload);
    },

    paginateReturns(page_number, startDate, endDate) {
        if(startDate!="" && endDate!=""){
            return API.apiClient.get('/api/return?page='+page_number,
            {
                headers: {
                    'start-date': startDate,
                    'end-date' : endDate
                }
            });
        }
        else{
            return API.apiClient.get('/api/return?page='+page_number);
        }
    },

    pdfData(startDate, endDate) {
            return API.apiClient.get('/api/return/pdf/data',
            {
                headers: {
                    'start-date': startDate,
                    'end-date' : endDate
                }
            });
    },
    getOneReturnDetail(return_id){
        return API.apiClient.get('/api/return/'+return_id);
    },
};
