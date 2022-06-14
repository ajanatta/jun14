import MyComponent from '../../../../slices/RecommendedSubscriptionOption';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/RecommendedSubscriptionOption'
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
      mock: {"variation":"default","name":"Default","slice_type":"recommended_subscription_option","items":[],"primary":{"title":[{"type":"heading1","text":"Incubate 24/7 synergies","spans":[]}],"description":[{"type":"paragraph","text":"Magna minim anim fugiat nostrud.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
