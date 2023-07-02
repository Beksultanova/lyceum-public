<template>
  <navbar></navbar>
  <!-- Carousel Start -->

  <div
    id="carouselExampleIndicators"
    class="carousel banner slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item carousel__item active">
        <img
          src="../../assets/img/carousel-1.jpg"
          class="d-block banner__img"
          alt="..."
        />
        <div
          class="carousel-info position-absolute top-0 start-0 d-flex"
          style="background: rgba(24, 29, 56, 0.7)"
        >
          <div
            v-animate-onscroll="'animated fadeInUp delay-0.9s'"
            class="container banner"
          >
            <div class="banner__info">
              <div class="row banner__info-item justify-content-between">
                <div class="col-sm-12 col-lg-8">
                  <h5 class="text-primary text-uppercase mb-3 animated">
                    Best Online Courses
                  </h5>
                  <h1 class="display-3 text-white banner__title">
                    Келечектин кесибинин ээси бол!
                  </h1>
                  <p class="fs-5 text-white mb-4 pb-2">
                    Vero elitr justo clita lorem. Ipsum dolor at sed stet sit
                    diam no. Kasd rebum ipsum et diam justo clita et kasd rebum
                    sea sanctus eirmod elitr.
                  </p>
                  <a
                    href=""
                    class="btn btn-primary py-md-3 px-md-5 me-3 animated"
                    >Дагы окуу</a
                  >
                </div>
                <div class="card col-lg-6 p-0 me-4 director__card">
                  <img
                    src="https://www.oshsu.kg/storage/uploads/thumbnail/IVCgUgu4O2UkC3SAmuHE7lx244vfPugaxkKPocg8.jpeg"
                    class="director__img"
                    alt="card"
                  />
                  <div class="card-body director__card-body">
                    <div>
                      <h5 class="card-title text-center director__card-title">
                        Ректор Кожобеков Кудайберди Гапаралиевич
                      </h5>
                      <div class="row gy-2 gx-4 mt-3 mb-4 director__card-info">
                        <div class="col-sm-12">
                          <p class="mb-0">
                            <i class="fa fa-arrow-right text-primary me-2"></i
                            >тел: +996 3222 7-22-73,
                          </p>
                        </div>
                        <div class="col-sm-12">
                          <p class="mb-0">
                            <i class="fa fa-arrow-right text-primary me-2"></i
                            >факс: +996 3222 7-09-15,
                          </p>
                        </div>
                        <div class="col-sm-12">
                          <p class="mb-0">
                            <i class="fa fa-arrow-right text-primary me-2"></i
                            >email: edu@oshsu.kg
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="d-flex justify-content-end">
                      <router-link
                        to="/director"
                        href="#"
                        class="btn btn-primary"
                        >Дагы окуу</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Carousel End -->
  <!-- About Start -->
  <div class="container-xxl news py-5">
    <div class="container">
      <div class="mt-2 text-center animated fadeInUp delay-0.7s">
        <h6 class="section-title bg-white text-center text-primary px-3">
          Жаңылыктар
        </h6>
        <h1 class="mb-5">Лицей жанылыктары</h1>
      </div>
      <div
        v-animate-onscroll="'animated fadeInUp delay-0.9s'"
        class="row g-5 mb-5"
        data-delay="0.5s"
      >
        <div class="col-lg-3">
          <div class="position-relative">
            <img
              class="img-fluid item-img"
              src="https://www.oshsu.kg/storage/uploads/A1dkcA4zPZ8fvvLg3OgIEWj1IOh7Oog7SEhlwAGd.jpeg"
              alt=""
              style="object-fit: cover"
            />
          </div>
        </div>
        <div class="col-lg-9 position-relative">
          <h1 class="mb-4 news__title">
            ОшМУнун студенттери УТРКда тажрыйба топтойт
          </h1>
          <p class="b-4 card__text">
            Улуттук телерадиоберүү корпорациясынын башкы директору Болотбек
            Тиллебаев Ош мамлекеттик университетинин ректору, профессор
            Кудайберди Кожобеков менен жолукту. Бүгүнкү күнү өлкөдөгү бир нече
            жогорку окуу жайларында журналист кадрлар даярдалат. Алардын бири –
            45 миң студентти камтыган Ош мамлекеттик университетинин Кыргыз тили
            жана журналистика факультетинин журналистика кафедрасы. Жыл сайын
            20дан ашык журналист кадрларды даярдап чыгарган окуу жай
            студенттердин УТРКда тажрыйба топтоосуна кызыкдар.
          </p>
          <router-link to="/news/:id" class="btn btn-primary card__btn" href="#"
            >Узнать подробнее</router-link
          >
        </div>
      </div>
      <div
        v-animate-onscroll="'animated fadeInUp delay-0.9s'"
        class="row g-5 mb-5"
        data-delay="0.5s"
      >
        <div class="col-lg-3">
          <div class="position-relative">
            <img
              class="img-fluid item-img"
              src="https://www.oshsu.kg/storage/uploads/TDa6kF65AXTb3k6qWdVHdFYi0w5kwS81Q7P7wuHX.jpeg"
              alt=""
              style="object-fit: cover"
            />
          </div>
        </div>
        <div class="col-lg-9 position-relative">
          <h1 class="mb-4 news__title">Лекции по пожарной безопасности</h1>
          <p class="b-4 card__text">
            Сотрудники управления МЧС по г. Ош, старшие лейтенанты Сейтек
            Тургунбаев и Урбай уулу Нургазы прочитали лекции по правилам
            пожарной безопасности студентам факультета естествознания, туризма и
            аграрных технологий ОшГУ. Преподаватели и студенты факультета
            получили необходимые сведения по профилактике случаев пожара и на
            практике увидели меры, предпринимаемые по тушению пожара с
            использованнием специальной техники и оборудования.
          </p>
          <router-link to="/news/:id" class="btn btn-primary card__btn" href="#"
            >Узнать подробнее</router-link
          >
        </div>
      </div>
      <div
        v-animate-onscroll="'animated fadeInUp delay-0.9s'"
        class="row g-5 mb-5"
        data-delay="0.5s"
      >
        <div class="col-lg-3">
          <div class="position-relative">
            <img
              class="img-fluid item-img"
              src="https://www.oshsu.kg/storage/uploads/6fCn40OdRYai0yw1x6JX16ZAR88Vr687q0OtFeSG.jpeg"
              alt=""
              style="object-fit: cover"
            />
          </div>
        </div>
        <div class="col-lg-9 position-relative">
          <h1 class="mb-4 news__title">
            В ОшГУ открыт научно-исследовательский центр профессора Алымкулова
          </h1>
          <p class="b-4 card__text">
            В ОшГУ открыт научно-исследовательский центр имени заслуженного
            деятеля науки КР, члена-корреспондента НАН КР, Почетного академика
            НАН КР, доктора физико-математических наук, профессора Келдибая
            Алымкулова. Мероприятие прошло в рамках международной
            научно-практической конференции «Актуальные проблема математики и
            образование», посвященной 80-летию ученого.
          </p>
          <router-link to="/news/:id" class="btn btn-primary card__btn" href="#"
            >Узнать подробнее</router-link
          >
        </div>
      </div>
      <router-link
        to="/news"
        class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
        >ещё</router-link
      >
    </div>
  </div>
  <!-- About End -->
  <!-- Service Start -->
  <div class="container-xxl py-5">
    <div class="container">
      <div
        v-animate-onscroll="'animated fadeInUp delay-0.9s'"
        class="text-center"
      >
        <h6 class="section-title bg-white text-center text-primary px-3">
          Өзгөчөлүктөр
        </h6>
        <h1 class="mb-5">Лицей өзгөчөлүктөрү</h1>
      </div>
      <div class="row g-4">
        <div
          v-animate-onscroll="'animated fadeInUp delay-0.5.5s'"
          class="col-lg-3 col-sm-6"
        >
          <div class="service-item mx-1 text-center pt-3">
            <div class="p-4">
              <i class="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
              <h5 class="mb-3">Обучение с нуля до Junior</h5>
              <p>1 готовый проект, Сертифицированные преподаватели</p>
            </div>
          </div>
        </div>
        <div
          v-animate-onscroll="'animated fadeInUp delay-0.5s'"
          class="col-lg-3 col-sm-6"
        >
          <div class="service-item mx-1 text-center pt-3">
            <div class="p-4">
              <i class="fa fa-3x fa-globe text-primary mb-4"></i>
              <h5 class="mb-3">Команда тех.поддержки</h5>
              <p>Получи индивидуальные занятия от команды тех.поддержки</p>
            </div>
          </div>
        </div>
        <div
          v-animate-onscroll="'animated fadeInUp delay-0.5s'"
          class="col-lg-3 col-sm-6"
        >
          <div class="service-item mx-1 text-center pt-3">
            <div class="p-4">
              <i class="fa fa-3x fa-home text-primary mb-4"></i>
              <h5 class="mb-3">Стажировка в Codify Lab</h5>
              <p>Работай над реальными проектами в лаборатории Codify</p>
            </div>
          </div>
        </div>
        <div
          v-animate-onscroll="'animated fadeInUp delay-0.5s'"
          class="col-lg-3 col-sm-6"
        >
          <div class="service-item mx-1 text-center pt-3">
            <div class="p-4">
              <i class="fa fa-3x fa-book-open text-primary mb-4"></i>
              <h5 class="mb-3">Трудоустройство с HR</h5>
              <p>Получи курс от HR специалиста и найди работу в IT компании</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Service End -->
  <!-- About Start -->
  <div class="container-xxl py-5">
    <div class="container">
      <div v-animate-onscroll="'animated fadeInUp delay-0.9s'" class="row g-5">
        <div
          class="col-lg-6 fanimated fadeInUp delay-0.5s"
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
        <div class="col-lg-6 animated fadeInUp delay-0.5s">
          <h6 class="section-title bg-white text-start text-primary pe-3">
            Биз жөнүндө
          </h6>
          <h1 class="mb-4">Бизге кош келиңиз</h1>
          <p class="mb-4">
            Благодаря frontend-разработчикам мы оставляем лайки и комментарии,
            добавляем товары в корзину и быстро разбираемся в онлайн-картах.
          </p>
          <p class="mb-4">
            На курсе вы научитесь создавать интерфейсы веб-сервисов с помощью
            языков программирования и дополнительных технологий. Сможете
            разрабатывать планировщики задач, мессенджеры, интернет-магазины.
          </p>
          <div class="row gy-2 gx-4 mb-4">
            <div class="col-sm-6">
              <p class="mb-0">
                <i class="fa fa-arrow-right text-primary me-2"></i>Подходит для
                новичков
              </p>
            </div>
            <div class="col-sm-6">
              <p class="mb-0">
                <i class="fa fa-arrow-right text-primary me-2"></i>7 месяцев до
                трудоустройства
              </p>
            </div>
            <div class="col-sm-6">
              <p class="mb-0">
                <i class="fa fa-arrow-right text-primary me-2"></i>До 8 проектов
                в портфолио
              </p>
            </div>
            <div class="col-sm-6">
              <p class="mb-0">
                <i class="fa fa-arrow-right text-primary me-2"></i>Помощь в
                трудоустройстве
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
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- About End -->
  <!-- Testimonial Start -->
  <div class="container-xxl py-5">
    <div v-animate-onscroll="'animated fadeInUp delay-1.0s'" class="container">
      <div class="text-center">
        <h6 class="section-title bg-white text-center text-primary px-3">
          Feedback
        </h6>
        <h1 class="mb-5">Ой-пикирлер</h1>
      </div>
      <swiper
        :slidesPerView="1"
        :spaceBetween="10"
        :pagination="{
          clickable: true,
        }"
        :breakpoints="{
          '640': {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          '768': {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          '1024': {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          <div class="testimonial-item mb-5 text-center active">
            <img
              class="border rounded-circle p-2 mx-auto mb-3"
              src="../../assets/img/testimonial-1.jpg"
              style="width: 80px; height: 80px"
            />
            <h5 class="mb-0">Client Name</h5>
            <p>Profession</p>
            <div class="testimonial-text bg-light text-center p-4">
              <p class="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
          </div></swiper-slide
        >
        <swiper-slide>
          <div class="testimonial-item mb-5 text-center">
            <img
              class="border rounded-circle p-2 mx-auto mb-3"
              src="../../assets/img/testimonial-1.jpg"
              style="width: 80px; height: 80px"
            />
            <h5 class="mb-0">Client Name</h5>
            <p>Profession</p>
            <div class="testimonial-text bg-light text-center p-4">
              <p class="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
          </div></swiper-slide
        ><swiper-slide>
          <div class="testimonial-item mb-5 text-center">
            <img
              class="border rounded-circle p-2 mx-auto mb-3"
              src="../../assets/img/testimonial-1.jpg"
              style="width: 80px; height: 80px"
            />
            <h5 class="mb-0">Client Name</h5>
            <p>Profession</p>
            <div class="testimonial-text bg-light text-center p-4">
              <p class="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
          </div></swiper-slide
        >
        <swiper-slide>
          <div class="testimonial-item mb-5 text-center">
            <img
              class="border rounded-circle p-2 mx-auto mb-3"
              src="../../assets/img/testimonial-1.jpg"
              style="width: 80px; height: 80px"
            />
            <h5 class="mb-0">Client Name</h5>
            <p>Profession</p>
            <div class="testimonial-text bg-light text-center p-4">
              <p class="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
          </div></swiper-slide
        ><swiper-slide>
          <div class="testimonial-item mb-5 text-center">
            <img
              class="border rounded-circle p-2 mx-auto mb-3"
              src="../../assets/img/testimonial-1.jpg"
              style="width: 80px; height: 80px"
            />
            <h5 class="mb-0">Client Name</h5>
            <p>Profession</p>
            <div class="testimonial-text bg-light text-center p-4">
              <p class="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
          </div></swiper-slide
        >
        <swiper-slide>
          <div class="testimonial-item mb-5 text-center">
            <img
              class="border rounded-circle p-2 mx-auto mb-3"
              src="../../assets/img/testimonial-1.jpg"
              style="width: 80px; height: 80px"
            />
            <h5 class="mb-0">Client Name</h5>
            <p>Profession</p>
            <div class="testimonial-text bg-light text-center p-4">
              <p class="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
          </div></swiper-slide
        ><swiper-slide>
          <div class="testimonial-item mb-5 text-center">
            <img
              class="border rounded-circle p-2 mx-auto mb-3"
              src="../../assets/img/testimonial-1.jpg"
              style="width: 80px; height: 80px"
            />
            <h5 class="mb-0">Client Name</h5>
            <p>Profession</p>
            <div class="testimonial-text bg-light text-center p-4">
              <p class="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
          </div></swiper-slide
        >
        <swiper-slide>
          <div class="testimonial-item mb-5 text-center">
            <img
              class="border rounded-circle p-2 mx-auto mb-3"
              src="../../assets/img/testimonial-1.jpg"
              style="width: 80px; height: 80px"
            />
            <h5 class="mb-0">Client Name</h5>
            <p>Profession</p>
            <div class="testimonial-text bg-light text-center p-4">
              <p class="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
          </div></swiper-slide
        ><swiper-slide>
          <div class="testimonial-item mb-5 text-center">
            <img
              class="border rounded-circle p-2 mx-auto mb-3"
              src="../../assets/img/testimonial-1.jpg"
              style="width: 80px; height: 80px"
            />
            <h5 class="mb-0">Client Name</h5>
            <p>Profession</p>
            <div class="testimonial-text bg-light text-center p-4">
              <p class="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
          </div></swiper-slide
        >
      </swiper>
    </div>
  </div>
  <!-- Testimonial End -->

  <!-- Footer Start -->
  <footerApp></footerApp>
  <!-- Footer End -->
  <!-- Back to Top -->
  <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="currentColor"
      class="bi bi-arrow-up-short"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
      />
    </svg>
  </a>
</template>

<script lang="ts" setup type="module">
import navbar from "../../components/header.vue";
import footerApp from "../../components/footer.vue";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Pagination, EffectCoverflow } from "swiper";
import { ref, Ref } from "vue";

const modules: Ref<any[]> = ref([]);
modules.value = [Pagination, EffectCoverflow];
</script>
<style src="../../assets/css/myStyle.css"></style>
