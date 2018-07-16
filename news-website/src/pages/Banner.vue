<template>
    <!-- Swiper -->
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="../assets/img/img_1.jpg" alt="">
            </div>
            <div class="swiper-slide">
                <img src="../assets/img/img_2.jpg" alt="">
            </div>
            <div class="swiper-slide">
                <img src="../assets/img/img_3.jpg" alt="">
            </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    // import '../../static/js/swiper.min.js'

    export default {
        mounted () {
            var swiper = new Swiper('.swiper-container', {
                pagination: {
                el: '.swiper-pagination',
            },
        });
        }
    }
</script>

<style scoped>
    /*@import "../assets/css/swiper.css";*/
</style>