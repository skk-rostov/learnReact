import React, {useState, useMemo} from 'react';
import PostList from './components/PostList';
import './styles/app.css'
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';

function App() {

const [posts, setPosts] = useState([
  {id:1,title:'AJavaScript', body: 'DDescription'},
  {id:2,title:'BJavaScript2', body: 'CDescription2'},
  {id:3,title:'JavaScript3', body: 'Description3'},
  {id:4,title:'JavaScript4', body: 'Description4'}
])

const [filter, setFilter] = useState({sort:'', query:''});

const sortedPosts = useMemo(()=>{
  console.log('отработала функция сортировки')
  if(filter.sort){
    return [...posts].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]))
  }
  return posts
},[filter.sort, posts]);

const sortedAndSearchedPosts = useMemo(()=>{
  return sortedPosts.filter(post=>post.title.toLocaleLowerCase().includes(filter.query))
},[filter.query, sortedPosts])


const createPost = (newPost) =>{
  setPosts([...posts, newPost])
}



const removePost = (post) => {
  // фильтруем массив и выводим отфильтрованное
  setPosts(posts.filter(p=> p.id !==post.id));
}




  return (
    <div className="App">
      {/* form  */}
    <PostForm create={createPost}/>
    <hr style={{margin:'15px 0'}} />
    
    <PostFilter filter={filter} setFilter={setFilter}/>

    <PostList posts={sortedAndSearchedPosts} remove = {removePost} title={'Про js'} />
 

     
    </div>
  );
}

export default App;
