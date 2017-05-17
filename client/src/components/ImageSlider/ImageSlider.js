import Vue from 'vue';
import Component from 'src/plugins/classComponent';

@Component({
  props: {
    images: Array,
  },
})
class ImageSlider extends Vue {
  time = 15000;
  currentNumber = 0;

  start(imgIndex = this.currentNumber) {
    this.currentNumber = imgIndex;
    const nextIndex = imgIndex < this.images.length - 1 ? imgIndex + 1 : 0;
    setTimeout(() => this.start(nextIndex), this.time);
  }

  mounted() {
    this.start();
  }
}

export default ImageSlider;
