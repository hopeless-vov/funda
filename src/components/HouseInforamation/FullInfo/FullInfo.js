export default {
  name: 'FullInfo',
  props: {
    house: {
      type: Object,
      default: () => null
    },
  },
  data() {
    return {
      // Added just for looks
      navigation: [
        {
          name: 'Overview',
          value: 'overview'
        },
        {
          name: 'Rental value',
          value: 'rental'
        },
        {
          name: 'Home Value',
          value: 'homeValue'
        },
        {
          name: 'Price and tax history',
          value: 'history'
        },
        {
          name: 'Monthly cost',
          value: 'cost'
        },
        {
          name: 'Similar homes',
          value: 'similarHomes'
        },
        {
          name: 'Local legal protections',
          value: 'protections'
        },
        {
          name: 'Neighborhood',
          value: 'neighborhood'
        }
      ],
      showContent: false
    }
  },
  computed: {
    fullNavigationList() {
      const newNavigationList = this.house.characteristics.map(el => ({
        name: el.Titel,
        value: el.Titel.toLowerCase()
      }))
      return [...newNavigationList, ...this.navigation]
    }
  }
}
