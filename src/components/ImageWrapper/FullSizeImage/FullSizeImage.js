export default {
  name: 'FullSizeImage',
  props: {
    fullSizeImage: {
      type: Object,
      default: () => null
    },
    photosCount: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
    }
  },
  methods: {
    closeFullSize() {
      this.$emit('closeFullSize')
    }
  },
}
