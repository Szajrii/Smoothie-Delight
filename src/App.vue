<template>
    <div id="app">

        <myheader/>
        <router-view/>
    </div>
</template>

<script>

    import myheader from './components/pagecomponents/header';
    export default {
        name: 'App',
        components: {myheader}

    }
</script>

<style>

</style>
