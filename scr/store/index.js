import { createStore } from 'vuex';
import axios from 'axios';


export default createStore({
  state: {
    places:[],
    cart:[],
    rent:[],
    searchValue:"",
     rentss:[]
    
   
    
  },
  mutations: {  
    SET_PLACE_TO_STATE:(state,places) => {
      state.places=places;
    },
    SET_CART:(state,place)=>
    {
      state.cart.push(place)
    },
    REMOVE_FROM_CART:(state,index)=>
    {
      state.cart.splice(index,1)
    },
    SET_RENT:(state,cart)=>
    {
      state.rent.push(cart)
    },
  SET_SEARCH_VALUE_TO_VUEX:(state,value)=>{
    state.searchValue = value
  },
  SET_RENTSS_TO_STATE:(state,rentss)=>
    {
      state.rentss=rentss;
    },
   SET_RENTSS:(state,rentss)=>
     {
       state.rent.push(rentss)
     },



    
  },
  actions: { 
    GET_PLASE_FROM_API({commit}){
      return axios('  http://localhost:3000/place',
      {
        method: "GET"

      })
      .then((places)=>{commit('SET_PLACE_TO_STATE',places.data);
      return places;
    })
      .catch((error)=>{console.log(error)})
    },
    ADD_TO_CART({commit},place){
      commit('SET_CART',place)
    },
    DELETE_FROM_CART({commit},index){
      commit('REMOVE_FROM_CART',index)
    },
    ADD_TO_RENT({commit},cart){
      commit('SET_RENT',cart)
    },
    GET_SEARCH_VALUE_TO_VUEX({commit},value){
      commit('SET_SEARCH_VALUE_TO_VUEX',value)

    },
     ADD_TO_RENTSS({commit},rents){
       commit('SET_RENTS',rents)
     },
     GET_RENTSS_FROM_API({commit}){
       return axios('  http://localhost:3000/rents',
       {
         method: "GET"

       })
       .then((rentss)=>{commit('SET_RENTSS_TO_STATE',rentss.data);
       return rentss;
     })
       .catch((error)=>{console.log(error)})
     },
    
    
    },
  getters: {  
    PLACE(state) {
      return state.places;

    },
    CART(state){
      return state.cart
    },
    RENT(state){
      return state.rent
    },
    SEARCH_VALUE(state){
      return state.searchValue
    },
     RENTSS(state){
       return state.rentss
     },
   
    
  }
},
);