<template>
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="movie"
           v-model="film_type" @change="changeFilmType">
    <label class="form-check-label" for="inlineRadio1">Movie</label>
  </div>
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="tv"
            v-model="film_type" @change="changeFilmType">
    <label class="form-check-label" for="inlineRadio2">TV Show</label>
  </div>
</template>

<script>
export default {
  name: "MovieTypeSelector",
  data() {
    return {
      film_type: 'movie'
    }
  },
  methods: {
    changeFilmType() {
      this.$emit('change-type', this.film_type);
    }
  },
  emits: ['change-type']
}
</script>

<style scoped>

</style>