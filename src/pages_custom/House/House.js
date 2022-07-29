import { HTTP } from '@/plugins/http-common';
import Carousel from '@/components/ImageWrapper/ImageCarousel/ImageCarousel.vue'
import Gallery from '@/components/ImageWrapper/ImageGallery/ImageGallery.vue'
import FullSizeImage from '@/components/ImageWrapper/FullSizeImage/FullSizeImage.vue'
import HouseInforamation from '@/components/HouseInforamation/HouseInforamation.vue'

export default {
  name: 'House',
  components: {
    Carousel,
    Gallery,
    FullSizeImage,
    HouseInforamation
  },
  data () {
    return {
      house: null,
      window: {
        width: 0,
        height: 0
      },
      fullSizeImage: null,
      fullSize: false
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  async mounted() {
    await this.getHouse()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  computed: {
    media() {
      return this.house?.media
    },
    // Get only images url from Objects
    imagesUrl() {
      if (!this.media) {
        return
      }
      const filtered = this.media.filter(el => el.MediaItems[el.MediaItems.length - 1].Url.includes('jpg'))
      return filtered.map(el => el.MediaItems[el.MediaItems.length - 1].Url)
    },
    windowResize() {
      if (this.window.width <= 885) {
        return 'auto'
      } else {
        return `${this.window.height - 120}px`
      }
    }
  },
  methods: {
    async getHouse() {
      try {
        const { data } = await HTTP.get('985aed71-0ca1-40b5-ba72-0656bfe07d55');
        this.house = {
          media: data.Media,
          characteristics: data.Kenmerken,
          house_info: {
            address: data.Adres,
            number: data.MakelaarTelefoon,
            price: data.KoopPrijs,
            full_description:  data.VolledigeOmschrijving,
          }
        }
      } catch(err) {
        console.log('error', err);
      }
    },
    closeFullSize() {
      this.fullSize = false
      this.fullSizeImage  = null
    },
    showFullSize(value) {
      this.fullSize = true
      this.fullSizeImage = value
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    }
  },
}
