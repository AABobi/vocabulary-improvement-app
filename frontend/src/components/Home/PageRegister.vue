<template>
    <section class="'PageRegister">
        <VocForm class="PageRegister__registerBox" label-position="top">
            <VocFormItem label="login" >
                <VocInput v-model="formRegisterAccessibility.username"></VocInput>
            </VocFormItem>
            <VocFormItem label="email" >
                <VocInput v-model="formRegisterAccessibility.email"></VocInput>
            </VocFormItem>
            <VocFormItem label="password" >
                <VocInput v-model="formRegisterAccessibility.password"></VocInput>
            </VocFormItem>
            <VocFormItem label="repeat password" >
                <VocInput v-model="formRegisterAccessibility.repeatedPassword"></VocInput>
            </VocFormItem>
            <VocFormItem label="first name" >
                <VocInput v-model="formRegisterAccessibility.firstName"></VocInput>
            </VocFormItem>
            <VocFormItem label="last name" >
                <VocInput v-model="formRegisterAccessibility.lastName"></VocInput>
            </VocFormItem>
            <VocFormItem>
                <VocButton type="primary" class="PageRegister__registerButton" @click="register()">REGISTER</VocButton>
            </VocFormItem>
        </VocForm>
    </section>
</template>

<script lang="ts" setup>
import { VocForm, VocFormItem, VocInput, VocAlert } from "@/core/element-plus/index";
import { reactive, ref} from "vue";
import VocButton from "@/core/element-plus/VocButton.vue";
import {useVocabularyTestPageStore} from "@/store/vocabulary-test-page-store";
import type { RegisterForm } from '@/domain/register-form';
import {useRouter} from "vue-router";
import { useAuthenticationStore } from "@/store/authentication-store";

const loginName = ref('')
const testStore = useVocabularyTestPageStore();
const authStore = useAuthenticationStore();


const register = async() => {
    await authStore.register(formRegisterAccessibility);
}

const router = useRouter()

const formRegisterAccessibility = reactive<RegisterForm>({
    username: '',
    email: '',
    password: '',
    repeatedPassword: '',
    firstName: '',
    lastName: ''
})
</script>

<style scoped lang="scss">
.PageRegister {
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 5px  black;

  &__registerBox {
    background: $color-background;
    width: 300px;
    height: 350px;
    padding: 50px;
    border-radius: $sizeS;
  }

  &__registerButton {
    margin-top: $sizeXL;
  }
}
</style>