<template>
  <base-dialog :show="!!error" title="An Error Occured!" @close="handleError">
  <p>{{ error }}</p>

  </base-dialog>
  <section>
    <artist-filter @change-filter="setFilters"></artist-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="loadArtists">Refresh</base-button>
        <base-button v-if="!isArtist && !isLoading" link to="/register">Register as Artist</base-button>
      </div>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="hasArtists">
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
import RequestItem from '../../components/requests/RequestItem.vue';
import BaseDialog from '../../components/ui/BaseDialog.vue';

export default {
  components: {
    ArtistItem,
    ArtistFilter,
    RequestItem,
    BaseDialog,
  },
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        anime: true,
        realistic: true,
        mecha: true,
        chibi: true,
      }
    };
  },
  computed: {
    isArtist() {
      return this.$store.getters['artists/isArtist'];
    },
    filteredArtists() {
      const artists = this.$store.getters['artists/artists'];
      return artists.filter((artist) => {
        if (this.activeFilters.anime && artist.areas.includes('anime')) {
          return true;
        }
        if (this.activeFilters.realistic && artist.areas.includes('realistic')) {
          return true;
        }
        if (this.activeFilters.chibi && artist.areas.includes('chibi')) {
          return true;
        }
        if (this.activeFilters.mecha && artist.areas.includes('mecha')) {
          return true;
        }
        return false;
      });
    },
    hasArtists() {
      return !this.isLoading && this.$store.getters['artists/hasArtists'];
    },
  },
  created() {
    this.loadArtists();
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadArtists() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('artists/loadArtists');
        } catch (error) {
          this.error = error.message || 'Something went wrong!';
        }
     this.isLoading = false;
    },
    handleError() {
      this.error = null;
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