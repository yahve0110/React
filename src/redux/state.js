
  let rerenderEntireTree = ()=>{
    console.log('stae change')
  }

  let state = {
    profilePage:{
        posts:[  {id:1,message:"Hi how are you?",likesCount:12,},
        {id:2,message:"It is my first post",likesCount:15,},
        {id:3,message:"hi from index",likesCount:22,},
        {id:4,message:" third",likesCount:5,}],
        newPostText : 'testim posti',
       
    },
    messagesPage:{
        messagesData:[{id:1,message:"Hi"},
        {id:2,message:"How are u"},
        {id:3,message:"Yo"},
        {id:4,message:"dai money"},],
        dialogs:[    {id: 1,name:"Ilyas"},
        { id: 2,name:"Iris"},
        {id: 3,name:"Gogis"},
        {id: 4,name:"Valeris" }],
    }
   
  }


export let addPost = () =>{
 let newPost ={
    id:5,
    message: state.profilePage.newPostText,
    likesCount:0
  }
  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText = ''
  rerenderEntireTree(state)
}



export let updateNewPostText = (newText) =>{
  state.profilePage.newPostText = newText
  rerenderEntireTree(state)
 }

 export const subscribe = (observer) =>{
  rerenderEntireTree = observer
 }

  export default state