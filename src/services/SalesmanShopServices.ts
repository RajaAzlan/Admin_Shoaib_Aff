import * as API from '@/services/API';

export default {
  getOneDaySalesmanShop(salesman_id, day) {
    const payload = {
      'salesman-id': salesman_id,
    };
    return API.apiClient.get('/api/salesman/daily/shops/' + day, {
      headers: {
        'salesman-id': salesman_id,
      },
    });
  },
  updateSalesmanShops(payload, salesman_id) {
    return API.apiClient.put('/api/salesmanshops/' + salesman_id, payload);
  },

  addSalesmanShops(payload, salesman_id) {
    return API.apiClient.post('/api/salesmanshops', payload);
  },
  getSalesmanShops(salesman_id) {
    return API.apiClient.get('/api/salesmanshops', {
      headers: {
        'salesman-id': salesman_id,
      },
    });
  },
  getDailyPdfContent(salesman_id, day) {
    return API.apiClient.get('/api/salesman/daily/pdf', {
      headers: {
        'salesman-id': salesman_id,
        day: day,
      },
    });
  },
  getAllPdfContent(salesman_id) {
    return API.apiClient.get('/api/salesman/all/pdf', {
      headers: {
        'salesman-id': salesman_id,
      },
    });
  },
};
