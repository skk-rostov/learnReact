import React, {useState} from 'react'
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';



const PostForm = ({create}) =>{
    const[post, setPost] = useState({title:'',body:''})

    function addNewPost(e) {
      e.preventDefault();
const newPost = {
    ...post, id:Date.now()
}
create(newPost)
    setPost({title:'', body:''})
    
    }
    return(
    <form>
         {/* управляемый элемент  */}
        <MyInput type="text" placeholder="название поста" 
        value={post.title}
        onChange={e=>setPost({...post, title: e.target.value})}
        />

      <MyInput type="text" placeholder="название поста" 
        value={post.body}
        onChange={e=>setPost({...post, body:e.target.value})}
        />
        <MyButton onClick={addNewPost}>Добавить</MyButton>
      </form>
    )
}

export default PostForm