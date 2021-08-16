import React, { useState, useEffect} from 'react';
import PostList from './components/PostList';
import './styles/app.css'
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/myModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hook/usePosts';
import PostService from './API/PostService';
import Loader from './components/UI/Loader/Loader';
import { useFetching } from './hook/useFetching';
import { getPageCount, getPagesArray } from './utils/pages';
import Pagination from './components/UI/pagination/Pagination';

function App() {

  const [posts, setPosts] = useState([])

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);

const [totalPages, setTotalPages] = useState(0);
const [limit, setLimit] = useState(10);
const [page, setPage] = useState(1);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);


  // const [isPostLoading, setIsPostLoading] = useState(false);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async (_limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = (response.headers['x-total-count'])
    setTotalPages(getPageCount(totalCount, limit));
  })

  useEffect(() => {
  fetchPosts(limit, page);
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

 


  const removePost = (post) => {
    // фильтруем массив и выводим отфильтрованное
    setPosts(posts.filter(p => p.id !== post.id));
  }

  const changePage = (page) =>{
    setPage(page);
    fetchPosts(limit, page)
  }

  return (
    <div className="App">
      <MyButton onClick={()=> fetchPosts()}>GET POSTS</MyButton>
      <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError &&
      <h1>Произошла ошибка {postError}</h1>
      }
      {isPostsLoading
        ? <div style={{display:'flex', justifyContent:'center', marginTop:'50px'}}> <Loader /></div>
        : <PostList posts={sortedAndSearchedPosts} remove={removePost} title={'Про js'} />
      }
  <Pagination totalPages={totalPages} page={page} changePage={changePage} />
    </div>
  );
}

export default App;
