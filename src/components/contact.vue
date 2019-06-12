<template>

    <section class="contact" id="contact">
        <div class="wrapper-form main-view">
            <form action="">
                <p>Do you have any question? Leave a message</p>
                <input type="email" placeholder="Email" required>
                <input type="text" placeholder="Topic" required>
                <textarea placeholder="Your message" required ></textarea>
                <input type="submit" value="Send" id="contact-submit">
            </form>
        </div>
    </section>

</template>

<script>
    export default {
        name: "contact",
        created() {
            setTimeout(() => {
                window.scrollTo(0, document.getElementById('contact').offsetTop )
            }, 300)

        }
    }
</script>

<style scoped>

</style>