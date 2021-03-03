<template>
  <div id="layout">
      <Header />
      <Main />
      <Footer />
  </div>
</template>

<script>
import { Header, Footer, Main } from './components';

export default {
    name: "layout",
    components: {
        Header,
        Footer,
        Main
    }
}
</script>

<style lang="less" scoped>
#layout {
    height: 100vh;
    min-width: 1440px;
    display: flex;
    flex-direction: column;
}
</style>