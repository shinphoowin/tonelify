import { createApp } from 'vue'
import {router} from "./routes"
import App from './App.vue'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//mdi font
import '@mdi/font/css/materialdesignicons.css' 
import './assets/main.css'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi', // This is already the default value - only for display purposes
    },
});

createApp(App).use(vuetify).use(router).mount('#app')

