<template>
  <div>
    <div class="container" >
      <div class="row mt-4">
        <div class="col-2">
          <YearPick @change-year="setYear" />
        </div>
        <div class="col-3 d-flex align-items-center">
          <MovieTypeSelector @change-type="setType" />
        </div>
      </div>
      <div class="row my-4" v-for="(movie, index) in movies" :key="movie.id" :index="index">
        <article class="col">
          <div class="card flex-row">
            <div class="card-header text-white text-lg-center h5">{{ index + 1 }}</div>
            <img class="card-img-left" :src="'http://image.tmdb.org/t/p/w200' + movie.poster_path"
                 v-if="movie.poster_path" alt="Card image cap"
            width="200" height="300">
            <img src="https://via.placeholder.com/200x300" alt="No image" v-else width="200" height="300">
            <div class="card-body">
              <h1 class="card-title">{{ movie.title ?? movie.name }}</h1>
              <p><small><strong>Release date:</strong>&nbsp;{{ movie.release_date ?? movie.first_air_date }}</small></p>
              <p class="card-text">{{ movie.overview == '' ? 'No overview for this film' : movie.overview }}</p>
              <p>
                <router-link :to="'/movie/' + movie.id +'?type=' + type" class="btn btn-link stretched-link">
                  Подробнее...
                </router-link>
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import env from '@/env';
import YearPick from "@/components/YearPick";
import MovieTypeSelector from "@/components/MovieTypeSelector";

export default {
  components: {MovieTypeSelector, YearPick},
  data() {
    return {
      movies: {},
      year: 2020,
      type: 'movie'
    }
  },
  methods: {
    async fetchMoviesList() {
      const res = await fetch(`https://api.themoviedb.org/3/discover/${this.type}?api_key=${env.apikey}&language=en-US&sort_by=popularity.asc&${this.type === 'movie' ? 'primary_release_year' : 'first_air_date_year'}=${this.year}&page=1`)
      this.movies = await res.json();
      this.movies = this.movies.results;
    },
    setYear(year) {
      this.year = year;
      this.fetchMoviesList();
    },
    setType(type) {
      this.type = type;
      this.fetchMoviesList();
    }
  },
  mounted() {
    this.fetchMoviesList();
  }
}
</script>

<style scoped lang="scss">
.card {
  &-header {
    background: #34e89e;
    background: linear-gradient(to top, #0f3443, #34e89e);
  }

  &:hover {
     box-shadow: 0px 3px 10px rgba(0, 0, 0, .1);
     transition: .1s ease-in-out box-shadow;
   }
}
</style>