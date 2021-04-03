<template>
  <header class="header">
    <div class="header__container container">
      <router-link 
        class="header__logo" 
        to="/" 
        active-class="" 
        exact-active-class=""
      >cryptonix</router-link>

      <div class="header__right">
        <router-link class="header__button" to="/signup">Sign up</router-link>
        <router-link class="header__button" to="/login">Log in</router-link>

        <button class="header__menu">
          <span class="bar bar--top"/>
          <span class="bar bar--middle"/>
          <span class="bar bar--bottom"/>
        </button>
      </div>
    </div>
  </header>
</template>

<style lang="sass">
@import header
</style>
