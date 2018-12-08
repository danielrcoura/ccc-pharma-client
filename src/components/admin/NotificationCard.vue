<template>
  <div class="card">
    <div class="titulo">{{ info.titulo }}</div>
    <div class="mensagem">{{ info.mensagem }}</div>
  </div>
</template>

<script>
export default {
  name: 'NotificationCard',
  props: {
    info: Object
  }
}
</script>

<style lang="scss" scoped>
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

.card {
  padding: 1rem;
  background: #eee;
  animation: fade .5s 1;
  margin-bottom: 5px;
  .titulo {
    font-family: Arial, Helvetica, sans-serif;
    color: #888;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .mensagem {
    color: #888;
    font-size: 14px;
  }
}
</style>
