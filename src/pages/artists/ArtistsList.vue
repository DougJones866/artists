<template>
  <section>
    <artist-filter @change-filter="setFilters"></artist-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button v-if="!isArtist" link to="/register">Register as Artist</base-button>
      </div>
      <ul v-if="hasArtists">
        <artist-item
          v-for="artist in filteredArtists"
          :key="artist.id"
          :id="artist.id"
          :first-name="artist.firstName"
          :last-name="artist.lastName"
          :rate="artist.hourlyRate"
          :areas="artist.areas"
        ></artist-item>
      </ul>
      <h3 v-else>No artists found.</h3>
    </base-card>
  </section>
</template>

<script>
import ArtistItem from '../../components/artists/ArtistItem.vue';
import ArtistFilter from '../../components/artists/ArtistFilter.vue';

export default {
  components: {
    ArtistItem,
    ArtistFilter,
  },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    isArtist() {
      return this.$store.getters['artists/isArtist'];
    },
    filteredArtists() {
      const artists = this.$store.getters['artists/artists'];
      return artists.filter((artist) => {
        if (this.activeFilters.frontend && artist.areas.includes('anime')) {
          return true;
        }
        if (this.activeFilters.backend && artist.areas.includes('realistic')) {
          return true;
        }
        if (this.activeFilters.career && artist.areas.includes('chibi')) {
          return true;
        }
        if (this.activeFilters.career && artist.areas.includes('mecha')) {
          return true;
        }
        return false;
      });
    },
    hasArtists() {
      return this.$store.getters['artists/hasArtists'];
    },
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>