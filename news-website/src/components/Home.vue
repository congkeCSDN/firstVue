<template>
    <div class="home container">
        <Banner></Banner>
        <Content></Content>
    </div>
</template>

<script>
    import Banner from "../pages/Banner";
    import Content from "../pages/Content";

    export default {
        components: {Banner, Content},
        data() {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
