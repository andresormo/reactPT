import { API } from "../../shared/Api";
import store from "../store";


const { dispatch } = store;

const getPosts = async () => {
    dispatch({ type: "LOADING" });

    try {
        const resultado = await API.get("posts");

        dispatch({
            type: "GET_POSTS",
            contain: resultado.data
        })
    } catch (error) {
        dispatch({ type: "ERROR", contain: error, })
    }
}


let nextId = 101;
const newPostPost = async (datos, form) => {
    dispatch({ type: "LOADIG" });
    const formData = new FormData();
    datos.id = nextId++;
    datos.userId = "MockUser"
    formData.append("title", datos.title);
    formData.append("body", datos.body);


    API.post("posts", formData)
        .then((resultado) => {
            dispatch({ type: "NEW_POST", contain: datos })
            form.current.reset();
        })
        .catch((error) => {
            dispatch({
                type: "ERROR_POSTING",
                contain: "Error publicando el post"
            })
        })
}
const deletePost = async(post, posts)=>{
    dispatch({type:"LOADING"});
    
    API.delete(`posts/${post.id}`)
    .then(()=>{
        
        const postUpdate=[...posts];
        if(post){
            postUpdate.splice(posts.indexOf(post),1)
        }
        console.log(postUpdate);
        dispatch({
            type:"DELETE", 
            contain:{
                posts:postUpdate
            }
            });
    })
}

const getComments = async ()=>{
    dispatch({type:"LOADING"});
    API.get(`comments`)
    .then((resultado)=>{
        dispatch({
            type:"COMMENTS",
            contain: resultado.data
        })
        
    })
}

export { getPosts, newPostPost, deletePost, getComments };