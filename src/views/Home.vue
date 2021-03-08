<template>
  <div>
    <div class="container" >
      <div class="row mt-4">
        <div class="col">
          <YearPick @change-year="fetchMoviesList" />
        </div>
      </div>
      <div class="row my-4" v-for="(movie, index) in movies" :key="movie.id" :index="index">
        <article class="col">
          <router-link :to="'/movie/' + movie.id">
          <div class="card flex-row">
            <div class="card-header">{{ index + 1 }}</div>
            <img class="card-img-left" :src="'http://image.tmdb.org/t/p/w200' + movie.poster_path"
                 v-if="movie.poster_path !== null" alt="Card image cap"
            width="200" height="300">
            <div class="card-body">
              <h1 class="card-title">{{ movie.title }}</h1>
              <p><small>{{ movie.release_date }}</small></p>
              <p class="card-text" v-if="movie.overview">{{ movie.overview }}</p>
            </div>
          </div>
          </router-link>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import env from '@/env';
import YearPick from "@/components/YearPick";

export default {
  components: {YearPick},
  data() {
    return {
      movies: {},
    }
  },
  methods: {
    async fetchMoviesList(year) {
      const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${env.apikey}&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&primary_release_year=${year}&page=1`)
      this.movies = await res.json();
      this.movies = this.movies.results;
    },
  },
  mounted() {
    this.fetchMoviesList();
  }
}
</script>

<style scoped>

</style>