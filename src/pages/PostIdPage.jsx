import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hook/useFetching';

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching( async(id)=>{
        const response = await PostService.getById(id);
        setPost(response.data);
    })

    const [fetchComments, isCommentsLoading, commentsError] = useFetching( async(id)=>{
        const response = await PostService.getCommentsByPostId(id);
        setComments(response.data);
    })

    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id)
    },[])


    return (  
        <div>
            <h1>Страница поста {params.id}</h1>
            {isLoading
                ? <Loader />
                : <div>{post.id}, {post.title}</div>
            }
            <h1>Комментарии к посту</h1>
            {isCommentsLoading
                ? <Loader />
                :<div>
                    {comments.map((comm) =>
                    <div style={{marginTop: '15px'}}>
                        <h3>{comm.id} {comm.email}</h3>
                        <div>{comm.body}</div>
                    </div>
                    )}
                    </div>
            }
            
            
        </div>
    );
}
 
export default PostIdPage;