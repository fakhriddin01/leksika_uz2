<template>
    <div v-for="el in cardView" :key="el.id" :card="el" class="card container mx-auto m-5 shadow flex justify-beetwen p-5 items-center rounded-xl bg-white">
        <div class="w-1/3">
            <img src="/kitob.png" alt="">
        </div>
        <div class="w-1/2 text-gray-500 ml-10">
            <div class="text-[14px]">
                <i :class="el.icon"></i><span class="ml-2">{{el.text}}</span>
                <i :class="el.icon1" class='ml-10'></i><span class="ml-2">{{el.text1}}</span>
            </div>
            <div class="mt-2">
                <h1 class="text-[25px] text-black font-bold">{{el.title}}</h1>
            </div>
            <div>
                <p class="mt-2 text-justify text-black text-[15px]">{{el.text2}}</p>
            </div>
            <div class="mt-2 flex justify-end items-center">
                <nuxt-link :to="`/articles/${el.id}`" class="px-5 p-2 bg-teal-700 rounded-[20px] text-white">Batafsil</nuxt-link>
            </div>
        </div>
    </div>
  </template>
  
  <script setup>
    import { cardView } from '../constants/cardView';
  </script>
  
  <style lang="scss" scoped></style>