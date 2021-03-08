<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <article class="">
          <header>
            <img :src="'http://image.tmdb.org/t/p/w200' + movie.poster_path" class="img-fluid" :alt="movie.title + 'poster'">
            <h1 class="">{{ movie.title }}</h1>
            <p><small>{{ movie.release_date }}</small></p>
          </header>
          <div class="">
            <p class="">
              {{ movie.overview }}
            </p>
            <dl>
              <dt>Director:</dt>
              <dd>{{ director }}</dd>
            </dl>
            <dl>
              <dt>Cast:</dt>
              <dd>{{ cast }}</dd>
            </dl>
            <div id="myCarusel" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="http://via.placeholder.com/640x360" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="http://via.placeholder.com/640x360" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="http://via.placeholder.com/640x360" class="d-block w-100" alt="...">
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
// import { useRoute } from 'vue-router';
// import env from '@/env';
// import { onBeforeMount } from 'vue';

export default {
  data() {
    return {
      movie: {},
      credits: {},
      director: '',
      cast: ''
    }
  },
  methods: {
    async getMovie() {
      const res = await fetch('https://api.themoviedb.org/3/movie/550?api_key=98f4cab67b355180ab627cb8f0145c43&language=en-US');
      this.movie = await res.json();
    },
    async getCredits() {
      const res = await fetch(`https://api.themoviedb.org/3/movie/550/credits?api_key=98f4cab67b355180ab627cb8f0145c43&language=en-US`);
      this.credits = await res.json();
      this.director = this.credits.crew[0].name;
      let i = 0;
      while (i <= 5) {
        this.cast += this.credits.cast[i].name;
        i++;
        if (i !== 6) {
          this.cast += ', ';
        }
      }
    }
  },
  mounted() {
    this.getMovie();
    this.getCredits();
  }
}
</script>

<style scoped>

</style>