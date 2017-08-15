<template>
    <div v-loading.body="loading">
        <div class="slider-top">
            <div class="slider-top__item" style="background-image: url(img/img-1.jpg)" data-lazy="img/hot-box-1.png">
                <div class="desc">
                    <span class="big">Abr@X@bra</span>
                    <span class="small">made in</span>
                    <a target="_blank" href="https://abraxabra.ru">Заказть разработку</a>
                </div>
            </div>

            <div class="slider-top__item" style="background-image: url(img/img-2.jpg)" data-lazy="img/hot-box-1.png">
                <div class="desc">
                    <span class="big">Мы делаем Web</span>
                    <span class="small">made in Abr@X@bra</span>
                    <a target="_blank" href="https://abraxabra.ru">Заказть разработку</a>
                </div>
            </div>

            <div class="slider-top__item" style="background-image: url(img/img-3.jpg)" data-lazy="img/hot-box-1.png">
                <div class="desc">
                    <span class="big">Команда специалистов</span>
                    <span class="small">made in Abr@X@bra</span>
                    <a target="_blank" href="https://abraxabra.ru">Заказть разработку</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loading: true
            }
        },
        mounted() {
            setTimeout(() => {this.loading= false}, 1000)
        }
    }
</script>


<style lang="sass">

</style>