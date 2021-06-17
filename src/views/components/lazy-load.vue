<template>
  <div>
    <showCode :title="title" :code.sync="code" :isExecute="false"></showCode>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: '图片懒加载的实现',
      code: `
   
    // 利用H + S > this.getTop(this.imgs[i])
    class lazyLoadImg1 {
        constructor() {
            this.imgs = document.querySelectorAll('img');
        }
 
        lazyLoad() {
            let H = document.documentElement.clientHeight; //获取可视区域高度
            let S = document.documentElement.scrollTop || document.body.scrollTop;
            let len = this.imgs.length
            for (let i = 0; i < len; i++) {
                if (H + S > this.getTop(this.imgs[i])) {
                    this.imgs[i].src = this.imgs[i].getAttribute('data-src');
                }
            }
        }
 
        getTop() {
            let T = e.offsetTop;
            while (e = e.offsetParent) {
                T += e.offsetTop;
            }
            return T;
        }
 
        addEvent() {
            window.onload = window.onscroll = () => { //onscroll()在滚动条滚动的时候触发
                this.lazyLoad(this.imgs);
            }
        }
    }
 
    // 利用getBoundingClientRect
    class lazyLoadImg2 {
        constructor() {
            this.imgs = document.querySelectorAll('img');
        }
 
        isIn(el) {
            let bound = el.getBoundingClientRect();
            let clientHeight = window.innerHeight;
            return bound.top <= clientHeight;
        }
 
        check() {
            Array.from(this.imgs).forEach((el)=> {
                if (this.isIn(el)) {
                    this.loadImg(el);
                }
            })
        }
 
        loadImg(el) {
            if (!el.src) {
                let source = el.dataset.src;
                el.src = source;
            }
        }
 
        addEvent() {
            window.onload = window.onscroll =  ()=> { //onscroll()在滚动条滚动的时候触发
                this.check();
            }
        }
    }
     
`
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
