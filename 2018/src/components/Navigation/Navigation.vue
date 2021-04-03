<template>
  <nav class="navigation">
    <ul class="nav">
      <router-link 
        exact-active-class="is-active" 
        active-class="" 
        class="nav__item" 
        tag="li" 
        to="/about"
      >
        <a class="nav__link">About</a>
      </router-link>
      <router-link 
        exact-active-class="is-active" 
        active-class="" 
        class="nav__item" 
        tag="li" 
        to="/team"
      >
        <a class="nav__link">Our team</a>
      </router-link>
      <router-link 
        exact-active-class="is-active" 
        active-class="" 
        class="nav__item" 
        tag="li" 
        to="/careers"
      >
        <a class="nav__link">Careers</a>
      </router-link>
      <router-link 
        exact-active-class="is-active" 
        active-class="" 
        class="nav__item" 
        tag="li" 
        to="/contact"
      >
        <a class="nav__link">Contact us</a>
      </router-link>
    </ul>
  </nav>
</template>

<style lang="sass">
@import navigation
</style>
