import { createApp } from 'vue'
import './assets/index.css'
import appHeading from './components/ui/appHeading.vue'
import App from './App.vue'

const app = createApp(App)
app.component("heading", appHeading);
app.mount('#app')
