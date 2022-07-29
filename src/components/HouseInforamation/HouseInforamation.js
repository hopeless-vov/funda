import FullInfo from './FullInfo/FullInfo.vue'

export default {
  name: 'HouseInforamation',
  components: {
    FullInfo
  },
  props: {
    house: {
      type: Object,
      default: () => null
    }
  },
  computed: {
    formatedPrice() {
      return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(this.house.house_info.price)
    }
  },
}
