<template>
  <div>
    <section
      ref="slider"
      class="slider"
      @wheel="handleScroll"
    >
      <div :data-slide="activeSlide + 1" class="slider__list">
        <div
          v-for="slide in slides"
          :class="['slide', activeSlide === slide.id && 'is-active', direction === 1 && 'from-top', direction === -1 && 'from-bottom']"
          :key="slide.id"
        >
          <div
            v-for="i in 4"
            :key="i"
            class="slide__borders"
          />
          <img
            :src="slide.image"
            class="slide__image"
            alt=""
          >
          <div class="slide__inner container">
            <div class="slide__text push-2">{{ slide.text }}</div>
            <button :tabindex="activeSlide !== slide.id && -1" class="slide__action push-2">Get a free wallet</button>
          </div>
        </div>
      </div>
      <div class="slider__pagination">
        <ul class="pagination container">
          <li
            v-for="slide in slides"
            :class="['pagination__item', activeSlide === slide.id && 'is-active']"
            :key="slide.id"
          />
          <div class="pagination__pointer"/>
        </ul>
      </div>
    </section>
    <app-footer socials/>
  </div>
</template>

<script>
import MinFooter from "@/components/Footer/MinFooter";
export default {
  components: {
    appFooter: MinFooter
  },
  filters: {
    formatNumber(num) {
      return num.toString().padStart(2, "0");
    }
  },
  data() {
    return {
      activeSlide: 0,
      canGo: true,
      delay: 1700,
      direction: 0,
      isTouch: typeof window !== "undefined" && "ontouchstart" in window,
      slides: [
        {
          id: 0,
          text:
            "Exchange between all popular currencies with a couple of clicks",
          image: require("@cryptonix-landing/shared/assets/img/slide1.jpg"),
          url: "@cryptonix-landing/shared/assets/img/slide1.jpg"
        },
        {
          id: 1,
          text: "The leading platform for professional cryptocurrency traders",
          image: require("@cryptonix-landing/shared/assets/img/slide2.jpg"),
          url: "@cryptonix-landing/shared/assets/img/slide2.jpg"
        },
        {
          id: 2,
          text: "Multi-Currency Wallet That Actually Works",
          image: require("@cryptonix-landing/shared/assets/img/slide3.jpg"),
          url: "@cryptonix-landing/shared/assets/img/slide3.jpg"
        },
        {
          id: 3,
          text: "Unlimited free transfers between Cryptonix account holders",
          image: require("@cryptonix-landing/shared/assets/img/slide4.jpg"),
          url: "@cryptonix-landing/shared/assets/img/slide4.jpg"
        }
      ]
    };
  },

  created() {
    this.prefetchSlideIfNeeded(0, true);
  },

  mounted() {
    if (this.isTouch) {
      this.$refs.slider.addEventListener("touchstart", this.handleTouchStart);
      this.$refs.slider.addEventListener("touchend", this.handleTouchEnd);
    }
  },

  methods: {
    changeSlide(direction) {
      this.canGo = false;
      this.activeSlide += direction;
      this.direction = direction;

      setTimeout(() => {
        this.canGo = true;
      }, this.delay);
    },

    handleScroll(e) {
      if (!this.canGo) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextSlide = this.activeSlide + direction;

      if (nextSlide > this.slides.length - 1 || nextSlide < 0) return;

      this.changeSlide(direction);
    },

    handleTouchStart(e) {
      // console.log(e);
    },

    handleTouchEnd(e) {
      // console.log(e);
    },

    prefetchSlide(candidate) {
      const image = new Image();

      image.onload = () => {
        const idx = this.slides.indexOf(candidate);

        this.slides[idx].image = image.src;
      };

      image.src = candidate.url;
    },

    prefetchSlideIfNeeded(slideId, next = false) {
      const candidate = this.slides.filter(
        value => !value.image && value.id === slideId + (next && 1)
      )[0];

      if (candidate) {
        this.prefetchSlide(candidate);
      }
    }
  },
  watch: {
    activeSlide: function(newActiveSlide) {
      this.prefetchSlideIfNeeded(newActiveSlide, true);
    }
  }
};
</script>

<style lang="sass">
@import slider
</style>
