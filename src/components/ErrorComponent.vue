<template>
    <div class="error-container">
      <span class="error-container__text">Произошла ошибка</span>
    </div>
</template>


<style lang="scss">
.error-container {
   display: flex;
   align-items: center;
    &__text {
    color: #d44950;
    border-left: 1.5px solid #d44950;
    font-family: Montserrat;
    font-weight: 400;
    padding: 7px 10px;
    text-align: left;
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
}
</style>