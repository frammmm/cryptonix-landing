<template>
  <div class="page__navigation">
    <h2 class="page__title">{{ routeTitle }}</h2>
    <app-navigation/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation/Navigation';

import eventBus from '@/eventBus'

export default {
  components: {
    appNavigation: Navigation
  },
  data() {
    return {
      routeTitle: ''
    }
  },
  created() {
    eventBus.$on('routeTitleChange', (title) => {
      this.routeTitle = title;
    })
  }
};
</script>

<style lang="sass">
@import pagenavigation
</style>

