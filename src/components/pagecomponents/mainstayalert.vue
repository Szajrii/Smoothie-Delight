<template>
    <section class="stay-alert" id="stay-alert">
        <div class="main-view " :class="anim ? 'wrapper-stay-alert': 'wrapper-stay-alert-hidden'">
            <img src="../../img/smoothie-item.png" alt="">
            <div stay-alert-text>
                <p>We are launching our products soon</p>
                <h1>Stay alert!</h1>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "mainstayalert",
        props: ['scroll'],
        data(){
            return {
                anim: false
            }
        },
        watch:{
            scroll(){
                let stayalert = document.getElementById('stay-alert').offsetTop;
                if(this.scroll >= stayalert - (0.3 * stayalert) ){
                    this.anim = true;
                }
            }
        },
        created() {
            if(window.screen.width <= 600){
                this.anim = true
            }
        }
    }
</script>

<style scoped>

</style>