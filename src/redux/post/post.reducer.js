const INITIAL_STATE={
    posts:[],
    comments:[],
    loading:false,
    error:null
}

export const postsReducer = (state = INITIAL_STATE, action)=>{
    if(action.type === "LOADING"){
        return{...state, loading:true}
    }
    else if(action.type === "ERROR"){
        return{...state, loading:false, error:action.contain}
    }
    else if(action.type === "GET_POSTS"){
        return{...state,loading:false, posts:[...action.contain]}
    }
    else if (action.type==="NEW_POST"){
        return{...state, loading:false, posts:[action.contain, ...state.posts]}
    }
    else if(action.type ==="ERROR_POSTING"){
        return{...state, loading:false, error:action.contain};
    }
    else if(action.type ==="DELETE"){
        return{...state, loading:false, posts:[...action.contain.posts]}
    }
    if(action.type==="COMMENTS"){
        return {...state, loading:false,comments:[...action.contain]}
    }
    else{
        return state;
    }
}