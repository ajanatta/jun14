<template>
  <div class="container">
    <NuxtLink to="/about">About</NuxtLink>
    <Offers />
    <Ingredients />
  </div>
</template>


<script>
export default {
  name: 'IndexPage',
  
}
</script>

<style>
.container {
  font-family: "Roboto";
  background-color: #dae7d4;
  border:1px solid #ccc;
  padding:0 20px;
  font-weight: 100;
}

</style>