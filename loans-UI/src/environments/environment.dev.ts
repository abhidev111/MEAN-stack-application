export const environment ={
    production : false,
    BASE_URL:'http://localhost:3000',
    CUSTOMER_BASE_URL:'http://localhost:3000/customers/',
    USER_BASE_URL:'http://localhost:3000/users/',
    CUSTOMER:{
        GET_ALL_CUSTOMERS : 'list/',
        GET_CUSTOMER : 'view/',
        UPDATE_CUSTOMER : 'update/',
        DELETE_CUSTOMER : 'delete/',
        SEARCH_CUSTOMER : 'find/',
        ADD_CUSTOMER :'add/'
    },
    USER:{
        REGISTER:'register/',
        AUTH : 'authenticate/',
        USER_DETAIL: 'userProfile/'
    }

};