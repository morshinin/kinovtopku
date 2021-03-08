<template>
  <header class="main-header shadow mb-4">
    <nav class="navbar navbar-expand-lg navbar-light">
      <router-link to="/" class="navbar-brand d-flex align-items-center">
        <img :src="require('@/assets/fine.png')" alt="Kinovtopku logo" width="40" height="42">
        <h2 class="main-title text-white pl-2">Kino<span class="font-weight-lighter">Vtopku</span></h2>
      </router-link>
      <p class="mt-3 text-white"><small>v0.1.0</small></p>
      <div class="ml-auto">
        <a href="https://github.com/morshinin/kinovtopku" class="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
        </a>
      </div>
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
