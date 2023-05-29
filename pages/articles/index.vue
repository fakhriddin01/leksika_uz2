<template>
  <div class="bg-green-50 pt-5">
    <main class="container min-h-screen mx-auto">
      <div class="flex justify-center mx-20 mb-[40px]">
        <div class="flex justify-beetwen items-center w-[85%] mt-5">
          <div>
            <div
              class="w-[100%] h-[60px] rounded-xl bg-white flex justify-beetwen items-center"
            >
              <nuxt-link to="#"
                ><i class="bx bx-search-alt-2 text-3xl text-gray-500 ml-6"></i
              ></nuxt-link>
              <input
                type="text"
                placeholder="Search words here..."
                class="w-[90%] outline-none pl-5 relative text-xl h-[60px] rounded-xl"
              />
            </div>
            <Card />
            <Pagination />
          </div>
        </div>
        <div class="ml-4">
          <h2 class="font-bold text-[26px] mt-12 mb-3">Latest Articles</h2>
          <div class="bg-white px-8 rounded-xl">
            <ul class="list-disc text-[16px] text-[#AAAAAA] leading-10">
              <li>Ingliz tilidagi so'zlarni eslab qolishing 11 ta samarali usuli</li>
              <li>Ingliz tilini samarali o'rganish uchun 7 ta maslahat</li>
              <li>O‘zbek tilining asosiy imlo qoidalari</li>
              <li>Upwork'da ish boshlash</li>
              <li>Most Confused Words in English</li>
              <li>Most Confused Words in English</li>
            </ul>
          </div>

          <h2 class="font-bold text-[26px] mt-12">Tags</h2>
          <div class="flex flex-wrap">
            <p class="bg-white px-4 py-3 rounded-full ml-2">English (2)</p>
            <p class="bg-white px-4 py-3 rounded-full ml-2">Freelancer (5)</p>
            <p class="bg-white px-4 py-3 rounded-full ml-2">Vocabulary (2)</p>
            <p class="bg-white px-4 py-3 rounded-full ml-2">Uzbek grammer (2)</p>
            <p class="bg-white px-4 py-3 rounded-full ml-2">English grammer (2)</p>
            <p class="bg-white px-4 py-3 rounded-full ml-2">Imlo (2)</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup></script>

<style scoped></style>
