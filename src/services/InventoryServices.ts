import * as API from '@/services/API';

export default {
  paginateDailyInventories(page_number, searchData) {
    if (searchData.companyId != '' || searchData.productName != '') {
      const headers = {};
      if (searchData.companyId != '' && searchData.companyId != 0) {
        headers['companyId'] = searchData.companyId;
      }
      if (searchData.productName != '') {
        headers['productName'] = searchData.productName;
      }

      return API.apiClient.get('/api/inventory?page=' + page_number, {
        headers: headers,
      });
    } else {
      return API.apiClient.get('/api/inventory?page=' + page_number);
    }
  },

  addInventories(payload) {
    return API.apiClient.post('/api/inventory', payload);
  },
};
