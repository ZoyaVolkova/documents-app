<template>
    <div class="input-container">
        <input id="input" type="text" class="input-container__input" :placeholder="placeholder" v-model="inputValue" />
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
    name: 'InputComponent',
    props: {
        placeholder: String,
        searchItem: String,
        modelValue: String
    },
    emits: ['update:modelValue'], 
    setup(props, {emit}) {
        const inputValue = computed({
            get() { return props.modelValue },
            set(value) { emit('update:modelValue', value)}
        })
        return {
            inputValue
        }
    }
})
</script>

<style scoped lang="scss">
.input-container {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    &__input::placeholder {
        color: #6C757D;
        font-family: Montserrat;
        font-weight: 400;
        letter-spacing: 0px;
        text-align: left;
        text-overflow: ellipsis;  
    }
    &__input:focus::placeholder {
        opacity: 0;  
    }
    &__input:placeholder-shown {
        text-overflow: ellipsis;
    }
    &__input{
        background-color: transparent;
        border: 1.5px solid #E9ECEF;
        border-radius: 8px;
        outline: none;
        width: 100%;
        max-width: 240px;
        box-sizing: border-box;
        @media (930px <= width) {
            padding: 16px 24px 16px 24px;
        }
        @media (width <= 930px) {
            padding: 8px 12px 8px 12px;
        }
         
    }
    &__input, &__input::placeholder {
        @media (930px <= width) {
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