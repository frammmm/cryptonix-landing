<template>
  <footer class="footer">
    <div class="footer__logo">
      <svg class="icon icon-logo">
        <use xlink:href="@cryptonix-landing/shared/assets/img/sprite.svg#logo"/>
      </svg>
    </div>
    <ul class="nav">
      <li class="nav__item">
        <router-link to="/" class="nav__link">Wallet</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/" class="nav__link">Calculator</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/" class="nav__link">Markets</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/" class="nav__link">Trading</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/" class="nav__link">Crypto News</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/" class="nav__link">Blockchain Events</router-link>
      </li>
    </ul>

    <ul class="socials">
      <li class="socials__item">
        <a href="/" class="socials__link">
          <svg class="icon icon-google">
            <use xlink:href="@cryptonix-landing/shared/assets/img/sprite.svg#google"/>
          </svg>
        </a>
      </li>
      <li class="socials__item">
        <a href="/" class="socials__link">
          <svg class="icon icon-facebook">
            <use xlink:href="@cryptonix-landing/shared/assets/img/sprite.svg#facebook"/>
          </svg>
        </a>
      </li>
      <li class="socials__item">
        <a href="/" class="socials__link">
          <svg class="icon icon-behance">
            <use xlink:href="@cryptonix-landing/shared/assets/img/sprite.svg#behance"/>
          </svg>
        </a>
      </li>
      <li class="socials__item">
        <a href="/" class="socials__link">
          <svg class="icon icon-linkedin">
            <use xlink:href="@cryptonix-landing/shared/assets/img/sprite.svg#linkedin"/>
          </svg>
        </a>
      </li>
      <li class="socials__item">
        <a href="/" class="socials__link">
          <svg class="icon icon-twitter">
            <use xlink:href="@cryptonix-landing/shared/assets/img/sprite.svg#twitter"/>
          </svg>
        </a>
      </li>
    </ul>

    <ul class="subnav">
      <li class="subnav__item">
        <router-link to="/" class="subnav__link">Terms of service</router-link>
      </li>
      <li class="subnav__item">
        <router-link to="/contact" class="subnav__link">Contact</router-link>
      </li>
      <li class="subnav__item">
        <router-link to="/" class="subnav__link">Support</router-link>
      </li>
    </ul>

    <div class="copyright">
      <p>CopyRight &copy; 2017-2018 Cryptonix Inc, San Francisco. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<style lang="sass">
@import footer
</style>
