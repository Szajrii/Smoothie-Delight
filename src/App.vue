<template>
    <div id="app">
        <mynav></mynav>
        <myheader/>
        <router-view :scroll="scroll" />
        <myfooter></myfooter>
    </div>
</template>

<script>

    import myheader from './components/pagecomponents/header';
    import mynav from './components/pagecomponents/mynav'
    import myfooter from './components/pagecomponents/myfooter'

    export default {
        name: 'App',
        components:
            {
                myheader,
                mynav,
                myfooter
            },
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
