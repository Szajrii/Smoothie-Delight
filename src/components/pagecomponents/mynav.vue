<template>
    <section class="nav" id="nav">
        <div class="wrapper-nav main-view">

            <div class="mylogo">
                <router-link to="/">Smoothie Delight</router-link>
            </div>

            <div>
                <li> <router-link to="shop">Shop</router-link> </li>
                <li> <router-link to="contact">Contact</router-link> </li>
                <li> <router-link to="blog">Blog</router-link> </li>
            </div>

        </div>
    </section>
</template>

<script>
    export default {
        name: "mynav"
    }
</script>

<style scoped>

</style>