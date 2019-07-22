<template>
  <div>
    Parent
    <Child />
  </div>
</template>

<script>

export default {
  components: {
    Child: () => import('./Child')
  }
}
</script>
