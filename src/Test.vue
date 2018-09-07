<template>
  <div>
    Test
    <Child />
  </div>
</template>

<script>
import Child from './Child.vue'

export default {
  beforeCreate() {
    this.$options.components.Child = Child
  }
}
</script>
