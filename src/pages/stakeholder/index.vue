<template>
  <navbar></navbar>
  <div class="container-xxl py-5">
    <div class="container">
      <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 class="section-title bg-white text-center text-primary px-3">
          Стейкхолдер
        </h6>
        <h1 class="mb-5">Жумуш берүүчүлөр тизмеси</h1>
      </div>
      <div class="row g-5 mb-5">
        <div class="col-lg-3 wow fadeInUp" data-wow-delay="0.1s">
          <div class="position-relative">
            <img
              class="img-fluid item-img"
              src="https://registry.halal.kg/wp-content/uploads/2021/01/%D0%9B%D0%BE%D0%B3%D0%BE-PNG.png"
              alt=""
              style="object-fit: cover"
            />
          </div>
        </div>
        <div
          class="col-lg-9 wow fadeInUp position-relative"
          data-wow-delay="0.3s"
        >
          <h1 class="mb-4 news__title">Компания "Белая река"</h1>
          <p class="mb-4 card__text">
            Молочная продукция «Белая Река» завоевала сердца миллионов
            покупателей по всему Кыргызстану и Казахстану. Мы надеемся, что наш
            маленький успех – это только начало пути к здоровью и заботе о самых
            близких, которым мы покупаем молочные продукты «Белая Река». Спасибо
            что вы с нами!
          </p>
          <router-link class="btn btn-primary card__btn" to="/stakeholder/:id"
            >Read More</router-link
          >
        </div>
      </div>
      <div class="row g-5 mb-5">
        <div class="col-lg-3 wow fadeInUp" data-wow-delay="0.1s">
          <div class="position-relative">
            <img
              class="img-fluid item-img"
              src="https://registry.halal.kg/wp-content/uploads/2021/01/%D0%9B%D0%BE%D0%B3%D0%BE-PNG.png"
              alt=""
              style="object-fit: cover"
            />
          </div>
        </div>
        <div
          class="col-lg-9 wow fadeInUp position-relative"
          data-wow-delay="0.3s"
        >
          <h1 class="mb-4 news__title">Компания "Белая река"</h1>
          <p class="mb-4 card__text">
            Молочная продукция «Белая Река» завоевала сердца миллионов
            покупателей по всему Кыргызстану и Казахстану. Мы надеемся, что наш
            маленький успех – это только начало пути к здоровью и заботе о самых
            близких, которым мы покупаем молочные продукты «Белая Река». Спасибо
            что вы с нами!
          </p>
          <router-link class="btn btn-primary card__btn" to="/stakeholder/:id"
            >Read More</router-link
          >
        </div>
      </div>
      <div class="row g-5 mb-5">
        <div class="col-lg-3 wow fadeInUp" data-wow-delay="0.1s">
          <div class="position-relative">
            <img
              class="img-fluid item-img"
              src="https://registry.halal.kg/wp-content/uploads/2021/01/%D0%9B%D0%BE%D0%B3%D0%BE-PNG.png"
              alt=""
              style="object-fit: cover"
            />
          </div>
        </div>
        <div
          class="col-lg-9 wow fadeInUp position-relative"
          data-wow-delay="0.3s"
        >
          <h1 class="mb-4 news__title">Компания "Белая река"</h1>
          <p class="mb-4 card__text">
            Молочная продукция «Белая Река» завоевала сердца миллионов
            покупателей по всему Кыргызстану и Казахстану. Мы надеемся, что наш
            маленький успех – это только начало пути к здоровью и заботе о самых
            близких, которым мы покупаем молочные продукты «Белая Река». Спасибо
            что вы с нами!
          </p>
          <router-link class="btn btn-primary card__btn" to="/stakeholder/:id"
            >Read More</router-link
          >
        </div>
      </div>
      <nav aria-label="Page navigation  example">
        <ul class="pagination mt-5">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">4</a></li>
          <li class="page-item"><a class="page-link" href="#">5</a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <footerApp></footerApp>
</template>
<script setup lang="ts">
import navbar from "../../components/header.vue";
import footerApp from "../../components/footer.vue";
</script>
