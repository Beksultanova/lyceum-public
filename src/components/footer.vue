<template>
  <div
    class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div class="container py-5">
      <div class="row g-5">
        <div class="col-lg-4 col-md-6">
          <!-- <h4 class="text-white mb-3">Quick Link</h4> -->
          <router-link to="" class="btn btn-link">Жаңылыктар</router-link>
          <router-link to="" class="btn btn-link">Билим берүү</router-link>
          <router-link to="" class="btn btn-link">Лицей тарыхы</router-link>
          <router-link to="" class="btn btn-link">Мугалимдер</router-link>
          <router-link to="" class="btn btn-link"
            >Ийгиликтүү бүтүрүүчүлөр</router-link
          >
          <router-link to="" class="btn btn-link">Ата-энелер</router-link>
          <router-link to="" class="btn btn-link">Жетишкендиктер</router-link>
          <router-link to="" class="btn btn-link">Стейкхолдер</router-link>
          <router-link to="" class="btn btn-link"
            >Электрондук кабыл алуу</router-link
          >
        </div>

        <div class="col-lg-4 col-md-6">
          <h4 class="text-white mb-3">Байланышуу</h4>
          <p class="mb-2">
            <i class="fa fa-map-marker-alt me-3"></i>г.Ош г. Ош, ул.Западная, 1
          </p>
          <p class="mb-2">
            <i class="fa fa-phone-alt me-3"></i> (+996 3222) 7 02 75;
          </p>
          <p class="mb-2">
            <i class="fa fa-envelope me-3"></i>лицей@example.com
          </p>
          <div class="d-flex pt-2">
            <router-link to="" class="btn btn-outline-light btn-social"
              ><i class="fab fa-twitter"></i
            ></router-link>
            <router-link to="" class="btn btn-outline-light btn-social"
              ><i class="fab fa-facebook-f"></i
            ></router-link>
            <router-link to="" class="btn btn-outline-light btn-social"
              ><i class="fab fa-youtube"></i
            ></router-link>
            <router-link to="" class="btn btn-outline-light btn-social"
              ><i class="fab fa-linkedin-in"></i
            ></router-link>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <h4 class="text-white mb-3">Newsletter</h4>
          <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <div class="position-relative mx-auto" style="max-width: 400px">
            <input
              class="form-control border-0 w-100 py-3 ps-4 pe-5"
              type="text"
              placeholder="Your email"
            />
            <button
              type="button"
              class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="copyright">
        <div class="row">
          <div class="col-md-12 text-center text-md-start mb-3 mb-md-0">
            &copy;
            <router-link to="" class="border-bottom" href="#"
              >Your Site Name</router-link
            >, All Right Reserved.

            <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
            Designed By
            <router-link
              to=""
              class="border-bottom"
              href="https://htmlcodex.com"
              >HTML Codex</router-link
            ><br /><br />
            Distributed By
            <router-link
              to=""
              class="border-bottom"
              href="https://themewagon.com"
              >ThemeWagon</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
