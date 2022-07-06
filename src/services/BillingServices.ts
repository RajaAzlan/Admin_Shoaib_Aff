import * as API from '@/services/API';

export default {
    paginateBillings(page_number, startDate, endDate) {
        if (startDate != '' && endDate != '') {
            return API.apiClient.get('/api/billing?page=' + page_number, {
                headers: {
                    'start-date': startDate,
                    'end-date': endDate
                }
            });
        } else {
            return API.apiClient.get('/api/billing?page=' + page_number);
        }
    },

    getOneBillDetail(billing_id) {
        return API.apiClient.get('/api/billing/' + billing_id);
    },

    addBilling(payload) {
        console.log(payload);
        return API.apiClient.post('/api/billing', payload);
    },

    addCredit(payload) {
        return API.apiClient.post('/api/billing/credit', payload);
    },

    getMainPdfContent(salesman_id, billing_id) {
        return API.apiClient.get('/api/billing/all/pdf', {
            headers: {
                'salesman-id': salesman_id,
                'billing-id': billing_id
            }
        });
    },

    getDetailShopPdfContent(billing_id, shop_id) {
        return API.apiClient.get('/api/billing/detail/shop/pdf', {
            headers: {
                'shop-id': shop_id,
                'billing-id': billing_id
            }
        });
    },
    getDetailAllPdfContent(billing_id) {
        return API.apiClient.get('/api/billing/detail/all/pdf', {
            headers: {
                'billing-id': billing_id
            }
        });
    }
};
