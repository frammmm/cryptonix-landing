<template>
  <footer class="minfooter">
    <div class="minfooter__container container">
      <ul v-if="socials !== undefined" class="socials">
        <li>
          <router-link to="/">Facebook</router-link>
        </li>
        <li>
          <router-link to="/">Twitter</router-link>
        </li>
        <li>
          <router-link to="/">Blog</router-link>
        </li>
      </ul>
      <ul v-if="subnav !== undefined" class="subnav">
        <li class="subnav__item">
          <router-link to="/" class="subnav__link">Terms of service</router-link>
        </li>
        <li class="subnav__item">
          <router-link to="/contact" class="subnav__link">Contact</router-link>
        </li>
        <li class="subnav__item">
          <router-link to="/" class="subnav__link">Support</router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
   socials: {
     type: Boolean,
     default: false
   },
   subnav: {
     type: Boolean,
     default: false
   }
  },
};
</script>

<style lang="sass">
@import minfooter
</style>


