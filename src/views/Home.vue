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
    <form @submit.prevent="" class="search-box">
      <input type="text" placeholder="Search something...">
      <input type="submit" value="Search">
    </form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {

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
  }
</style>