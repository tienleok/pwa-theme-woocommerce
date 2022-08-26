import 'whatwg-fetch';
import Woocommerce from '../../helper/Woocommerce';
// import config from '../../config/config';


// const WooCommerceRestApi = require('@woocommerce/woocommerce-rest-api').default;

export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';

export const requestProducts = () => ({
  type: REQUEST_PRODUCTS,
});

export const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products,
});

// export const fetchProducts = (params = {}) => (dispatch) => {
//   dispatch(requestProducts());

//   let url;
//   if (params && params.id) {
//     url = config.API_PRODUCT_URL + String(params.id);
//   } else {
//     url =
//       config.API_PRODUCTS_URL +
//       '?' +
//       Object.keys(params)
//         .map(k => k + '=' + encodeURIComponent(params[k]))
//         .join('&');
//   }

// export const fetchProducts = (params = {}) => (dispatch) => {
//   dispatch(requestProducts());

//   let url;
//   if (params && params.id) {
//     url = config.API_PRODUCT_URL + String(params.id);
//   } else {
//     url =
//       config.API_PRODUCTS_URL +
//       '?' +
//       Object.keys(params)
//         .map(k => k + '=' + encodeURIComponent(params[k]))
//         .join('&');
//   }

//   return fetch(url)
//     .then(response => response.json())
//     .then(json => dispatch(receiveProducts(json)))
//     .catch(() => {
//       dispatch(receiveProducts([]));
//     });
// };

// eslint-disable-next-line arrow-parens
export const fetchProducts = () => async dispatch => {
  dispatch(requestProducts());
  const res = Woocommerce.getProducts();
  return res;
};
