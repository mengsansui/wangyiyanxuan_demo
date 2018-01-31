<template>
    <div class="cart">
        <h1>{{ msg }}</h1>
    </div>
</template>
    
<script>
export default {
    name: "cart",
    data () {
        return {
            msg: '购物车'
        };
    }
}
</script>
    
<style lang="css" scoped>
    h1{
        color: green;
    }
</style>