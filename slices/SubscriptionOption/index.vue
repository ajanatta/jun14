<template>
  <section class="section">
      <div class="header">
        <h3>One Time Purchase</h3>
        <div class="header-price">$99</div>
        <div class="header-serving">$3.30 Per Serving</div>
      </div>

      <div class="body">
        <img alt="AG1 Product" src="https://images.prismic.io/athletic-greens-new/24ce1a6d-4a77-4e2a-a481-47b13dab0334_newOTP_1.3.png?rect=0,0,594,504&q=80&auto=format&w=594" />
        <div class="hr" />
        <div class="body-sub-title">Try out AG1</div>
        <ul>
            <li>30 Servings of AG1</li>
            <li>Ships Once1</li>
        </ul>
      </div>

      <div class="footer">
        <a href="#">Buy Now</a>
      </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "SubscriptionOption",
  created: () => {
    const options = getSliceComponentProps(["slice", "index", "slices", "context"]);
  },
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>

<style scoped>
.section {
  font-family: "Roboto";
  border:1px solid #000;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 300px;
  margin: auto;
}

.header h3 {
  font-weight: bold;
  margin-bottom: 5px;
}

.header .header-price {
  font-weight: 100;
}

.header .header-serving {
  color: #2f7d39;
  font-weight: 100;
  font-size: 14px;
  margin-top: 5px;
}

.body img {
  max-width: 100%;
}

.hr {
  border-top: 1px solid #000;
  margin-bottom: 20px;
}

ul li {
  font-size: 14px;
  font-weight: 100;
  margin-bottom: 10px;
}

.footer {
  padding-top: 60px;
}

.footer a {
  color: #fff;
  background-color: #2f7d39;
  text-decoration: none;
  display: block;
  text-align: center;
  border-radius: 20px;
  padding: 10px;
}

</style>
