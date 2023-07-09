<template>
    <nav class="h-[140px] w-full bg-[#35805B] flex justify-between">
        <div class="text-white text-[70px] uppercase font-bold pl-10 py-3">
            <span>samsung sds</span>
        </div>
        <div class=" m-0 p-0 flex justify-end">
            <div
                class="px-10 pt-[50px] text-white text-4xl hover:font-bold hover:text-red-400 hover:cursor-pointer capitalize">
                Homepage
            </div>
            <div
                class="dropdown px-10 pt-[50px] text-white text-4xl hover:font-bold hover:text-red-400 hover:cursor-pointer capitalize">
                <span class="flex">
                    request management
                    <svg class="w-2.5 h-2.5 ml-2.5 mt-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 4 4 4-4" />
                    </svg>
                </span>
                <div class="dropdown-menu hidden absolute bg-white min-w-[160px] shadow-sm rounded-md">
                    <div class="block w-64 px-3 capitalize bg-white text-[#35805B] text-xl hover:bg-red-400 rounded-md">
                        request list
                    </div>
                    <div class="block w-64 px-3 capitalize bg-white text-[#35805B] text-xl hover:bg-red-400 rounded-md">
                        Create request
                    </div>
                </div>
            </div>
            <div
                class="dropdown px-10 pt-[50px] text-white text-4xl hover:font-bold hover:text-red-400 hover:cursor-pointer capitalize">
                <span class="flex">
                    request setup
                    <svg class="w-2.5 h-2.5 ml-2.5 mt-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 4 4 4-4" />
                    </svg>
                </span>
                <div class="dropdown-menu hidden absolute bg-white min-w-[160px] shadow-sm rounded-md">
                    <div class="block w-64 px-3 capitalize bg-white text-[#35805B] text-xl hover:bg-red-400 rounded-md">
                        template list
                    </div>
                    <div class="block w-64 px-3 capitalize bg-white text-[#35805B] text-xl hover:bg-red-400 rounded-md">
                        Create template
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="py-10 px-10 hover:cursor-pointer">
                <img src="../../assets/header/Avatar.png" alt="avatar" class="relative" @click="toggleActive">
                <div
                    :class="['hidden absolute right-16 w-24 bg-white min-w-[160px] shadow-sm rounded-md', { 'block': isActive }]">

                    <div class="px-3 pt-2 bg-white text-[#35805B] text-base rounded-md">
                        username
                    </div>
                    <div class="px-3 pb-2 bg-white text-[#35805B] text-xs">
                        username@samsung.com
                    </div>
                    <hr>
                    <div
                        class="px-3 py-2 leading-[24px] capitalize bg-white text-[#35805B] text-base hover:bg-red-400 rounded-md">
                        setting
                    </div>
                    <div
                        class="px-3 py-2 leading-[24px] capitalize bg-white text-[#35805B] text-base hover:bg-red-400  rounded-md">
                        Logout
                    </div>
                </div>
            </div>

        </div>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            isActive: false
        };
    },
    methods: {
        toggleActive() {
            this.isActive = !this.isActive;
        }
    }
}
</script>
<style>
.dropdown:hover .dropdown-menu {
    display: block;
}

.hidden {
    display: none;
}

.block {
    display: block;
}
</style>