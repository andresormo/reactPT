import { Box, Button } from '@chakra-ui/react';
import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import './NewPost.css';
import { newPostPost } from '../../redux/post/post.action';


const NewPost = () => {
    const { register, handleSubmit } = useForm();
    //En este caso he usado useRef(), para referenciar el formulario y poder hacer uso de esta referencia en el redux, y así poder resetear los valores del formulario.
    const form = useRef();
    return (
        <Box
            w="80%"
            h="auto"
            minHeight="150px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            bg="#fffffe"
            border="1px solid #90b4ce"
            boxShadow="0px 0px 0px 1px #90b4ce"
            mb="20px"
            position="relative"
        >
            <h3 className='title'>Nuevo Post</h3>
            <form ref={form} onSubmit={handleSubmit((datos) => newPostPost(datos, form))}>
                <div className='input'>
                    <input className='new_post post_title' placeholder='Un título para tu post' {...register('title')} />
                </div>
                <div className='input'>
                    <textarea type='text' className='new_post post_body' placeholder='Escribe tu nuevo post' {...register('body')} ></textarea>
                </div>
                <Button
                position= "absolute"
                right= "0"
                bottom= "0"
                width= "200px"
                borderRadius= "15px 0px 0px 0px"
                cursor= "pointer"
                color="#fffffe"
                m="0"
                border= "none"
                bg="#3da9fc"
                type='submit' className='button-form'>Crear</Button>
            </form>

        </Box>
    )
}

export default NewPost
