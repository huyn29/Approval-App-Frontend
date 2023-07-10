<template>
    <div class="flex justify-center">
        <div class="w-1/3">
            <div id="title">
                <h2>Create Account</h2>
            </div>
            <form class="px-[30px] py-[40px]" @submit.prevent="onSubmit">
                <div class="mb-[10px] pb-[20px] relative">
                    <label for="username" class="inline-block mb-[5px] text-[#35805B] text-xl font-bold">
                        Username <span class="text-red-700">*</span>
                    </label>
                    <input type="text" placeholder="username" v-model="username" id="username"
                        class="border-[2px] border-solid rounded-[10px] block p-[10px] w-full leading-8 relative pr-10 focus:outline-[#35805B]">
                    <i v-if="isShow" class="absolute right-0 top-[45px] px-3">
                        <fa v-if="!errors.username" icon="check-circle" class="done"></fa>
                        <fa v-if="errors.username" icon="exclamation-circle" class="error"></fa>
                    </i>
                    <small class="text-red-700">{{ errors.username }}</small>
                </div>
                <div class="mb-[10px] pb-[20px] relative">
                    <label for="email" class="inline-block mb-[5px] text-[#35805B] text-xl font-bold">
                        Email <span class="text-red-700">*</span>
                    </label>
                    <input type="email" placeholder="example@gmail.com" v-model="email" id="email"
                        class="border-[2px] border-solid rounded-[10px] block p-[10px] w-full leading-8 relative pr-10 focus:outline-[#35805B]">
                    <i v-if="isShow" class="absolute right-0 top-[45px] px-3">
                        <fa v-if="!errors.email" icon="check-circle" class="done"></fa>
                        <fa v-if="errors.email" icon="exclamation-circle" class="error"></fa>
                    </i>
                    <small class="text-red-700">{{ errors.email }}</small>
                </div>
                <div class="mb-[10px] pb-[20px] relative">
                    <label for="password" class="inline-block mb-[5px] text-[#35805B] text-xl font-bold">
                        Password <span class="text-red-700">*</span>
                    </label>
                    <input type="password" placeholder="Password" v-model="password" id="password"
                        class="border-[2px] border-solid rounded-[10px] block p-[10px] w-full leading-8 relative pr-10 focus:outline-[#35805B]">
                    <i v-if="isShow" class="absolute right-0 top-[45px] px-3">
                        <fa v-if="!errors.password" icon="check-circle" class="done"></fa>
                        <fa v-if="errors.password" icon="exclamation-circle" class="error"></fa>
                    </i>
                    <small class="text-red-700">{{ errors.password }}</small>
                </div>
                <div class="mb-[10px] pb-[20px] relative">
                    <label for="rePassword" class="inline-block mb-[5px] text-[#35805B] text-xl font-bold">
                        Password check <span class="text-red-700">*</span>
                    </label>
                    <input type="password" placeholder="password check" v-model="rePassword" id="rePassword"
                        class="border-[2px] border-solid rounded-[10px] block p-[10px] w-full leading-8 relative pr-10 focus:outline-[#35805B]">
                    <i v-if="isShow" class="absolute right-0 top-[45px] px-3">
                        <fa v-if="!errors.rePassword" icon="check-circle" class="done"></fa>
                        <fa v-if="errors.rePassword" icon="exclamation-circle" class="error"></fa>
                    </i>
                    <small class="text-red-700">{{ errors.rePassword }}</small>
                </div>
                <button
                    class="bg-[#35805B] text-white text-xl font-bold px-16 py-3 rounded-md shadow-2xl hover:bg-[#186840]">Submit</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isShow: false,
            username: '',
            email: '',
            password: '',
            rePassword: '',
            errors: {}
        }
    },
    methods: {
        onSubmit() {
            this.checkInput();
        },
        checkInput() {
            this.isShow = true
            const usernameValue = this.username.trim();
            const emailValue = this.email.trim();
            const passwordValue = this.password.trim();
            const rePasswordValue = this.rePassword.trim();
            console.log(usernameValue);
            if (!usernameValue) {
                this.errors.username = 'Username is required!';
            } else {
                delete this.errors.username;
            }
            if (emailValue) {
                const regexEmail = /^[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+$/gm;
                const isValid = regexEmail.test(emailValue);
                if (!isValid) {
                    this.errors.email = 'Wrong email Format!';
                } else {
                    delete this.errors.email;
                }
            } else {
                this.errors.email = 'Email is required!';
            }
            if (!passwordValue) {
                this.errors.password = 'Password is required!';
            } else {
                delete this.errors.password;
            }

            if (rePasswordValue) {
                if (rePasswordValue !== this.password) {
                    this.errors.rePassword = 'Password incorrect!';
                } else {
                    delete this.errors.rePassword;
                }
            } else {
                this.errors.rePassword = 'Password is required!';
            }
        }
    }
}
</script>
<style >
.done {
    color: green;
}

.error {
    color: red;
}
</style>