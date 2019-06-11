<template>
    <section class="newsletter" >
        <div class="wrapper-newsletter main-view">
            <h2>Want to hear about news?</h2>
            <h1>Sign up for newsletter NOW!</h1>
            <form action="">
                <input type="email" required pattern="[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*">
                <input type="submit" id="newsletter-input-two" value="Sign Up!">
            </form>

        </div>
    </section>
</template>

<script>
    export default {
        name: "mainnewsletter",
        props: ['scroll'],

    }
</script>

<style scoped>

</style>