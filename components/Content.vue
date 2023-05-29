<template>
        <div class="rounded-[32px]  dv w-[85%] py-4  mt-[16px] flex justify-between items-center">
            <div class="flex items-center ml-[32px]">
                <div class="flex items-center justify-center text-white bg-[#01756C] w-[50px] h-[50px] rounded-full">{{ content.id }}</div>
                <p class="text-[18px] ml-[16px]">{{ content.title }}</p>
            </div>
            <div class="mr-[32px] w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center hover:bg-blue-400 hover:text-white"><img src="/frame.png" alt=""></div>
        </div>
</template>

<script setup>
    const props = defineProps(['content'])
</script>

<style  scoped>
.dv{
    background: linear-gradient(to left, #CBFDF4, #D5DBF280);
}
</style>