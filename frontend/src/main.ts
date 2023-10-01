import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'element-plus/dist/index.css'
import '@/core/css/import.scss'
import { routes} from './route/router'
import { createRouter, createWebHistory } from 'vue-router'
import {useAuthenticationStore} from "@/core/store/authentication-store";

function main() {
  const router = createRouter({
    history: createWebHistory(),
    routes: routes
  })
  const app = createApp(App)
  app.use(createPinia()).use(router)
  const store = useAuthenticationStore();
  console.log(store.auth)
  if(!store.auth) {
    router.push('/login')
  }

  app.mount('#app')
}

main()
