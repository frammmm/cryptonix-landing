<template>
  <div class="login">
    <section class="login-container container">
      <div class="column-6 push-2">
        <h2>Log In</h2>
        <form 
          class="login-form row" 
          action="/" 
          method="POST"
        >
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
              required  
            >
          </div>
          <div class="field field--half field--light">
            <button 
              class="login-form__submit" 
              type="submit" 
              name="submit"
            >LOG IN</button>
          </div>
        </form>
        <div class="login-form__under">
          <router-link class="login-link" to="/">Forgot password</router-link>
          <router-link class="login-link" to="/signup">Don't have an account</router-link>
        </div>
      </div>
    </section>
    <app-footer socials subnav/>
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
@import login
</style>
