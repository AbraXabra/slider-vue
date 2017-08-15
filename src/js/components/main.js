import Vue from 'vue';
import SliderTop from './slider-top.vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

new Vue({
    el: '#header',
    components: {
        'app-slider-top': SliderTop
    }
});





