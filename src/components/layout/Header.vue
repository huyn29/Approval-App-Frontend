<template>
    <nav class="h-[140px] w-full bg-[#35805B] flex justify-between">
        <div class="text-white text-[70px] uppercase font-bold px-10 py-3">
            <span>samsung sds</span>
        </div>
        <div class=" m-0 p-0 flex justify-end">
            <div class="px-10 pt-[50px] text-white text-4xl hover:font-bold hover:text-red-400 capitalize">
                Homepage
            </div>
            <div class="px-10 pt-[50px] text-white text-4xl hover:font-bold hover:text-red-400 capitalize">
                request management
            </div>
            <div class="dropdown px-10 pt-[50px] text-white text-4xl hover:font-bold hover:text-red-400 capitalize">
                request setup
                <div class="dropdown-menu hidden absolute bg-white min-w-[160px] shadow-sm rounded-md">
                    <div class="block w-64 px-3 capitalize bg-white text-[#35805B] text-2xl hover:bg-red-400 rounded-md">
                        template list
                    </div>
                    <div class="block w-64 px-3 capitalize bg-white text-[#35805B] text-2xl hover:bg-red-400 rounded-md">
                        Create new template
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div>
                <img src="../../assets/header/Avatar.png" alt="">
            </div>
        </div>
    </nav>
</template>
<script>
export default {

}
</script>
<style>
.dropdown:hover .dropdown-menu {
    display: block;
}
</style>