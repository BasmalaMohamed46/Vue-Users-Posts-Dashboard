import axios from "axios";
import { createStore } from "vuex";
let store = createStore({
    //? data(){}
    state() {
        return {
            Posts:[],
            postDetails:{}
        }
    },
    mutations: {
        GET_POSTS(state,posts){
            state.Posts = posts;
        },
        DELETE_POST(state,id){
            state.Posts = state.Posts.filter(post=>post.id != id)
        },
        GET_POST_DETAILS(state,post){
            state.postDetails = post;
        },
        CREATE_POST(state,post){
            state.Posts.push(post);
        },
        UPDATE_POST(state,post){
            let index = state.Posts.findIndex(p=>p.id==post.id);
            state.Posts[index] = post;
        }

    },
    actions: {
        GetAllPosts({commit}){
            axios.get('http://localhost:3000/posts')
            .then(res=>commit('GET_POSTS',res.data))
            .catch(err=>console.log(err))
        },
        async DeletePost({commit},id){
           await axios.delete(`http://localhost:3000/posts/${id}`)
            .then(()=>commit('DELETE_POST',id))
            .catch(err=>console.log(err))
        },
        GetPostDetails({commit},id){
            axios.get(`http://localhost:3000/posts/${id}`)
            .then(res=>commit('GET_POST_DETAILS',res.data))
            .catch(err=>console.log(err))
        },
        async CreatePost({commit},post){
           await axios.post('http://localhost:3000/posts',post)
            .then(()=>{commit('CREATE_POST',post);
            
            })
            .catch(err=>console.log(err))
        },
        async UpdatePost({commit},post){
            await axios.put(`http://localhost:3000/posts/${post.id}`,post)
            .then(()=>{commit('UPDATE_POST',post);
            
            })
            .catch(err=>console.log(err))
        }

    },
});
export default store;