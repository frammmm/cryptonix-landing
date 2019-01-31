<template>
  <section class="contact-us">
    <div class="container">
      <p class="contact-us__hello">Hello there. How can we help?</p>
      <p class="contact-us__text">If you’re experiencing product issues, not to worry contact our Support Team.<br>We’ll be in touch as soon as we can.</p>
      <form 
        class="contact-us__form row" 
        action="/contact" 
        method="POST"
      >
        <div class="field field--half">
          <input 
            type="text" 
            name="firstname"
            autocomplete="off"
            placeholder="First name" 
            required
          >
        </div>
        <div class="field field--half">
          <input 
            type="text" 
            name="lastname"
            autocomplete="off"
            placeholder="Last name" 
            required
          >
        </div>
        <div class="field">
          <input 
            type="text" 
            name="email"
            autocomplete="off"
            placeholder="Email name" 
            required
          >
        </div>
        <div class="field">
          <input 
            type="text" 
            name="company"
            autocomplete="off"
            placeholder="Company" 
            required
          >
        </div>
        <div class="field">
          <textarea 
            type="text" 
            name="company"
            autocomplete="off"
            placeholder="ENQUIRY MESSAGE…" 
            required
          />
        </div>
        <div class="field field--half">
          <button 
            class="contact-us__submit" 
            type="submit" 
            name="submit"
          >Submit</button>
        </div>
        <div class="field field--half field--vac">
          <p class="contact-us__policy">
            By providing your information you agree to our 
            <router-link to="/" class="contact-us__link">privacy policy</router-link>.
          </p>
        </div>

      </form>
    </div>
  </section>
</template>

<script>
import RouteMixin from "@/mixins/RouteMixin";

export default {
  mixins: [RouteMixin],
  data() {
    return {
      routeTitle: "Contact Us"
    };
  }
};
</script>

<style lang="sass">
@import contact
</style>


