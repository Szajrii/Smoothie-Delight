<template>
    <section class="shop">
        <div class="wrapper-shop">
            <div class="shop-details">
                <p>Choose your favourite taste:</p>
                <div class="shop-taste">
                    <div @click="select('strawberry')" :class="{'taste-selected' : selected.strawberry} ">Strawberry</div>
                    <div @click="select('kiwi')" :class="{'taste-selected' : selected.kiwi} ">Kiwi</div>
                    <div @click="select('banana')" :class="{'taste-selected' : selected.banana} ">Banana</div>
                </div>
                <div class="shop-amount">
                    <i class="fas fa-minus" @click="amountMinus" :class="{'minus-disabled' : amount == 0}"></i>
                    {{amount}}
                    <i class="fas fa-plus" @click="amount ++"></i>
                    <div class="line"></div>
                    <p>Total: {{ total }}</p>
                </div>
                <div class="shop-order" v-if="amount > 0">
                    <button>Order</button>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "shop",
        data(){
            return{
                amount: 0,
                total: 0,
                selected:{
                    strawberry: false,
                    kiwi: false,
                    banana: false
                }
            }
        },
        methods:{
            amountMinus(){
                if (this.amount > 0 ){
                    this.amount --;
                }
            },
            select(item){
                switch(item) {
                    case 'strawberry':
                        this.selected.strawberry = true;
                        this.selected.kiwi = false;
                        this.selected.banana = false;
                        break;
                    case 'kiwi':
                        this.selected.strawberry = false;
                        this.selected.kiwi = true;
                        this.selected.banana = false;
                        break;
                    case 'banana':
                        this.selected.strawberry = false;
                        this.selected.kiwi = false;
                        this.selected.banana = true;
                        break;
                    default:

                }
            }
        },
        watch:{
            amount(){
                this.total = 0.5 * this.amount;
            }
        }
    }
</script>

<style scoped>

</style>