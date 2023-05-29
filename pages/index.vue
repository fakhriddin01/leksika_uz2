<template>
    <div class="container mx-auto pt-[80px] flex flex-col justify-center items-center">
        <div class="flex bg-white w-[847px] h-[74px] mx-auto rounded-full items-center justify-start p-1 gap-2">
            <button class="bg-[#01756C] text-[18px] text-white h-full px-10 rounded-full flex justify-center items-center gap-1">ENG <Icon name="ic:baseline-compare-arrows" color="white" class="text-[16px]"/> UZB</button>
            <Icon name="ic:outline-search"  class="text-[30px] text-gray-400 ml-4"/>
            <input v-model="input" @keyup.enter="searchWords()" type="text" placeholder="Search words here" class=" outline-none w-full">
        </div>
        <div >
        <img v-if="input == ''"  src="/home.png" class="w-[606px] mt-14" alt="">
        <div v-else>
            <div v-if="translation.length !== 0" class="bg-white w-[847px] h-[74px] mx-auto rounded-full">
                {{ translation.data[0].word}}
            </div>
            <div v-if="translation.length === 0" class="flex">
                <img src="/sheksper1.png" class="w-[250px] mt-14" alt="">
                <img src="/noWord.png" class="w-[300px] h-[100px] mt-14" alt="">
            </div>
        
        </div>
    </div>
    </div>
</template>

<script setup>
    let input = ref('');
    let translation = ref([])
    async function searchWords() {
        translation.value = await useFetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`)
        console.log(translation.value);
    }
                    
</script>

<style scoped>

</style>