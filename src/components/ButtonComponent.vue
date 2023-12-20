<template>
    <button class="button" :class="color" @click="emit('click')" :disabled="disabled">{{ value }}</button>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ButtonComponent',
    props: {
        value: String,
        color: String,
        disabled: Boolean
    },
    emits: ['click'], 
    setup(_, {emit}) {
    return {
        emit
    }
    }
})
</script>

<style scoped lang="scss">
    .button {
        background-color: #FFFFFF;
        margin-right: 17px;
        border: 1px solid;
        border-radius: 8px;
        font-family: Montserrat;
        font-weight: 400;
        letter-spacing: 0px;
        text-align: center;
        box-sizing: border-box;
        cursor: pointer;
        @media (930px <= width) {
            font-size: 14px;
            line-height: 17px;
            padding: 7px 28px;
        }
        @media (520px <= width <= 930px) {
            font-size: 11px;
            line-height: 14px;
            padding: 5px 20px;
        }
        @media (width <= 520px)  {
            font-size: 9px;
            line-height: 10px;
            padding: 5px 15px;
        }
    }
    .button[disabled] {
    background-color: #efefef4d;
    color: #c0c4c8;
    border-color:  #efefef4d;
    cursor: default;
    }
    .blue {
        color:  #0D6EFD;
    }
    .red {
        color:  #DC3545;
    }
    
</style>