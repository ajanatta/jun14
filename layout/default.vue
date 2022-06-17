<template>
  <Nuxt />
</template>

<script>

export default {
  mounted() {
    if(process.client) {
      window.VWO.push([
          'onVariationApplied',
          (data) => {
            console.log(data);
          }
      ]);
    }

  }
}

</script>

<style>

</style>