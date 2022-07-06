import * as API from '@/services/API';

export default {
    getDailyCheck(searchDate) {
        return API.apiClient.get('/api/balancesheet', {
            headers: {
                'created-at': searchDate
            }
        });
    },

    getPrevBalance(shop_id, salesman_id) {
        return API.apiClient.get('/api/balancesheet/shop/balance', {
            headers: {
                'shop-id': shop_id,
                'salesman-id': salesman_id
            }
        });
    },
    getshopsData(page_number, searchData) {
        if (searchData.shopId != '') {
            const headers = {};
            if (searchData.shopId != '' && searchData.shopId != 0) {
                headers['shopId'] = searchData.shopId;
            }

            return API.apiClient.get('/api/balancesheets/shops?page=' + page_number, {
                headers: headers
            });
        } else {
            return API.apiClient.get('/api/balancesheets/shops?page=' + page_number);
        }
    },
    getshopsPdfData(shop_id, salesman_id, start_date, end_date) {
        const headers = {};

        headers['shopId'] = shop_id;
        headers['salesmanId'] = salesman_id;
        headers['startDate'] = start_date;
        headers['endDate'] = end_date;

        return API.apiClient.get('/api/balancesheets/shops/pdf', {
            headers: headers
        });
    },
    getsalesmanData(page_number, searchData) {
        if (searchData.salesmanId != '') {
            const headers = {};
            if (searchData.salesmanId != '' && searchData.salesmanId != 0) {
                headers['salesmanId'] = searchData.salesmanId;
            }

            return API.apiClient.get('/api/balancesheets/salesman?page=' + page_number, {
                headers: headers
            });
        } else {
            return API.apiClient.get('/api/balancesheets/salesman?page=' + page_number);
        }
    }
};
