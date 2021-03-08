<template>
  <form @submit="onSubmit" class="row row-cols-lg-auto g-3 align-items-center">
    <div class="mb-3 d-flex align-items-center col-9">
      <label for="year" class="form-label">Year:</label>
      <input type="number" class="form-control" id="year" min="1910" max="2021" v-model.number="year">
    </div>
    <button type="submit" class="btn btn-primary col-3">Submit</button>
  </form>
</template>

<script>
export default {
  name: "YearPick",
  data() {
    return {
      year: 2020
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.$emit('change-year', this.year)
    }
  }
}
</script>

<style scoped>

</style>