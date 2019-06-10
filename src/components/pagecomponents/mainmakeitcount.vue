<template>
    <section class="makeitcout" id="makeitcout">
        <div class="wrapper-makeit main-view">
            <div class="makeit-item">
                <i class="fas fa-smile-wink"></i>
                <transition name="count">
                    <countup endval = '20000'  v-if="anim"></countup>
                </transition>
                <h2>Satisfied Clients</h2>
            </div>
            <div class="makeit-item">
                <i class="fas fa-money-bill-wave"></i>
                <transition name="count">
                    <countup endval = '70000' v-if="anim"></countup>
                </transition>
                <h2>Products sold</h2>
            </div>
        </div>
        <div class="main-view makeit-text">
            <p>Every </p><span>Smoothie </span><p>is an experience.</p>
            <h1>MAKE IT COUNT!</h1>
        </div>
    </section>
</template>

<script>
    import  countup from './countup'
    export default {
        name: "mainmakeitcount",
        components: {
            countup
        },
        data(){
            return{
                anim: false
            }
        },
        props: ['scroll'],
        watch:{
            scroll(){
                let makeitcout = document.getElementById('makeitcout').offsetTop;
                if(this.scroll >= makeitcout - (0.3 * makeitcout) ){
                    this.anim = true;
                }
            }
        }
    }
</script>

<style scoped>

</style>