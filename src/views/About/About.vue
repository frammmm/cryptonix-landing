<template>
  <div>
    <section class="video">
      <video 
        ref="video"
        loop
        muted
        poster="@/assets/img/about.jpg"
        @click="changeVideoState"
        @pause="pauseVideo"
        @play="playVideo"
      >
        <source src="@/assets/media/about.mp4" type="video/mp4">
      </video>

      <transition name="fade">
        <div 
          v-if="!isPlaying"
          class="video-controls"
          @click="changeVideoState"
        >
          <button class="play-button"/>
        </div>
      </transition>

      <transition name="slide-down">
        <div v-if="!isPlaying" class="video__inner">
          <h3>Watching video</h3>
          <p>We’re growing fast, and we’re looking for extraordinary people to share their experience and expertise.</p>
          <router-link to="/signup"><button class="button">Create Account</button></router-link>
        </div>
      </transition>
    </section>
    <section class="features">
      <h2>Features</h2>

      <div class="features__list container">
        <div class="features__item">
          <div class="item__img"><img src="@/assets/img/about1.png" alt="Security"></div>
          <div class="item__info">
            <h4 class="item__header">Multiple security</h4>
            <p class="item__description">The private key under control Multiple signature technical support and two-step authorization verification Multiple verification methods to ensure the safety of digital assets</p>
            <a class="item__link" href="/">Read more</a>
          </div>
        </div>
        <div class="features__item">
          <div class="item__img"><img src="@/assets/img/about2.png" alt="All-in-one"></div>
          <div class="item__info">
            <h4 class="item__header">All in one</h4>
            <p class="item__description">Support the one-stop management of blockchain assets such as BTC, ETH , ACT and etc Compatibility for decentralization and centralization, assets under control</p>
            <a class="item__link" href="/">Read more</a>
          </div>
        </div>
        <div class="features__item">
          <div class="item__img"><img src="@/assets/img/about3.png" alt="Innocation"></div>
          <div class="item__info">
            <h4 class="item__header">Technology innovation</h4>
            <p class="item__description">Before starting Greenhouse, I spent a couple months traveling around the country, talking with CEOs about the things that kept them up at night.</p>
            <a class="item__link" href="/">Read more</a>
          </div>
        </div>
        <div class="features__item">
          <div class="item__img"><img src="@/assets/img/about4.png" alt="Card"></div>
          <div class="item__info">
            <h4 class="item__header">Cryptonix Card</h4>
            <p class="item__description">Seamless connection between the digital assets and the bank card, supporting global card consumption Cryptonix network, transfer payment second level confirmation.<br>Consumption with cashback and discount for every expenditure</p>
            <a class="item__link" href="/">Read more</a>
          </div>
        </div>
      </div>
    </section>
    <app-stats/>
  </div>
</template>

<script>
import RouteMixin from "@/mixins/RouteMixin";
import Stats from "@/components/Stats/Stats";

export default {
  components: {
    appStats: Stats
  },
  mixins: [RouteMixin],
  data() {
    return {
      routeTitle: "About Us",
      isPlaying: false
    };
  },
  methods: {
    changeVideoState: function(e) {
      if (this.$refs.video.paused) {
        this.$refs.video.play();
      } else {
        this.$refs.video.pause();
      }

      this.isPlaying = !this.isPlaying;
    },
    pauseVideo: function() {
      this.isPlaying = false;
    },
    playVideo: function() {
      const SCALE_RATIO = 1.2;

      const videoRect = this.$refs.video.getBoundingClientRect();
      const videoTop = videoRect.top;
      const videoHeight = videoRect.bottom - videoRect.top;
      const videoTruePosition =
        videoTop + (videoHeight - videoHeight / 1.2) / 2;

      window.scrollBy({
        left: 0,
        top: videoTruePosition,
        behavior: "smooth"
      });
      this.isPlaying = true;
    }
  }
};
</script>

<style lang="sass">
@import about
</style>


