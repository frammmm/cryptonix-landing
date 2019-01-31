<template>
  <div class="signup">
    <section class="signup-container container">
      <div class="column-6 push-2">
        <h2>Sign Up</h2>
        <form 
          class="signup-form row" 
          action="" 
          method="POST"
        >
          <div class="field field--light">
            <input 
              type="text" 
              name="name"
              autocomplete="off"
              placeholder="Name" 
              required
            >
          </div>
          <div class="field field--light">
            <input 
              type="email" 
              name="email"
              autocomplete="off"
              placeholder="Email" 
              required
            >
          </div>
          <div class="field field--light">
            <input 
              type="password" 
              name="password"
              autocomplete="off"
              placeholder="Password" 
              minlength="6"
              required
            >
          </div>
          <div class="field field--half field--light">
            <button 
              class="signup-form__submit" 
              type="submit" 
              name="submit"
            >CREATE ACCOUNT</button>
          </div>
        </form>
        <div>
          <router-link class="signup-link" to="/login">Already have an account? Log in</router-link>
        </div>
      </div>
    </section>
    <app-footer socials/>
  </div>
</template>

<script>
import ThemedRoute from "@/mixins/ThemedRouteMixin";
import Footer from "@/components/Footer/MinFooter";

export default {
  components: {
    appFooter: Footer
  },
  mixins: [ThemedRoute]
};
</script>

<style lang="sass">
@import signup
</style>


