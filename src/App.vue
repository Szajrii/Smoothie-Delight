<template>
    <div id="app">
        <mynav></mynav>
        <myheader :view="view"/>
        <router-view :scroll="scroll" @changeview="changeview"/>
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
                scroll: 0,
                view: ''
            }
        },
        methods:{
            changeview(view){
                this.view = view
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
