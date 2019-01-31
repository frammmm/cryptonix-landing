<template>
  <div class="container" @click="handlePageClick">
    <p class="quote">We’re growing fast, and we’re looking for extraordinary people to share their experience and expertise.<br>Join Cryptonix, and help us move work forward. </p>
    <section class="positions">
      <h3>Open positions</h3>
 
      <div class="positions__inner">
        <div class="column-5">
          <div class="categories">
            <button 
              v-for="category in availableCategories" 
              :key="category.id" 
              :class="['categories__item', selectedCategory === category.id && 'is-active']"
              @click="handleCategorySelect(category.id)"
            >{{ category.name }}</button>
          </div>
        </div>
        <div class="column-11">
          <div class="positions__right-header">
            <p>We’re hiring for a number of different positions around the world.</p>
            <div :class="['dropdown', 'is-right', dropdownState && 'is-active']">
              <div class="dropdown__trigger" @click.stop="handleDropdown">
                <button class="dropdown__button">
                  {{ selectedLocationName }}
                  <svg class="icon icon-dropdown">
                    <use xlink:href="@/assets/img/sprite.svg#dropdown"/>
                  </svg>
                </button>
              </div>
              <div class="dropdown__menu">
                <div class="dropdown__content">
                  <div 
                    v-for="location in availableLocations" 
                    :key="location.id" 
                    class="dropdown__item" 
                    @click.stop="handleDropdownValue(location.id)"
                  >{{ location.location }}</div>
                </div>
              </div>
            </div>
          </div>  
          <!-- end positions__right-header -->
          <div class="positions__list">
            <div 
              v-for="position in availablePositions" 
              :key="position.id" 
              class="positions__item"
            >
              <div class="item">
                <div class="item__category">{{ position.category }}</div>
                <div class="item__name">{{ position.name }}</div>
                <div class="item__bottom">
                  <div class="item__location">
                    <svg class="icon icon-location">
                      <use xlink:href="@/assets/img/sprite.svg#location"/>
                    </svg>
                    {{ position.location }}
                  </div>
                  <button class="item__apply">Apply now</button>
                </div>
                
              </div>
            </div>
          </div>
          <!-- end positions__list -->
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
      routeTitle: "Careers",
      availableCategories: [
        {
          id: -1,
          name: "All"
        },
        {
          id: 0,
          name: "Business Operations"
        },
        {
          id: 1,
          name: "Engineering"
        },
        {
          id: 2,
          name: "Desing"
        },
        {
          id: 3,
          name: "Finance"
        },
        {
          id: 4,
          name: "Data Science"
        },
        {
          id: 5,
          name: "Marketing"
        },
        {
          id: 6,
          name: "Partnerships"
        },
        {
          id: 7,
          name: "Sales"
        },
        {
          id: 8,
          name: "Tech"
        }
      ],
      availablePositions: [
        {
          id: "1",
          category: "Engineering",
          name: "Senior Python Developer",
          location: "Chicago"
        },
        {
          id: "2",
          category: "Engineering",
          name: "Security Engineer",
          location: "San Francisco"
        },
        {
          id: "3",
          category: "Sales",
          name: "Manager, Sales Development",
          location: "Moscow"
        },
        {
          id: "4",
          category: "Marketing",
          name: "Head of Marketing Operations",
          location: "New York City"
        },
        {
          id: "5",
          category: "Design",
          name: "UX-designer",
          location: "Dublin"
        },
        {
          id: "6",
          category: "Engineering",
          name: "Senior JavaScript Developer",
          location: "Berlin"
        }
      ],
      dropdownState: false,
      selectedCategory: -1,
      selectedLocation: -1
    };
  },
  computed: {
    availableLocations() {
      const locations = this.availablePositions.map(value => value.location);

      return locations
        .filter((value, index, array) => array.indexOf(value) === index)
        .map((value, index) => ({ id: index, location: value }));
    },
    selectedLocationName() {
      if (this.selectedLocation === -1) return "All locations";

      return this.availableLocations.filter(
        value => value.id === this.selectedLocation
      )[0].location;
    }
  },
  methods: {
    handleCategorySelect(id) {
      this.selectedCategory = id;
    },
    handleDropdown() {
      this.dropdownState = !this.dropdownState;
    },
    handleDropdownValue(locationId) {
      this.selectedLocation = locationId;
      this.dropdownState = false;
    },
    handlePageClick() {
      if (this.dropdownState) this.dropdownState = false;
    }
  }
};
</script>

<style lang="sass">
@import careers
</style>





