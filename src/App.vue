<template>
    <div id="app">

        <myheader/>
        <router-view :scroll="scroll" />
    </div>
</template>

<script>

    import myheader from './components/pagecomponents/header';
    export default {
        name: 'App',
        components: {myheader},
        data(){
            return {
                scroll: 0
            }
        },
        created() {
            window.addEventListener('scroll', () =>{

                this.scroll = window.pageYOffset

            })
        }

    }
</script>

<style>

</style>
