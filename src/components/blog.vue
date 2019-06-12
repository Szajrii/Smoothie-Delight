<template>
    <section class="blog" id="blog">
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
        },
        created() {
            setTimeout(() => {
                window.scrollTo(0, document.getElementById('blog').offsetTop )
            }, 300)

        }
    }
</script>

<style scoped>

</style>