<template>
  <div
    v-animate-onscroll="'animated fadeInUp delay-0.9s'"
    class="row g-5 mb-5"
    data-delay="0.5s"
  >
    <div class="col-lg-3">
      <div class="position-relative">
        <img
          class="img-fluid item-img"
          :src="defaultImgId"
          alt="img"
          style="object-fit: cover"
        />
      </div>
    </div>
    <div class="col-lg-9 position-relative">
      <p class="ms-2 mb-1 date wow fadeInUp" data-wow-delay="0.3s">
        {{ createDate }}
      </p>
      <h1 class="mb-4 news__title">
        {{ title }}
      </h1>
      <p class="b-4 card__text">
        {{ caption }}
      </p>
      <router-link :to="linkTo" class="btn btn-primary card__btn" href="#"
        >Дагы окуу</router-link
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
interface PropTypes {
  defaultImgId: string;
  createDate: string;
  title: string;
  caption: string;
  linkTo: string
}

defineProps<PropTypes>();
</script>
