<template>
  <div class="home">
    <div class="feature-card">
      <router-link to="/movie/tt0409591">
        <img src="http://img.omdbapi.com/?apikey=1497dc5a&i=tt0409591" alt="Naruto Poster"
        class="feature-img">
        <div class="detail">
          <h3>Naruto</h3>
          <p>
            Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage, the village's leader and strongest ninja.
          </p>
        </div>
      </router-link>
    </div>
    <form @submit.prevent="SearchMovies()" class="search-box">
      <input type="text" placeholder="Search something..." v-model="search">
      <input type="submit" value="Search">
    </form>
    <div class="movies-list">
      Movies
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const search = ref("");
    const movies = ref([]);

    const SearchMovies = () => {
      if (search.value !== "") {
        console.log(search.value)
      }
    }

    return {
      search,
      movies,
      SearchMovies
    }
  }
}
</script>

<style lang="scss">
  .home {
    .feature {
      &-card {
        position: relative;
      }

      &-img {
        display: block;
        width: 100%;
        height: 300px;
        object-fit: cover;
        position: relative;
        z-index: 0;
      }
    }

    .detail {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, .6b);
      padding: 16px;
      z-index: 1;

      h3 {
        color: #FFFFFF;
        margin-bottom: 16px;
      }

      p {
        color: #FFFFFF;
      }
    }

    .search-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 16px;

      input {
        display: block;
        appearance: none;
        border: none;
        outline: none;
        background: none;

        &[type="text"] {
          width: 100%;
          color: #FFFFFF;
          background-color: #496583;
          font-size: 20px;
          padding: 10px 16px;
          border-radius: 8px;
          margin-bottom: 15px;
          transition: .4s;

          &::placeholder {
            color: #F3F3F3;
          }

          &:focus {
            box-shadow: 0 3px 6px rgba(0, 0, 0, .2);
          }
        }

        &[type="submit"] {
          width: 100%;
          max-width: 300px;
          background-color: #42B883;
          padding: 16px;
          border-radius: 8px;
          color: #FFFFFF;
          font-size: 20px;
          text-transform: uppercase;
          transition: .4s;
          
          &:active {
            background-color: #3B8070;
          }
        }
      }
    }
  }
</style>