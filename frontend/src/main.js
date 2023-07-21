// Import CSS styles from the 'index.css' file.
import './index.css'

// Import required modules from Vue, router, and App.vue.
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

<<<<<<< HEAD
// Import components and utilities from the 'frappe-ui' library.
=======
>>>>>>> origin/develop
import {
  Button,
  Card,
  Input,
  setConfig,
  frappeRequest,
  resourcesPlugin,
} from 'frappe-ui'

// Create a new Vue app instance.
let app = createApp(App)

// Set the resourceFetcher to frappeRequest, a configuration for the frappe-ui library.
setConfig('resourceFetcher', frappeRequest)

// Use the Vue router for navigation.
app.use(router)

// Use the resourcesPlugin from frappe-ui for handling resources.
app.use(resourcesPlugin)

<<<<<<< HEAD
// Register global components to be used throughout the app.
app.component('Button', Button) // Register 'Button' component.
app.component('Card', Card)     // Register 'Card' component.
app.component('Input', Input)   // Register 'Input' component.

// Mount the Vue app to the element with the ID 'app'.
app.mount('#app')
=======
app.component('Button', Button)
app.component('Card', Card)
app.component('Input', Input)
>>>>>>> origin/develop

app.mount('#app')
