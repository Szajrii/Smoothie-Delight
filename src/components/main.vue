<template>

   <div>
      <mainabout :scroll="scroll"></mainabout>
      <mainmakeit :scroll="scroll"></mainmakeit>
      <maincontext></maincontext>
      <mainstayalert :scroll="scroll"></mainstayalert>
      <mainnewsletter :scroll="scroll"></mainnewsletter>
      <transition name="arrow">
         <i class="fas fa-arrow-circle-up arrowup" v-show="scroll > 300"></i>
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

           }
       },
       props:['scroll']
    }
</script>

<style >

</style>
