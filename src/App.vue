<template>
  <header class="main-header mb-4">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" class="navbar-brand d-flex align-items-center">
        <img :src="require('@/assets/fine.png')" alt="Kinovtopku logo" width="60" height="62">
        <h2 class="main-title">Kino<span class="font-weight-lighter">Vtopku</span></h2>
      </router-link>
      <p class="mt-3"><small>v0.1.0</small></p>
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

</style>
