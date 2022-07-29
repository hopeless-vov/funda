export default {
  name: 'ImageGallery',
  props: {
    photos: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    openFullSize(url, id) {
      this.$emit('showFullSize', {id, url})
    }
  },
}
