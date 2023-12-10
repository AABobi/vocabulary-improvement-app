import type { RegisterForm } from '@/domain/register-form';
import axios from 'axios';
import { defineStore } from 'pinia'
import {ref} from "vue";
import { useRouter } from 'vue-router'

export const useAuthenticationStore = defineStore('authentication', () => {
    const auth = ref(false);
    const router = useRouter()
    
    const login = async(login: string, password: string) => {
    /*    const usetLoginData = {
        "username": login,
        "password": password
      } */

      //just for test
      const usetLoginData = {
        "username": 'admin',
        "password": 'admin'
      }
     const resposne = await axios.post('http://127.0.0.1:8000/api/token/', usetLoginData);

     if(!resposne.data.access) {
        throw new Error('No access token');
     }

     localStorage.setItem("token", resposne.data.access);
     router.push('/')
     } 

     const register = async(userData: RegisterForm) => {
    
        const token = localStorage.getItem('token');
        console.log(userData)
          const response = await axios.post('http://127.0.0.1:8000/api/user/register',  {
            username: userData.username,
            email: userData.email,
            password: userData.password,
            password2: userData.repeatedPassword,
            first_name: userData.firstName,
            last_name: userData.lastName,
            fav_language_slug: userData.fav_language_slug,
            about: userData.about
          })

          if(response.statusText !== "Created") {
            throw new Error('Not created')
          }
          

        console.log(response);  
     }
    
    return {
        auth,
        login,
        register
    }
})
