<template>
  <navbar></navbar>
  <!-- About Start -->
  <div class="container-xxl py-5">
    <div class="container">
      <div class="row g-5">
        <div
          class="col-lg-6 wow fadeInUp"
          data-wow-delay="0.1s"
          style="min-height: 400px"
        >
          <div class="position-relative h-100">
            <img
              class="img-fluid position-absolute w-100 h-100"
              src="https://s.mediasole.ru/images/2166/2166612/original.jpg"
              alt=""
              style="object-fit: cover"
            />
          </div>
        </div>
        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
          <h6 class="section-title bg-white text-start text-primary pe-3">
            Бүтүрүүчүлөрүбүз
          </h6>
          <h1 class="mb-4">Асанов Асан</h1>
          <p class="mb-4">
            Мисс Диана имеет психологическое образование степени бакалавра
            Бишкекского Гуманитарного Университета. Последние два года она
            работала только с детьми, занималась волонтерством в детском лагере.
            Она искренне верит, что счастливый ребенок – это залог успешной
            жизни. Мисс Диана говорит на четырех языках: кыргызский, русский,
            английский, турецкий и собирается учить испанский. Свое свободное
            время она проводит за чтением книг. Мисс Диана пришла в BIS в
            сентябре 2019 года.
          </p>

          <div class="row gy-2 gx-4 mb-4">
            <div class="col-sm-6">
              <p class="mb-0">
                <i class="fa fa-arrow-right text-primary me-2"></i>20 жылдык
                тажрыйба
              </p>
            </div>
            <div class="col-sm-6">
              <p class="mb-0">
                <i class="fa fa-arrow-right text-primary me-2"></i>300дөн ашуун
                студенттерди ийгиликтүү бүтүрүп чыгарган
              </p>
            </div>
            <div class="col-sm-6">
              <p class="mb-0">
                <i class="fa fa-arrow-right text-primary me-2"></i>2 жогорку
                билимдин ээси
              </p>
            </div>
            <div class="col-sm-6">
              <p class="mb-0">
                <i class="fa fa-arrow-right text-primary me-2"></i>Эл аралык
                сертификаты бар
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footerApp></footerApp>
  <!-- About End -->
</template>
<script setup lang="ts">
import navbar from "../../components/header.vue";
import footerApp from "../../components/footer.vue";
</script>
