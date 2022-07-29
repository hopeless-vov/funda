export default {
  name: 'ImageCarousel',
  props: {
    photos: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    prev() {
      if (this.counter === 0) {
        this.counter = this.photos.length - 1
      } else {
        this.counter--
      }
    },
    next() {
      if (this.counter === this.photos.length - 1) {
        this.counter = 0
      } else {
        this.counter++
      }
    },
    openFullSize() {
      this.$emit('showFullSize', {id: this.counter, url: this.photos[this.counter]})
    }
  },
}
