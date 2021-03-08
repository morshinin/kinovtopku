<template>
  <div>
    <div class="container" v-for="(movie, index) in movies" :key="movie.id" :index="index">
      <div class="row my-2">
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
import { ref, onBeforeMount } from 'vue';
import env from '@/env';

export default {
  setup() {
    const movies = ref([]);

    onBeforeMount(() => {
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${env.apikey}&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1`)
        .then(response => response.json())
        .then(data => {
          movies.value = data.results;
          console.log(movies.value);
        })
    })

    return {
      movies
    }
  }
}
</script>

<style scoped>

</style>