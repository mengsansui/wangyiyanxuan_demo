<template>
    <div class="market">
        <h1>{{ msg }}</h1>
    </div>
</template>
    
<script>
export default {
    name: "market",
    data () {
        return {
            msg: '闪送超市'
        };
    }
}
</script>
    
<style lang="css" scoped>
    h1{
        color: blue;
    }
</style>