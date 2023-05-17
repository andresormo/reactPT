import { Box, Heading, Text } from '@chakra-ui/react'
import DeletePost from '../DeletePost/DeletePost'
import Comments from '../Comments/Comments'

const Post = ({ post, posts }) => {
 
    return (
            <Box
                w="80%"
                h="auto"
                minHeight="150px"
                padding="15px"
                display="flex"
                justifyContent="center"
                flexDirection="column"
                bg="#fffffe"
                border="1px solid #90b4ce"
                boxShadow="1px 1px 1px 1px #90b4ce"
                position="relative"
                key={post.id}>
                <Heading
                fontSize="14px"
                color="#3da9fc"
                >@{post.userId}</Heading>
                <Heading 
                fontSize="18px" 
                color="#094067"
                paddingLeft="15px"
                >{post.title}</Heading>
                <Text
                color="#094067"
                >{post.body}</Text>
                <DeletePost posts={posts} post={post}/>
                <Comments post={post}/>
            </Box>
    )
}

export default Post
