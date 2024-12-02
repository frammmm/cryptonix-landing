<template>
  <div>
    <app-header/>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Header from '@/components/Header/Header'

export default {
  components: {
    appHeader: Header
  }
}
</script>

