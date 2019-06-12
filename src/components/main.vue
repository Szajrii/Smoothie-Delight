<template>

   <div>
      <mainabout :scroll="scroll"></mainabout>
      <mainmakeit :scroll="scroll"></mainmakeit>
      <maincontext></maincontext>
      <mainstayalert :scroll="scroll"></mainstayalert>
      <mainnewsletter :scroll="scroll"></mainnewsletter>
      <transition name="arrow">
         <i class="fas fa-arrow-circle-up arrowup" v-show="scroll > 300" @click="scrollTop"> </i>
      </transition>



   </div>



</template>

<script>

    import mainabout from './pagecomponents/mainabout'
    import mainmakeit from './pagecomponents/mainmakeitcount'
    import maincontext from './pagecomponents/maincontext'
    import mainstayalert from './pagecomponents/mainstayalert'
    import mainnewsletter from './pagecomponents/mainnewsletter'
    import myfooter from './pagecomponents/myfooter'



    export default {
        name: "main",
        components: {
           mainabout,
           mainmakeit,
           maincontext,
           mainstayalert,
           mainnewsletter,
           myfooter,

        },
       data(){
           return{
               currentView: ''
           }
       },
       props:['scroll'],
       methods:{
           scrollTop(){
              window.scrollTo(0, 0)
           }

       },
       created() {
           this.currentView = 'main';
           this.$emit('changeview', this.currentView);
       },
       destroyed() {
          this.currentView = '';
          this.$emit('changeview', this.currentView);
       }
    }
</script>

<style >

</style>
