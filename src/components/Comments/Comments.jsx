import { Box, Button, Collapse, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

const Comments = ({ post }) => {
    //el hook useDiclosure, lo he importado de chakra, el cual sirve para dar visibilidad a ciertos elementos como en este caso al Box donde implemento los comentarios.
    const { isOpen, onToggle } = useDisclosure()
//junto al map de los comentarios he tenido que añadir un condicional para adjuntar a cada Post sus comentarios correspondientes
    const { comments } = useSelector((state) => state.posts)
    return (
        <>
            <Button
                position="absolute"
                left="0"
                bottom="0"
                width="200px"
                borderRadius="0px 15px 0px 0px"
                cursor="pointer"
                color="#fffffe"
                m="0"
                border="none"
                bg="#3da9fc"
                onClick={onToggle}>Ver comentarios</Button>
            <Collapse in={isOpen} animateOpacity>
                <Box
                    p='12px'
                    color='black'
                    mt='4'
                    bg='teal.500'
                    rounded='md'
                    shadow='md'
                >
                
                    {comments.map((comment) => {
                        if (comment.postId === post.id) {
                            return <Box
                                key={comment.id}
                                border="1px solid  #90b4ce"
                                padding="4px"
                                color="#094067"
                            >
                                <span>@{comment.email}</span>
                                <h4>{comment.name}</h4>
                                <p>{comment.body}</p>
                            </Box>
                        }

                    })}
                </Box>
            </Collapse>
        </>)
}

export default Comments
