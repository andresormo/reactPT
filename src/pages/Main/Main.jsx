import { useSelector } from "react-redux";
import { Flex } from "@chakra-ui/react";
import Post from "../../components/Post/Post.jsx";
import Loading from "../../components/Loading/Loading";
import NewPost from "../../components/NewPost/NewPost";

const Main = () => {
    const {loading, posts} = useSelector((state)=> state.posts)
  return (
    <Flex 
    flexWrap="wrap" 
    alignItems="center" 
    justifyContent="center"
    flexDirection="column"
    mt="20px"
    >
    <NewPost/>
    {loading && <Loading/>}
    
    {posts.map((post)=>{
      return <Post posts={posts} post={post} key={post.id}/>
    }
    )}
    </Flex>
  )
}

export default Main
