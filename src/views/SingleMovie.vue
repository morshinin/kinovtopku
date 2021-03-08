<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <article>
          <header>
            <img :src="'http://image.tmdb.org/t/p/w200' + movie.poster_path" class="img-fluid" :alt="movie.title + 'poster'"
            v-if="movie.poster_path">
            <img src="https://via.placeholder.com/200x300" alt="Image placeholder" v-else>
            <h1 class="">{{ movie.title ?? movie.name }}</h1>
          </header>
          <div>
            <dl>
              <dt>Overview:</dt>
              <dd>
                {{ movie.overview ?? 'No overview' }}
              </dd>
            </dl>
            <dl>
              <dt>
                Release date:
              </dt>
              <dd>
                {{ movie.release_date ?? movie.first_air_date }}
              </dd>
            </dl>
            <dl>
              <dt>Director:</dt>
              <dd>{{ director !== '' ? director : 'No info about director' }}</dd>
            </dl>
            <dl>
              <dt>Cast:</dt>
              <dd v-if="show_cast">{{ cast }}</dd>
              <dd v-else>No info about cast</dd>
            </dl>
            <p><strong>Screenshots:</strong></p>
            <div id="custCarousel" class="carousel slide" data-ride="carousel" align="center" v-if="show_images">
              <!-- slides -->
              <div class="carousel-inner">
                <div class="carousel-item" v-for="(image, index) in images" :key="index" :class="[index === 1 ? 'active': '']">
                  <img :src="'http://image.tmdb.org/t/p/w500' + image.file_path" alt="Hills"
                  :width="image.width" :height="image.height">
                </div>
              </div>
              <!-- Left right -->
              <a class="carousel-control-prev" href="#custCarousel" data-slide="prev"> <span class="carousel-control-prev-icon"></span> </a> <a class="carousel-control-next" href="#custCarousel" data-slide="next"> <span class="carousel-control-next-icon"></span> </a> <!-- Thumbnails -->
              <ol class="carousel-indicators list-inline">
                    <li class="list-inline-item" v-for="(image, index) in images" :key="index"
                        :class="[index === 1 ? 'active': '']">
                      <a id="carousel-selector-0" class="selected" data-slide-to="0" data-target="#custCarousel">
                        <img :src="'http://image.tmdb.org/t/p/w200' + image.file_path" class="img-fluid">
                      </a>
                    </li>
              </ol>
            </div>
            <p v-else>
              No images for this movie.
            </p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import env from '@/env';

export default {
  data() {
    return {
      movie: {},
      credits: {},
      images: [],
      director: '',
      cast: '',
      route: useRoute(),
      show_images: true,
      show_cast: true,
      type: this.$route.query.type
    }
  },
  methods: {
    async getMovie() {
      console.log();
      const res = await fetch(`https://api.themoviedb.org/3/${this.type}/${this.$route.params.id}?api_key=${env.apikey}&language=en-US`);
      this.movie = await res.json();
    },
    async getCredits() {
      const res = await fetch(`https://api.themoviedb.org/3/${this.type}/${this.$route.params.id}/credits?api_key=${env.apikey}&language=en-US`);
      this.credits = await res.json();
      if (this.credits.cast.length === 0 || this.credits.crew.length === 0) {
        this.show_cast = false;
        return;
      }
      let i = 0;
      while (i <= 5) {
        this.cast += this.credits.cast[i].name;
        i++;
        if (i !== 6) {
          this.cast += ', ';
        }
      }
      this.director = this.credits.crew[0].name;
    },
    async getImages() {
      const res = await fetch(`https://api.themoviedb.org/3/${this.type}/${this.$route.params.id}/images?api_key=${env.apikey}`);
      this.images = await res.json();
      this.images = this.images.backdrops;
      if (this.images.length === 0) {
        this.show_images = false;
      }
    },
  },
  mounted() {
    this.getMovie();
    this.getCredits();
    this.getImages();
  }
}
</script>

<style lang="scss" scoped>
.carousel-inner img {
  width: 100%;
  height: 100%
}

#custCarousel .carousel-indicators {
  position: static;
  margin-top: 20px
}

#custCarousel .carousel-indicators>li {
  width: 100px
}

#custCarousel .carousel-indicators li img {
  display: block;
  opacity: 0.5
}

#custCarousel .carousel-indicators li.active img {
  opacity: 1
}

#custCarousel .carousel-indicators li:hover img {
  opacity: 0.75
}

.carousel-item img {
  width: 80%
}

#custCarousel {
  .carousel-control-next,
  .carousel-control-prev {
    background-color: #AAAAAA;
  }
}

</style>