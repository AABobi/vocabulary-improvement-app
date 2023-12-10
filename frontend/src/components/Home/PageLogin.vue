<template>
 <section class="PageLogin">
     <VocForm class="PageLogin__loginBox" label-position="top">
         <VocFormItem label="email / login" >
            <VocInput v-model="formLoginAccessibility.login"></VocInput>
         </VocFormItem>
         <VocFormItem label="password" >
             <VocInput v-model="formLoginAccessibility.password"></VocInput>
         </VocFormItem>
         <VocFormItem>
             <VocButton type="primary" class="PageLogin__loginButton" @click="login">Login</VocButton>
         </VocFormItem>
     </VocForm>
 </section>
</template>

<script lang="ts" setup>
import { VocForm, VocFormItem, VocInput, VocRadioGroup, VocRadio } from "@/core/element-plus/index";
import { reactive, ref} from "vue";
import VocButton from "@/core/element-plus/VocButton.vue";
import axios from "axios";
import { useAuthenticationStore } from "@/store/authentication-store";

const loginName = ref('')
const authStore = useAuthenticationStore();

const login = async() => {
  const login = formLoginAccessibility.login;
  const password = formLoginAccessibility.password;

  await authStore.login(login, password);
}

const testGetLin = async() => {
  await axios.get('http://127.0.0.1:8000/api/link/', {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    }
  })
  .then((response) => {
console.log(response)
  })
}

const token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAyMTQ4MzQ4LCJpYXQiOjE3MDIxMjY3NDgsImp0aSI6ImQ5NTRhMTI0NTk1ODQ1MjE4NDNkMDgyMmQ5ZGViMDRlIiwidXNlcl9pZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIn0.uwHfsCr60tKZWYeOwO6GuuH8Kf-dS3wnZ8MUMlHDtNA'

/* const fetchVocabulary = () => {
  const t = {
  "username": "admin",
  "password": "admin"
}
    axios.post('http://127.0.0.1:8000/api/token/', t)
        .then((response) => {
         console.log(response);
        })
  } */

const formLoginAccessibility = reactive({
    login: '',
    password: '',
})
</script>

<style scoped lang="scss">
.PageLogin {
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 5px  black;

  &__loginBox {
    background: $color-background;
    width: 300px;
    height: 220px;
    padding: 50px;
    border-radius: $sizeS;
  }

  &__loginButton {
    margin-top: $sizeXL;
  }
}
</style>