import {ref} from 'vue'
import {defineStore} from 'pinia'


export const userstore=defineStore('login',()=>{
   const name=ref();
 return{
  name 
 }
})