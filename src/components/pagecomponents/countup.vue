<template>
    <div class="iCountUp">
        <ICountUp
                :delay="delay"
                :endVal="endvalue"
                :options="options"

        />
    </div>
</template>

<script type="text/babel">
    import ICountUp from 'vue-countup-v2';
    export default {
        name: 'countup',
        components: {
            ICountUp
        },
        props: ['endval', 'anim'],
        data() {
            return {
                delay: 100,
                options: {
                    useEasing: true,
                    useGrouping: true,
                    separator: ',',
                    decimal: '.',
                    prefix: '',
                    suffix: ''
                }
            };
        },
        methods: {
            onReady: function(instance, CountUp) {
                const that = this;
                instance.start(that.endvalue);
            }
        },
        computed:{
            endvalue(){
                return Number(this.endval)
            }
        },

    };
</script>

<style scoped>
    .iCountUp {
        font-size: 5vw;
        margin: 0;
        color: #dead47;
        text-shadow: 2px 2px 4px #000000;
        font-family: 'Gruppo';
    }
</style>