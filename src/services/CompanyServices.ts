import * as API from '@/services/API';

export default {
  paginateCompanies() {
    return API.apiClient.get('/api/companies');
  },
  async insertCompany(payload) {
    return await API.apiClient.post('/api/companies', payload);
  },
  getOneCompany(company_id) {
    return API.apiClient.get('/api/companies/' + company_id);
  },
  updateCompany(payload, company_id) {
    return API.apiClient.put('/api/companies/' + company_id, payload);
  },
  paginateProducts(company_id, page_number, searchData) {
    const headers = {};
    searchData != '' ? (headers['id'] = searchData) : headers[''];
    return API.apiClient.get(
      '/api/company/products/' + company_id + '?page=' + page_number,
      {
        headers: headers,
      },
    );
  },
  searchProducts(company_id) {
    return API.apiClient.get('/api/products/search/' + company_id);
  },
  getOneCompanyProductsPdf(company_id) {
    return API.apiClient.get('/api/company/products/pdf/' + company_id);
  },
};
