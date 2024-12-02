<template>
  <div class="container">
    <section class="ourteam">
      <div class="cards row">
        <div
          v-for="emp in employees"
          :key="emp.id"
          class="card"
        >
          <img :src="emp.image" class="card__top-image">
          <div class="card__body">
            <h5 class="card__title">{{ emp.name }}</h5>
            <p class="card__text">{{ emp.position }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import RouteMixin from "@/mixins/RouteMixin";

export default {
  mixins: [RouteMixin],
  data: function() {
    return {
      routeTitle: "The Cryptonix Team",
      employees: [
        {
          id: 1,
          name: "Amanda Melnicenco",
          position: "Co-Founder, CEO",
          image: require("@cryptonix-landing/shared/assets/img/team-amanda.jpg")
        },
        {
          id: 2,
          name: "Kelly Tang",
          position: "Founder, Chairman and CEO",
          image: require("@cryptonix-landing/shared/assets/img/team-kelly.jpg")
        },
        {
          id: 3,
          name: "Aaron Voisine",
          position: "PRESIDENT & CO-FOUNDER",
          image: require("@cryptonix-landing/shared/assets/img/team-aaron.jpg")
        },
        {
          id: 4,
          name: "Benedikt Schuppli",
          position: "DEVELOPER",
          image: require("@cryptonix-landing/shared/assets/img/team-benedikt.jpg")
        },
        {
          id: 5,
          name: "Achim Thiemermann",
          position: "DEVELOPER",
          image: require("@cryptonix-landing/shared/assets/img/team-achim.jpg")
        },
        {
          id: 6,
          name: "Jon Oringer",
          position: "Chief Human Resources Officer",
          image: require("@cryptonix-landing/shared/assets/img/team-jon.jpg")
        },
        {
          id: 7,
          name: "Marty Brodbeck",
          position: "DEVELOPER",
          image: require("@cryptonix-landing/shared/assets/img/team-marty.jpg")
        },
        {
          id: 8,
          name: "Eric Paquet",
          position: "DEVELOPER",
          image: require("@cryptonix-landing/shared/assets/img/team-eric.jpg")
        },
        {
          id: 9,
          name: "Sam Sutch",
          position: "CHIEF REVENUE OFFICER",
          image: require("@cryptonix-landing/shared/assets/img/team-sam.jpg")
        },
        {
          id: 10,
          name: "Charlie Lee",
          position: "International Operations",
          image: require("@cryptonix-landing/shared/assets/img/team-charlie.jpg")
        },
        {
          id: 11,
          name: "James MacWhyte",
          position: "DEVELOPER",
          image: require("@cryptonix-landing/shared/assets/img/team-james.jpg")
        },
        {
          id: 12,
          name: "Lisa Nadler",
          position: "DESIGNER",
          image: require("@cryptonix-landing/shared/assets/img/team-lisa.jpg")
        }
      ]
    };
  }
};
</script>

<style lang="sass">
@import team
</style>
