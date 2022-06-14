<template>
  <div class="m-5">

  <div class="flex justify-center">
    Hello!
  </div>
  
</div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ $prismic, error }) {
    try {
      const offerSection = (await $prismic.api.getSingle('offer-section')).data;
      console.log(offerSection);
      return { 
        offerSection 
      } 
    } catch {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>
