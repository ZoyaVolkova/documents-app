import { defineStore } from 'pinia'
import {ref} from 'vue'


export const useStore = defineStore('store', () => {
  const appName = ref('MyApp')
  const userName = ref('Username')
  
  return { 
    appName,
    userName
  }
})