<template>
  <span>
    <slot v-bind:user="user">
     
    </slot>
  </span>
</template>
<script>
export default {
    data(){
        return {
            user: {
                firstName: 1234,
                lastName: 4567
            }
        }
    }
}
</script>
