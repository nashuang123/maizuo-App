<template>
  <div class="wrapper" ref="wrapper">
    <div class="content" ref="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    vertical: {
      type: Boolean,
      default: true
    },
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    mouseWheel: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    _initScroll() {
      var { wrapper, content } = this.$refs;
      if (!wrapper) {
        return;
      }
      if (this.scroll) {
        this.scroll.refresh();
      } else {
        var options = {
          probeType: this.probeType,
          click: this.click,
          mouseWheel: this.mouseWheel
        };
        if (!this.vertical) {
          options.scrollX = true;
          options.scrollY = false;
          var width = content.children[0].clientWidth * 2;
          for (let child of content.children) {
            width += child.clientWidth;
          }
          content.style.width = width + "px";
        }
        this.scroll = new BScroll(wrapper, options);
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this._initScroll();
    });
  }
};
</script>
<style lang="stylus" scoped>
.wrapper {
  height: 500px;
  width: 100%;
  
}
</style>
