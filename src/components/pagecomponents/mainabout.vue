<template>

    <section class="about" id="about">
        <div :class=" anim ? 'product-button' : 'product-button-hidden'  " id="anim-button">
            <p>Check</p>
            <p>our</p>
            <h1>Products</h1>
        </div>
        <div class="main-view wrapper-about">
            <div class="about-row">
                <div class="about-item" id="first-item">
                    <p>Smoothie</p>
                    <p>is</p>
                    <h2>HEALTHY</h2>
                </div>
                <div class="about-item" id="second-item">
                    <img src="../../img/heart.png" id="heart-one">
                    <img src="../../img/heart.png" id="heart-two">
                    <img src="../../img/heart.png" id="heart-three">
                    <img src="../../img/heart.png" id="heart-four">
                    <img src="../../img/heart.png" id="heart-five">
                </div>
            </div>
            <div class="about-row">
                <div class="about-item" id="third-item">
                    <img src="../../img/fruits1.png" id="fruit-one">
                    <img src="../../img/fruits2.png" id="fruit-two">
                    <img src="../../img/fruits3.png" id="fruit-three">
                    <img src="../../img/fruits2.png" id="fruit-four">
                    <img src="../../img/fruits1.png" id="fruit-five">
                </div>
                <div class="about-item" id="fourth-item">
                    <p>Smoothie</p>
                    <p>is</p>
                    <h2>Delicious</h2>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
    export default {
        name: "mainabout",
        props: ['scroll'],
        data(){
            return{
                anim: false
            }
        },
        watch:{
            scroll(){
                let aboutOffset = document.getElementById('about').offsetTop;
                if(this.scroll >= aboutOffset - (0.3 * aboutOffset) ){
                        this.anim = true;
                }
            }
        }
    }
</script>

<style scoped>

</style>