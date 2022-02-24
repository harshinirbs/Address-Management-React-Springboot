import axios from 'axios';

//const USER_BASE_REST_API_URL = 'http://localhost:8080/myportal/users';
const ADDRESS_BASE_REST_API_URL = 'http://localhost:8080/myportal/users'

class UserService {

    createUser(user) {
         return axios.post(ADDRESS_BASE_REST_API_URL, user);
     }


    // getAllUsers() {
    //     return axios.get(USER_BASE_REST_API_URL);
    // }

    

    // getUserById(userId) {
    //     return axios.get(USER_BASE_REST_API_URL+ '/' +userId);
    // }

    // updateUser(userId, id){
    //     return axios.put(USER_BASE_REST_API_URL + '/' +userId, id);
    // }

    // deleteUser(userId){
    //     return axios.delete(USER_BASE_REST_API_URL + '/' + userId);
    // }
}


export default new UserService();