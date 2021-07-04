<template>
    <div>
        <div>22</div>
        
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    mounted(){
        console.log(this.$route, '213')
    }
}
</script>
<style lang='scss' scoped>

</style>