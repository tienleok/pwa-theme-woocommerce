import axios from 'axios';
import Oauth from 'oauth-1.0a';
import CryptoJS from 'crypto-js';
import jQuery from 'jquery';

const baseURL = process.env.REACT_APP_PUBLIC_WORDPRESS_SITE_URL;

function getOauth() {
  return Oauth({
    consumer: {
      key: process.env.REACT_APP_WC_CONSUMER_KEY,
      secret: process.env.REACT_APP_WC_CONSUMER_SECRET,
    },
    signature_method: 'HMAC-SHA1',
    hash_function(baseString, key) {
      return CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(baseString, key));
    },
  });
}

function makeRequest(endpoint, method = 'GET') {
  const oauth = getOauth();

  const requestData = {
    url: baseURL + endpoint,
    method,
  };

  const requestHTTP =
      requestData.url + '?' + jQuery.param(oauth.authorize(requestData));

  return axios.get(requestHTTP);
}

const Woocommerce = {
  getProducts: () => makeRequest('/wp-json/wc/v3/products'),
  getProductByID: id => makeRequest('/wp-json/wc/v3/products/' + id),
};

export default Woocommerce;
