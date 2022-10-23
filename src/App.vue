<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import "./style.css";

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  localStorage.theme = "dark";
} else {
  document.documentElement.classList.remove("dark");
  localStorage.theme = "light";
}

const isShow = ref<boolean>(false);

const handleTheme = () => {
  if (localStorage.theme === "dark") {
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");
  } else {
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
  }
};
</script>

<template>
  <header
    class="w-full font-Gothic flex justify-center bg-white dark:bg-slate-800"
  >
    <div class="w-[1130px] mx-auto pt-10 pb-7.5 flex justify-between">
      <div
        class="text-6.4 animate-fadeInUp text-[#2e2e2e] dark:text-white laptop:ml-6"
      >
        <RouterLink to="/"> North. </RouterLink>
      </div>
      <ul class="flex justify-between list-none text-[#333] dark:text-white">
        <RouterLink to="/">
          <li
            class="mr-5 relative after:content-[''] after:absolute after:top-full after:left-0 after:right-0 after:-bottom-[0.2em] after:transition-all after:delay-300 after:bg-[#1A98FF] hover:after:right-1/2 tablet:hidden"
          >
            Home
          </li>
        </RouterLink>
        <RouterLink to="/blog">
          <li
            class="mr-5 relative after:content-[''] after:absolute after:top-full after:left-0 after:right-0 after:-bottom-[0.2em] after:transition-all after:delay-300 after:bg-[#1A98FF] hover:after:right-1/2 tablet:hidden"
          >
            Blog
          </li>
        </RouterLink>
        <div class="dropdown dropdown-hover tablet:hidden">
          <label class="mr-5">More</label>
          <ul
            tabIndex="{0}"
            class="dropdown-content menu w-25 bg-white dark:bg-[#2a303c] border-[1px] border-solid border-[#1A98FF] mt-2"
          >
            <li
              class="text-[#898FA0] dark:text-slate-400 hover:text-[#2e2e2e] dark:hover:text-white hover:bg-transparent"
            >
              <RouterLink to="/code"> Code </RouterLink>
            </li>
            <li
              class="text-[#898FA0] dark:text-slate-400 hover:text-[#2e2e2e] dark:hover:text-white hover:bg-transparent"
            >
              <RouterLink to="devtool"> Devtool </RouterLink>
            </li>
          </ul>
        </div>

        <li class="tablet:hidden">
          <input
            type="checkbox"
            className="toggle"
            checked
            @change="handleTheme"
          />
        </li>

        <li class="hidden tablet:inline-block mr-8" @click="isShow = true">
          <svg
            class="dark:fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
          </svg>
        </li>
        <div
          v-if="isShow"
          class="bg-white dark:bg-slate-800 w-full h-full fixed transition-all delay-300 z-50 inset-0 animate-fadeInUp"
        >
          <div class="flex justify-between p-10">
            <div
              class="font-[1000] text-[1.5em] animate-fadeInUp text-[#2e2e2e] dark:text-white"
            >
              <RouterLink to="/"> North. </RouterLink>
            </div>
            <div class="cursor-pointer" @click="isShow = false">
              <svg
                class="dark:fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                />
              </svg>
            </div>
          </div>
          <div class="flex flex-col mt-5 text-center">
            <RouterLink to="/">
              <div class="mt-12.5 text-[2.2em] font-[1000]">
                <span class="shadow-[inset_0_-0.1em_#1a98ff]">HOME</span>
              </div>
            </RouterLink>
            <RouterLink to="/blog">
              <div class="mt-12.5 text-[2.2em] font-[1000]">
                <span class="shadow-[inset_0_-0.1em_#1a98ff]">BLOG</span>
              </div>
            </RouterLink>
          </div>
        </div>
      </ul>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
