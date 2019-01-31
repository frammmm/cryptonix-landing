<template>
  <div class="page">
    <app-navigation/>
    <transition name="fade-up">
      <router-view/>
    </transition>
    <app-footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer/Footer'
import PageNavigation from '@/components/PageNavigation/PageNavigation';

export default {
  components: {
    appFooter: Footer,
    appNavigation: PageNavigation
  }
}
</script>

<style lang="sass">
@import '../../styles/mixins'

.page
  padding-top: 100px

  +r(768)
    padding-top: 60px
</style>

