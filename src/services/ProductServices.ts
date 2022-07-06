import * as API from '@/services/API';

export default {
  CompanyProducts(company_id) {
    if (company_id != '') {
      return API.apiClient.get('/api/products', {
        headers: {
          'company-id': company_id,
        },
      });
    }
    return false;
  },
  async insertProduct(payload) {
    return await API.apiClient.post('/api/products', payload);
  },
  getOneProduct(product_id) {
    return API.apiClient.get('/api/products/' + product_id);
  },
  updateProduct(payload, product_id) {
    return API.apiClient.put('/api/products/' + product_id, payload);
  },
  async getAllProducts() {
    return await API.apiClient.get('/api/product/all');
  },
};
