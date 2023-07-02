<template>
  <navbar></navbar>
  <div class="container-xxl pt-5">
    <div class="container">
      <div v-for="item in news">
        <card
          :defaultImgId="item.defaultImgId"
          :createDate="item.createDate"
          :title="item.title"
          :caption="item.caption"
          :linkTo="item.linkTo"
        ></card>
      </div>
      <pagination />
    </div>
  </div>
  <footerApp></footerApp>
</template>
<script setup lang="ts">
import footerApp from "../../components/footer.vue";
import navbar from "../../components/header.vue";
import card from "../../components/card.vue";
import pagination from "../../components/pagination.vue";
import { news } from "../../data/news";
</script>
