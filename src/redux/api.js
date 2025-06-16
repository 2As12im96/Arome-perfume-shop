export const Url = 'https://arome-perfume-shop.vercel.app/api';

export const setHeaders = () => {
    let authToken = localStorage.getItem('token'); 
    if (!authToken) {
        authToken = localStorage.getItem('adminToken');
    }
    if (authToken) {
        return {
            headers: {
                'x-auth-token': authToken,
            },
        };
    }
    return {};
};
