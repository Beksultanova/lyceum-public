<template>
  <navbar></navbar>
  <div class="container-xxl py-5">
    <div class="container d-flex justify-content-center">
      <div class="card py-3 px-3" style="max-width: 790px">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://www.oshsu.kg/storage/uploads/thumbnail/RqxAUqu80WCEBarRWIP0cYAMeIdqCGgQNzsAiiUA.jpeg"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Сведения о себе:</h5>
              <div class="row gy-2 gx-4 mt-3 mb-3">
                <div class="col-sm-12">
                  <p class="mb-0">
                    Год и место рождения: 30 декабря 1975 года, Чон Алайский
                    район Ошской области.
                  </p>
                </div>
                <div class="col-sm-12">
                  <p class="mb-0">Национальность: кыргыз.</p>
                </div>
                <div class="col-sm-12">
                  <p class="mb-0">Семейное положение: женат</p>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <h5 class="card-title">Образование:</h5>
            <p class="mb-0">
              Высшее. В 1997 году окончил физико-математический факультет
              Ошского государственного университета.
            </p>
          </div>
          <div class="mb-4">
            <h5 class="card-title">Трудовая деятельность:</h5>
            <p class="mb-0">
              Трудовую деятельность начал в 1997 году преподавателем кафедры
              прикладной математики и информатики.
            </p>
            <p class="mb-0">
              2002-2007-заместитель декана по заочному обучению факультета
              математики и информационных технологий, старший преподаватель
              кафедры прикладной и компьютерной математики.
            </p>
            <p class="mb-0">
              2008-2011-заместитель декана по учебной работе факультета
              математики и информационных технологий, старший преподаватель
              кафедры программирования, доцент.
            </p>
            <p class="mb-0">
              11 ноября 2019 года избран на должность ректора ОшГУ
            </p>
          </div>
          <div class="mb-4">
            <h5 class="card-title">Награды:</h5>
            <p class="mb-0">- Почетная грамота мэрии г. Ош (2005);</p>
            <p class="mb-0">- Почетная грамота ОшГУ, (2008);</p>
            <p class="mb-0">- Почетная грамота МОН КР, (2012);</p>
            <p class="mb-0">
              - Профессор российской академии естественных наук, (2016).
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footerApp></footerApp>
</template>

<script lang="ts" setup type="module">
import footerApp from "../../components/footer.vue";
import navbar from "../../components/header.vue";
</script>
<style src="../../assets/css/myStyle.css"></style>
