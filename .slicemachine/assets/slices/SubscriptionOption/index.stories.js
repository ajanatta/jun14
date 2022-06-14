import MyComponent from '../../../../slices/SubscriptionOption';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SubscriptionOption'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default","name":"Default","slice_type":"subscription_option","items":[],"primary":{"title":[{"type":"heading1","text":"Unleash bleeding-edge bandwidth","spans":[]}],"description":[{"type":"paragraph","text":"Eiusmod dolore ea irure occaecat qui non veniam fugiat veniam ullamco exercitation occaecat.","spans":[]}],"price":9686,"serving":"exploit robust architectures","subtitle":"unleash global systems","":[{"type":"paragraph","text":"Est reprehenderit dolore ad commodo. Pariatur ullamco non eu quis consectetur velit.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'

export const _Recommended = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"recommended","name":"recommended","slice_type":"subscription_option","items":[],"primary":{"title":[{"type":"heading1","text":"Reintermediate synergistic infomediaries","spans":[]}],"description":[{"type":"paragraph","text":"Ad cupidatat id voluptate anim laborum aute amet aliqua deserunt deserunt ullamco. Est nulla pariatur excepteur.","spans":[]}],"price":8158,"serving":"streamline compelling functionalities","subtitle":"harness distributed communities","":[{"type":"paragraph","text":"Officia ullamco deserunt fugiat sunt.","spans":[]}]},"id":"_Recommended"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Recommended.storyName = 'recommended'
