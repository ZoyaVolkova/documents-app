<template>
  <div class="documents">
    <div class="documents__container documents-container">
      <div class="documents-container__sidebar sidebar">
        <h2 class="sidebar__title h2">Поиск документа</h2>
        <input-component v-model="searchItem" :placeholder="'Введите ID документа'"></input-component>   
        <div class="sidebar__searched-docs searched-docs">
          <h2 class="sidebar__title h2">Результаты</h2>
          <template v-if="documentsStore.documents.length !== 0">
            <DocumentPreview  :documents="documentsStore.documents"  @click="documentsStore.showDocument($event)"></DocumentPreview>
          </template>
          <error-component v-else-if="documentsStore.isRequestError"></error-component>
          <span v-else class="text" >Ничего не найдено</span>
        </div> 
      </div>
      <div v-if="documentsStore.doc.id" class="documents-container__content-container content-container">
        <img v-if="documentsStore.doc.image" class="content-container__image" :src="documentsStore.doc.image"/>
        <img v-else class="content-container__image" src="@/assets/doc_image.png"/>
        <div class="content-container__content content">
          <h2 class="content__title h2">{{documentsStore.doc.name}}</h2>
          <div class="content__buttons">
            <button-component :value="'Скачать'" :color="'blue'" @click="documentsStore.downloadDocument(documentsStore.doc)"></button-component>
            <button-component :value="'Удалить'" :color="'red'" :disabled="!documentsStore.doc.image" @click="documentsStore.deleteDocument()"></button-component>
          </div>
          <div class="content__description content-description">
            <h2 class="content-description__title h2">Описание</h2>
            <div class="content-description__text text">{{documentsStore.doc.description}}</div>
          </div>
        </div>
      </div>
      <div v-else class="documents-container__empty-container empty-container">
        <span class="empty-container__text text">Выберите документ, чтобы посмотреть его содержимое</span>
      </div>
    </div>
  </div>
  <loading v-model:active="documentsStore.isLoading" :can-cancel="false" :is-full-page="true"/>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue';
import { useDocumentsStore } from '@/stores/DocumentsStore';
import InputComponent from '@/components/InputComponent.vue';
import DocumentPreview from '@/components/DocumentPreview.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import ErrorComponent from '@/components/ErrorComponent.vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

export default defineComponent({
  name: 'DocumentsComponent',
  components: {InputComponent, DocumentPreview, ButtonComponent,  Loading, ErrorComponent},
  setup() {
    const documentsStore = useDocumentsStore()
    const searchItem = computed({
      get: () => documentsStore.searchItem,
      set: (value: string ) => {
       documentsStore.updateSearchItem(value)
       documentsStore.loadDocuments(value) 
      }
    })

    onMounted(() => {
      documentsStore.loadDocuments() 
    })
    return {
      searchItem,
      documentsStore
    }
  }
});
</script>


<style scoped lang="scss">
.documents {
  font-family: "Montserrat";
  display: flex;
  justify-content: center;
  min-height: 575px;
  &__container {
    width: 100%;
    box-shadow: 0px 0px 10px 0px #0000001A;
    border-radius: 10px;
    display: flex;
    .sidebar {
      border-right: 1px solid #E0E0E0;
      @media (520px <= width) {
        width: 20%;
      }
      @media (400px <= width <= 520px) {
        width: 30%;
      }
      @media (width <= 400px) {
        width: 50%;
      }
      @media (930px <= width) {
        padding: 27px 20px;
      }
      @media (width <=930px) {
        padding: 12px 10px;
      }    
      .searched-docs {
        display: flex;
        flex-direction: column;
        margin-top: 29px;
      }
    }
    .content-container, .empty-container {
      @media (520px <= width) {
        width: 80%;
      }
      @media (400px <= width <= 520px)  {
        width: 70%;
      }
      @media (width <= 400px) {
        width: 50%;
      }
    }
    .content-container {
      padding: 30px;
      @media (930px <= width) {
        display: grid;  
        grid-template-columns: 1fr 1fr;
        gap: 60px;
      }
      @media (650px <= width <= 930px)  {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
      }
      @media (width <= 650px) {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
      } 
      &__image {
        width: 100%;
        max-width: 424px;
        box-sizing: border-box;
      }
      .content {
        @media (width <= 930px)  {
            margin-top: 20px;
          } 
        &__buttons {
          display: flex;
        }
        .content-description {
          @media (930px <= width)  {
            margin-top: 47px;
          }
          @media (520px <= width <= 930px)  {
            margin-top: 30px;
          } 
          @media (width <= 520px)   {
            margin-top: 20px;
          } 
          &__text {   
            max-width: 439px;
          }
        }
      }     
    }
    .empty-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      
      &__text {
        padding: 20px;
      }
    }
  }
}
</style>
