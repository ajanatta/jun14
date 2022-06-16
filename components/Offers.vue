<template>
  <section class="offer-container">
      <p v-if="$fetchState.pending">Loading....</p>
      <p v-else-if="$fetchState.error">Error while fetching mountains</p>
      <div v-else>
        <img :src="data.primary.logo.url" class="logo" />
        <div class="description">
          {{ data.primary.description }}
        </div>
        <template v-for="offer in data.items">
          <div class="offer" v-bind:key="offer.price">
            <div class="header">
              <div class="offer-badge" v-if="offer['offer-badge']"> {{ offer["offer-badge"] }} </div>
              <h3>{{ offer.plan }}</h3>
              <span class="header-price">${{ offer.price }}</span>
              <span class="header-old-price" v-if="offer['old-price']"> ${{ offer['old-price'] }} </span>
              <div class="header-serving">$3.30 Per Serving</div>
            </div>

            <div class="body">
              <img alt="AG1 Product" :src="offer['product-image'].url" />
              <div class="hr" />
              <div class="body-sub-title">Try out AG1</div>
              <ul>
                  <li v-for="feature in offer.features" v-bind:key="feature">{{ feature.text }}</li>
              </ul>
            </div>

            <div class="footer">
              <a href="#">Buy Now</a>
              <div class="footer-text"> 
                {{ offer['footer-text'] }}
              </div>
            </div>          
          </div>
        </template>
      </div>
  </section>
</template>


<script>
export default {
  name: 'Offers',
  data: () => ({
    data: {}
  }),
  async fetch() {
      const response = await this.$prismic.api.getSingle('offer-section');
      this.data = response.data.body[0];
  }
}
</script>

<style scoped>


.logo {
  width: 128px;
}
.description {
  font-weight: 100;
  margin-bottom: 20px;
}

.offer {
  border:3px solid #002f30;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: auto;
  background-color: #fff;
  margin: 0 auto 20px;
}

.header h3 {
  font-weight: bold;
  margin-bottom: 5px;
}

.header .offer-badge {
    color: #fff;
    text-align: center;
    background-color: #d96535;
    margin: -20px -20px 0 -20px;
    padding: 5px;
}

.header .header-price {
  font-weight: 100;
}

.header .header-old-price {
  font-weight: 100;
  text-decoration: line-through;
  color: #b1b1b1;
}

.header .header-serving {
  color: #2f7d39;
  font-weight: 100;
  font-size: 0.9rem;
  margin-top: 5px;
}

.body img {
  max-width: 100%;
}


.body ul li {
  font-size: 14px;
  font-weight: 100;
  margin-bottom: 10px;
  position: relative;
  list-style: none;
}
.body ul li::before {

  content: " ";
  background-image: url(~assets/images/tick.svg);
  background-repeat: no-repeat;
  height: 20px;
  width: 20px;
  left: -30px;
  position: absolute;
}

.hr {
  border-top: 1px solid #000;
  margin-bottom: 20px;
}

.footer-text {
  text-align: center;
  position: relative;
  font-weight: 100;
  margin-top: 14px;
  font-size: 0.9rem;
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
