<template>
    <div class="home">
        <h1>{{ msg }}</h1>
    </div>
</template>
    
<script>
export default {
    name: "home",
    data () {
        return {
            msg: '首页'
        };
    }
}
</script>
    
<style lang="css" scoped>
    h1{
        color: red;
    }
</style>