// src/providers/product.js
import makeProvider from './Provider';
import makeVuexDriver from './drivers/vuex';
import store from '../store';

export default makeProvider(
    makeVuexDriver({ namespace: 'client', store }),
);