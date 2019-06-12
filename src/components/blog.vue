<template>
    <section class="blog">
        <blogitem ></blogitem>
        <blogitem ></blogitem>
<!--        You can add multiple blog items and configurate by your own-->
    </section>

</template>

<script>
    import blogitem from './pagecomponents/blogitem'
    export default {
        name: "blog",
        components:{
            blogitem
        }
    }
</script>

<style scoped>

</style>