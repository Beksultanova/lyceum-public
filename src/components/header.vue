<template>
  <nav
    id="test"
    class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0"
  >
    <router-link
      to="/"
      class="navbar-brand d-flex align-items-center px-4 px-lg-5"
    >
      <h2 class="m-0 text-primary"><i class="fa fa-book me-3"></i>Лого</h2>
    </router-link>
    <button
      type="button"
      class="navbar-toggler me-4"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <div class="navbar-nav ms-auto p-4 p-lg-0">
        <router-link to="/news" class="nav-item nav-link"
          >Жаңылыктар</router-link
        >
        <router-link to="/education" class="nav-item nav-link"
          >Билим берүү</router-link
        >
        <div class="nav-item dropdown">
          <router-link
            :to="road"
            class="nav-link dropdown-toggle"
            :class="{ active: dropdownBool }"
            data-bs-toggle="dropdown"
            >Биз жөнүндө</router-link
          >
          <div class="dropdown-menu fade-down m-0">
            <router-link
              to="/history"
              @click.prevent="birnerse"
              class="dropdown-item"
              >Лицей тарыхы</router-link
            >
            <router-link
              to="/team"
              @click.prevent="birnerse"
              class="dropdown-item"
              >Мугалимдер</router-link
            >
            <router-link
              to="/ourPride"
              @click.prevent="birnerse"
              class="dropdown-item"
              >Ийгиликтүү бүтүрүүчүлөр</router-link
            >
            <router-link
              to="/parents"
              @click.prevent="birnerse"
              class="dropdown-item"
              >Ата-энелер</router-link
            >
            <router-link
              to="/achievements"
              @click.prevent="birnerse"
              class="dropdown-item"
              >Жетишкендиктер</router-link
            >
            <!-- <router-link to="/education" class="dropdown-item"
              >Билим берүү</router-link
            >
            <router-link to="/ourPride" class="dropdown-item"
              >Биздин сыймыктар</router-link
            >
            <router-link to="/parents" class="dropdown-item"
              >Ата-энелер</router-link
            > -->
          </div>
        </div>
        <router-link to="/stakeholder" class="nav-item nav-link"
          >Стейкхолдер</router-link
        >
        <router-link to="/electronicAccept" class="nav-item nav-link"
          >Электрондук кабыл алуу</router-link
        >
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { ref } from "vue";

const aaa = ref("nav-link dropdown-toggle");
const road = ref("/");
const dropdownItem = ref("dropdown-item");
const dropdownBool = ref(false);
const birnerse = ref(() => {
  dropdownBool.value = true;
});

// function addActive() {
//   aaa.value = "nav-link active dropdown-toggle";
// }
</script>

<style></style>
