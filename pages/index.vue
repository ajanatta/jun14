<template>
  <div class="container">
    <Offers />
    <Ingredients />
  </div>
</template>


<script>
export default {
  name: 'IndexPage',
  mounted() {
    console.log(window._vwo_exp);
  }
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