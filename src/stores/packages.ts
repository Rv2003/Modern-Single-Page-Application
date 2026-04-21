import {defineStore} from "pinia";
import {v4 as uuid4} from 'uuid';
import type {Cart,Product} from '../types/interfaces'

interface State{
    cart:Cart | {}
}
const userPackages = defineStore( 'cart',{

  state:()=>({cart:[]} as State),
  actions:{
    loadcartinstance(){
        const cs=localStorage.getItem('cart')

        

        if(!cs)
        this.cart={}
        else
        this.cart=JSON.parse(cs)      
        },
        addtocart(product:{id:number,qty:number}){
            let isAdded=false
           const cs=localStorage.getItem('cart')
           if(!cs)
            this.cart={
        cid:uuid4(),products:[product]} 
        else{
           let cartlocalstorage=JSON.parse(cs) 
           cartlocalstorage.products=cartlocalstorage.products.map((ci : Product) =>{
            if (ci.id==product.id)
            {    
                isAdded=true
                return{id:ci.id,qty:ci.qty+1}
            }
                return{id:ci.id,qty:ci.qty}
           })

           if(!isAdded)
            cartlocalstorage.products.push({id:product.id,qty:product.qty})
           
           this.cart=cartlocalstorage
           
        }
        localStorage.setItem('cart',JSON.stringify(this.cart))
        },
        removefromcart(id:number){
            (this.cart as Cart).products=(this.cart as Cart).products.filter(ci=>ci.id !=id)
            localStorage.setItem('cart',JSON.stringify(this.cart))
        }
  }

} )