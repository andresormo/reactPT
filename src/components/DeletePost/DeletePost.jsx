import { Button } from '@chakra-ui/react'
import React from 'react'
import { deletePost } from '../../redux/post/post.action'

const DeletePost = ({ post, posts }) => {
  return (
      <Button
        position="absolute"
        right="0"
        bottom="0"
        width="200px"
        borderRadius="15px 0px 0px 0px"
        cursor="pointer"
        color="#fffffe"
        m="0"
        border="none"
        bg="#3da9fc"
        onClick={() => deletePost(post, posts)}>
        Eliminar
        </Button>
  )
}

export default DeletePost
