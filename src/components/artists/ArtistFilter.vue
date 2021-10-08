<template>
  <base-card>
    <h2>Find your artist</h2>
    <span class="filter option">
        <input type="checkbox" id="realistic" checked @change="setFilter">
        <label for="realistic">Realistic</label>
    </span>
    <span class="filter option">
        <input type="checkbox" id="anime" checked @change="setFilter">
        <label for="anime">Anime</label>
    </span>
    <span class="filter option">
        <input type="checkbox" id="chibi" checked @change="setFilter">
        <label for="chibi">Chibi</label>
    </span>
    <span class="filter option">
        <input type="checkbox" id="mecha" checked @change="setFilter">
        <label for="mecha">Mecha</label>
    </span>
    </base-card>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        realistic: true,
        anime: true,
        chibi: true,
        mecha: true,
      }
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive
      };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    }
  }
}
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>