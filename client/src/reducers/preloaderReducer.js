const SHOW_PRELOADER='SHOW_PRELOADER';
const HIDE_PRELOADER='HIDE_PRELOADER';

const defaultState ={
  preloader:false
}

const preloaderReducer=(state=defaultState, action)=>{
  switch (action.type){
    case SHOW_PRELOADER: return {...state, preloader:true}
    case HIDE_PRELOADER: return {...state, preloader:false}
    default: return state
  }
}

export const showPreloader=()=>({type:SHOW_PRELOADER})
export const hidePreloader=()=>({type:HIDE_PRELOADER})

export default preloaderReducer;
