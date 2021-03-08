<template>
  <header class="main-header shadow mb-4">
    <nav class="navbar navbar-expand-lg navbar-light">
      <router-link to="/" class="navbar-brand d-flex align-items-center">
        <img :src="require('@/assets/fine.png')" alt="Kinovtopku logo" width="60" height="62">
        <h2 class="main-title text-white pl-2">Kino<span class="font-weight-lighter">Vtopku</span></h2>
      </router-link>
      <p class="mt-3 text-white"><small>v0.1.0</small></p>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
  </header>
  <main>
    <router-view/>
  </main>
  <footer class="container-fluid">
    <div class="row">
      <div class="col p-2 mt-2">
        <p class="text-center"><small>Morshinin &copy; 2021. Themoviedb.com is the data source</small></p>
      </div>
    </div>
  </footer>
</template>
<script></script>

<style lang="scss">
.main-header {
  background: #34e89e;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #0f3443, #34e89e);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #0f3443, #34e89e); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
