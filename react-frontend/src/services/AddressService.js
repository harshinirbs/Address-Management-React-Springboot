import axios from 'axios';

const USER_BASE_REST_API_URL = 'http://localhost:8080/myportal/address';

class AddressService {
    getAllAddress() {
        return axios.get(USER_BASE_REST_API_URL);
    }

    createAddress(addr) {
        return axios.post(USER_BASE_REST_API_URL, addr);
    }

    getAddressById(adrId) {
        return axios.get(USER_BASE_REST_API_URL+ '/' +adrId);
    }

    updateAddress(adrId, addr){
        return axios.put(USER_BASE_REST_API_URL + '/' +adrId, addr);
    }

    deleteAddress(adrId){
        return axios.delete(USER_BASE_REST_API_URL + '/' + adrId);
    }
}

export default new AddressService();