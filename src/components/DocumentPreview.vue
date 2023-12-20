<template>
    <ul class="documents__list documents-list">
        <li v-for="doc in documents" :key="doc.id" class="documents-list__item item" @click="emit('click', doc)">
            <img  v-if="doc.image" class="item__image" :src="doc.image" alt="document-image">
            <img v-else class="item__image" src="@/assets/doc_image.png" alt="document-image">
            <div class="item__description item-description">
                <h3 class="item-description__title h3">{{doc.name}}</h3>
                <span class="item-description__text text">12 МБ</span>
            </div>
        </li>
    </ul>
</template>
<script lang="ts">
import {  defineComponent, PropType } from 'vue';
import { Document } from '@/ts/types'

export default defineComponent({
    name: 'DocumentPreview',
    props: {
        documents:  Array as PropType<Document[]>
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
.documents-list {
    list-style: none;
    max-width: 240px;
    box-sizing: border-box;
    padding: 0px;
    display: grid; 
    
    margin: 0px;
    gap: 18px;
    .item {
        display: grid; 
        box-shadow: 0px 0px 10px 0px #0000001A;
        justify-content: space-between;
        width: 100%;
        cursor: pointer;
        @media (1070px <= width) {
            grid-template-columns: 70px 1fr;
        }
        @media (650px <= width <= 1070px)  {
            grid-template-columns: 1fr;
            grid-template-rows: 2fr 1.2fr;
        }
        @media (520px <= width <= 650px) {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 0.5fr;
        }
        @media (width <= 520px) {
            grid-template-columns: 1fr;
        }
        &__image {
            object-fit: cover;
            @media (1070px <= width) {
                width: 70px;
                height: 70px;
                border-right: 1px solid #E0E0E0;
            }
            @media (width <= 1070px) {
                width: 100%;
            }
        }
        &__description {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            @media (1070px <= width) {
                padding: 15px;
            }
            @media (width <= 1070px) {
                padding: 10px;
            }
        }
        
    }
    .item:hover {
        background-color: #0D6EFD;
        .item__image {
            border: none;
        }
        .item-description {
            &__title {
                color: #F8F9FA;

            }
            &__text {
                color: #DEE2E6;

            }

        }
        
    }
}
</style>