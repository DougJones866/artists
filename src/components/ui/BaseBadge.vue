<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    }
  }
}
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.anime {
  background-color: #3d008d;
  color: white;
}

.mecha {
  background-color: #71008d;
  color: white;
}

.realistic {
  background-color: #8d006e;
  color: white;
}

.chibi {
  background-color: #1f008d;
  color: white;
}
</style>