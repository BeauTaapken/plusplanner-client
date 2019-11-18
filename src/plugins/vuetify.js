import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    themes: {
        dark: {
            primary: '#23272A',
            secondary: '#2C2F33',
            accent: '#8c9eff',
            error: '#b71c1c',
        },
    },
});
