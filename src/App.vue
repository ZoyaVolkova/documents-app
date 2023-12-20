<template>
  <div class="app-container">
    <header-component/>
    <documents-component/>
  </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import DocumentsComponent from './components/DocumentsComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    DocumentsComponent, HeaderComponent
  },
});
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.app-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1266px;
  min-width: 320px;
  margin: 0 auto;
}
.h1 {
  font-family: Montserrat-Bold;
  font-size: 32px;
  font-weight: 700;
  color: #000;
  @media (930px <= width) {
    font-size: 32px;
    line-height: 39px;
  }
  @media (520px <= width <= 930px) {
    font-size: 27px;
    line-height: 34px;
  } 
  @media (width <= 520px)  {
    font-size: 22px;
    line-height: 29px;
  } 
}
.h2, .h3, .text {
  font-family: Montserrat;
  letter-spacing: 0em;
  text-align: left;
}
.h2 {
  font-weight: 600;
  color: #000000;
  margin: 0px;
  margin-bottom: 14px;
  @media (930px <= width)  {
    font-size: 16px;
    line-height: 22px;
  }
  @media (520px <= width <= 930px) {
    font-size: 13px;
    margin-bottom: 10px;
  }
  @media (width <= 520px) {
    font-size:11px;
    margin-bottom: 8px;
  }
}
.h3, .text {
  @media (930px <= width)  {
    font-size: 14px;
    line-height: 17px;
  }
  @media (520px <= width <= 930px) {
    font-size: 11px;
    line-height: 14px;
  }
  @media (width <= 520px) {
    font-size: 9px;
    line-height: 12px;
  }
}
.h3 {
  font-weight: 600;
  color: #000000;
  padding: 0px;
  margin: 0px;
}
.text {
  font-weight: 400;
  color: #6C757D;
}
@font-face {
  font-family: "Montserrat";
  src: url("@/assets/font/Montserrat/Montserrat-Regular.ttf");
}
@font-face {
  font-family: "Montserrat-Bold";
  src: url("@/assets/font/Montserrat/Montserrat-Bold.ttf");
}
</style>

