<template>
  <navbar></navbar>
  <div data-bs-target="#navbar-example" class="container-xxl py-5">
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
              src="../../assets/img/about.jpg"
              alt=""
              style="object-fit: cover"
            />
          </div>
        </div>
        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
          <h6 class="section-title bg-white text-start text-primary pe-3">
            Кесиптер
          </h6>
          <h1 class="mb-4">Тигүү-бычуу кесиби</h1>
          <p class="mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit.
          </p>
          <p class="mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <div class="row gy-2 gx-4 mb-4">
            <div class="col-sm-6">
              <p class="mb-0">
                <i class="fa fa-arrow-right text-primary me-2"></i>Окуу мөөнөтү
                6 ай
              </p>
            </div>
            <div class="col-sm-6">
              <p class="mb-0">
                <i class="fa fa-arrow-right text-primary me-2"></i>Online
                Classes
              </p>
            </div>
            <div class="col-sm-6">
              <p class="mb-0">
                <i class="fa fa-arrow-right text-primary me-2"></i>International
                Certificate
              </p>
            </div>
            <div class="col-sm-6">
              <p class="mb-0">
                <i class="fa fa-arrow-right text-primary me-2"></i>Skilled
                Instructors
              </p>
            </div>
            <div class="col-sm-6">
              <p class="mb-0">
                <i class="fa fa-arrow-right text-primary me-2"></i>Online
                Classes
              </p>
            </div>
            <div class="col-sm-6">
              <p class="mb-0">
                <i class="fa fa-arrow-right text-primary me-2"></i>12 өлкөдө
                жарактуу диплом берилет
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row g-3 mt-3">
        <div class="col-lg-7 col-md-6">
          <div class="row g-3">
            <div class="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
              <a class="position-relative d-block overflow-hidden" href="">
                <img
                  class="img-fluid"
                  src="../../assets/img/cat-1.jpg"
                  alt=""
                />
              </a>
            </div>
            <div class="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.2s">
              <a class="position-relative d-block overflow-hidden" href="">
                <img
                  class="img-fluid"
                  src="../../assets/img/cat-2.jpg"
                  alt=""
                />
              </a>
            </div>
            <div class="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
              <a class="position-relative d-block overflow-hidden" href="">
                <img
                  class="img-fluid"
                  src="../../assets/img/cat-3.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div
          class="col-lg-5 col-md-6 wow zoomIn"
          data-wow-delay="0.4s"
          style="min-height: 350px"
        >
          <a class="position-relative d-block h-100 overflow-hidden" href="">
            <img
              class="img-fluid position-absolute w-100 h-100"
              src="../../assets/img/cat-4.jpg"
              alt=""
              style="object-fit: cover"
            />
          </a>
        </div>
        <div
          class="col-lg-5 col-md-6 wow zoomIn"
          data-wow-delay="0.5s"
          style="min-height: 350px"
        >
          <a class="position-relative d-block h-100 overflow-hidden" href="">
            <img
              class="img-fluid position-absolute w-100 h-100"
              src="../../assets/img/cat-4.jpg"
              alt=""
              style="object-fit: cover"
            />
          </a>
        </div>
        <div class="col-lg-7 col-md-6">
          <div class="row g-3">
            <div class="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.6s">
              <a class="position-relative d-block overflow-hidden" href="">
                <img
                  class="img-fluid"
                  src="../../assets/img/cat-1.jpg"
                  alt=""
                />
              </a>
            </div>
            <div class="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.7s">
              <a class="position-relative d-block overflow-hidden" href="">
                <img
                  class="img-fluid"
                  src="../../assets/img/cat-2.jpg"
                  alt=""
                />
              </a>
            </div>
            <div class="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.8s">
              <a class="position-relative d-block overflow-hidden" href="">
                <img
                  class="img-fluid"
                  src="../../assets/img/cat-3.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footerApp></footerApp>
</template>
<script setup lang="ts">
import { ref } from "vue";
import navbar from "../../components/header.vue";
import footerApp from "../../components/footer.vue";
</script>
