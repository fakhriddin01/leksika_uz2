<template>
    <main>
        <div class="container mx-auto flex justify-center text-center">
            <div class=" border mt-[30px] w-[90%] bg-white flex flex-col justify-center items-center rounded-[18px] py-6">
                <h1 class="mt-[10px] text-[24px] font-bold h-[56px]">TABLE OF CONTENTS</h1>
                <Content v-for="content in contents" :content="content"/>
            </div>
        </div>
    </main>
</template>

<script setup>
    const contents = [
        {
            id: 1,
            title: "Intruduction"
        },
        {
            id: 2,
            title: "Present Simple"
        },
        {
            id: 3,
            title: "Present Continious"
        },
        {
            id: 4,
            title: "Past Simple"
        },
        {
            id: 5,
            title: "Infinite, Gerund"
        },
    ]
</script>

<style lang="css" scoped>


</style>