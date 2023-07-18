<template>
    <div class="flex flex-wrap justify-evenly">
        <div class="w-1/3">
            <div id="title" class=" pt-5 text-[100px] font-bold pl-8">
                Sign in
                <div id="title" class="pt-5 text-base">
                    Don't you have an account?
                    <span class="text-[#35805B] cursor-pointer">
                        Sign in now
                    </span>
                </div>
            </div>

            <form class="px-[30px] py-[40px] mt-20" @submit.prevent="onSubmit">
                <div class="mb-[10px] pb-[20px] relative  my-5">
                    <label for="username" class="inline-block mb-[5px] text-[#35805B] text-xl font-bold">
                        Username <span class="text-red-700">*</span>
                    </label>
                    <input type="text" placeholder="username" v-model="username" id="username"
                        class="border-[2px] border-solid rounded-[10px] block p-[10px] w-full leading-10 relative pr-10 focus:outline-[#35805B]">
                    <i v-if="isShow" class="absolute right-0 top-[50px] px-3">
                        <fa v-if="!errors.username" icon="check-circle" class="done"></fa>
                        <fa v-if="errors.username" icon="exclamation-circle" class="error"></fa>
                    </i>
                    <small class="text-red-700">{{ errors.username }}</small>
                </div>

                <div class="mb-[10px] pb-[20px] relative  my-5">
                    <label for="password" class="inline-block mb-[5px] text-[#35805B] text-xl font-bold">
                        Password <span class="text-red-700">*</span>
                    </label>
                    <input type="password" placeholder="Password" v-model="password" id="password"
                        class="border-[2px] border-solid rounded-[10px] block p-[10px] w-full leading-10 relative pr-10 focus:outline-[#35805B]">
                    <i v-if="isShow" class="absolute right-0 top-[50px] px-3">
                        <fa v-if="!errors.password" icon="check-circle" class="done"></fa>
                        <fa v-if="errors.password" icon="exclamation-circle" class="error"></fa>
                    </i>
                    <small class="text-red-700">{{ errors.password }}</small>
                </div>
                <div class="flex justify-between my-5">
                    <div>
                        <input type="checkbox" id="checkbox" :checked="checkbox">
                        <label for="checkbox" class="font-bold text-[#35805B]"> Remember me</label>
                    </div>
                    <p class="text-[#35805B] font-bold cursor-pointer">Forgot password</p>
                </div>
                <button
                    class="w-full bg-[#35805B] text-white text-xl font-bold px-16 py-3 rounded-md shadow-2xl hover:bg-[#186840] uppercase my-5">
                    Login
                </button>

            </form>
        </div>
        <div>
            <img src="../../assets/login/WELCOME TO S 1.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isShow: false,
            username: '',
            password: '',
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
            const passwordValue = this.password.trim();
            if (!usernameValue) {
                this.errors.username = 'Username is required!';
            } else {
                delete this.errors.username;
            }
            if (!passwordValue) {
                this.errors.password = 'Password is required!';
            } else {
                delete this.errors.password;
            }
            if (!Object.keys(this.errors).length) {
                this.$router.push('/')
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