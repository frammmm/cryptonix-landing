export default {
  methods: {
    setTheme(theme) {
      document.body.classList.add(`theme-${theme}`);
    },

    removeTheme() {
      const theme = this.$route.meta.theme;
      
      if (theme) {
        document.body.classList.remove(`theme-${theme}`);
      }
    }
  },

  beforeRouteLeave (to, from, next) {
    const nextTheme = to.meta.theme;

    if (nextTheme) {
      this.setTheme(nextTheme)
    } else {
      this.removeTheme();
    }

    next();
  },

  created() {
    this.setTheme(this.$route.meta.theme);
  }
}