<template>
  <section>
      <p v-if="$fetchState.pending">Loading....</p>
      <p v-else-if="$fetchState.error">Error while fetching mountains</p>
      <div v-else>
        <div class="title">{{ data.primary.title }}</div>
        <div class="sub-title">{{ data.primary.subtitle }}</div>

        <ul>
          <li v-for="feature in data.features" :key="feature.text"> {{ feature.text }}</li>
        </ul>
      </div>
  </section>
</template>


<script>
export default {
  name: 'Ingredients',
  data: () => ({
    data: {}
  }),
  async fetch() {
      const response = await this.$prismic.api.getSingle('safe-ingredients');
      this.data = response.data.body[0];
  }
}
</script>

<style scoped>

.title {
  margin-bottom: 10px;
}
.sub-title {
  font-size: 0.9rem;
}

ul {
  display: flex;
}

</style>
