<template>

   <div>
      <mainabout :scroll="scroll"></mainabout>
      <mainmakeit :scroll="scroll"></mainmakeit>
      <maincontext></maincontext>
   </div>



</template>

<script>

    import mainabout from './pagecomponents/mainabout'
    import mainmakeit from './pagecomponents/mainmakeitcount'
    import maincontext from './pagecomponents/maincontext'
    export default {
        name: "main",
        components: {
           mainabout,
           mainmakeit,
           maincontext

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
