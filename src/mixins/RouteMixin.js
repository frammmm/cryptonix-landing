import eventBus from '@/eventBus'

export default {
  methods: {
    changeHeaderTitle() {
      const title = this.routeTitle;

      if (title) {
        eventBus.$emit('routeTitleChange', this.routeTitle)
      }
    },
  },

  created() {
    this.changeHeaderTitle();
  }
}