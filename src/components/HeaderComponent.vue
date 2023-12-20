<template >
    <div class="header-container">
        <div class="header-container__header header">
            <h1 class="header__app-name h1">{{store.appName}}</h1>
            <span class="header__user-name">{{store.userName}}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/stores';

export default defineComponent({
    name: 'HeaderComponent',
    props: {
        appName: String,
        userName: String
    },
    setup() {
    const store = useStore()

    return {
        store
    }
    }
})
</script>

<style scoped lang="scss">
.header-container {
    display: flex;
    justify-content: center;
    width: 100%;
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        
        &__user-name {
            margin: 0;
            padding: 0;
            font-family: Montserrat;
            font-weight: 400;
            letter-spacing: 0em;
            @media (930px <= width) {
                font-size: 16px;
                line-height: 19px;
            }
            @media (520px <= width <= 930px) {
                font-size: 13px;
                line-height: 19px;
            } 
            @media (width <= 520px)  {
                font-size: 11px;
                line-height: 19px;
            } 
        }
    }
}
</style>

