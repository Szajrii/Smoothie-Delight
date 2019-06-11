<template>
    <section class="bg">
        <div class="wrapper-text main-view">
            <h1 class="text">{{text}}</h1>
            <h2>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium, commodi cumque deleniti distinctio
                dolores doloribus enim error expedita ipsam molestias numquam officia officiis,
                placeat quo repellat repellendus soluta? Porro?
            </h2>
            <button @click="discover">Discover</button>
        </div>

    </section>
</template>

<script>
    export default {
        name: "header",
        data(){
            return{
                text: 'Smoothie Delight'
            }
        },
        methods:{
            discover(){

                if($vm0.$route.path == '/'){
                    let about = document.getElementById('about').offsetTop;
                    window.scrollTo(0, about)
                }

            }
        }
    }
</script>

<style >

</style>