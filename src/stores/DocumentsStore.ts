import { defineStore } from 'pinia'
import {ref} from 'vue'
import { Document } from '@/ts/types'

export const useDocumentsStore = defineStore('documentsStore', () => {
  const searchItem = ref('')
  const documents = ref([])
  const doc = ref({name: '', id: '', image: '', description: ''})
  const DOC_API_URL = process.env.VUE_APP_DOC_API_URL
  const isRequestError =  ref(false)
  const isLoading = ref(false)
  
  function updateSearchItem(value: string) {
    searchItem.value = value
  }
  function downloadDocument(value: Document) {
    console.log('downloadDocument')
    const link = document.createElement('a');
    const file = new Blob([value.description], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = `${value.name}.txt`
    link.click();
    URL.revokeObjectURL(link.href);
  }
  function deleteDocument() {
    console.log('deleteDocument')
  }
  function showDocument(value: Document) {
    doc.value = value
  }

  async function loadDocuments(searchItem?: string) {
    isLoading.value = true
    try {
      let url = DOC_API_URL
      if (searchItem) url += searchItem
      const response = await fetch(`${url}`, { credentials: 'same-origin', method: 'GET' })
      if (response.status === 200) {
        documents.value = await response.json();
      } else {
        throw new Error()
      }
    } catch (err) {
      isRequestError.value = true
      console.error('Произошла ошибка!', err);
    }
    isLoading.value = false
  }
  
  return { 
    searchItem, 
    documents, 
    doc,
    isLoading,
    isRequestError,
    loadDocuments, 
    updateSearchItem, 
    downloadDocument, 
    deleteDocument, 
    showDocument
  }
})