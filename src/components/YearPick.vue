<template>
  <form @submit="onSubmit">
    <div class="input-group input-group-sm">
      <div class="input-group-prepend">
        <label for="year" class="form-label input-group-text">Year</label>
      </div>
      <input type="number" class="form-control" id="year" min="1910" max="2021" v-model.number="year">
      <div class="input-group-append">
        <button type="submit" class="btn btn-light btn-outline-secondary">Find</button>
      </div>
    </div>
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