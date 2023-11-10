import {Button, TextField} from "@mui/material";
import {Add} from "@mui/icons-material";

import {useForm} from "@hooks/useForm";

import type {Post, PostResponse} from "@types";

import * as S from "./styled";
import {postSchema} from "./validation";

export const AddPostForm = ({addPost}: { addPost(post: Post): Promise<PostResponse> }) => {
    const {register, handleSubmit, formSubmitHandler, formState: {isSubmitting}} = useForm<Post, PostResponse>(postSchema, addPost)

    
    return (
        <S.FormAddPost onSubmit={handleSubmit(formSubmitHandler)}>
            <TextField
                {...register('title')}
                disabled={isSubmitting}
                required
                label="Enter you post title"
                color="secondary"
            />
            <TextField
                {...register('text')}
                disabled={isSubmitting}
                required
                label="Enter you post text"
                color="secondary"
            />
            <Button
                disabled={isSubmitting}
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                endIcon={<Add/>}
            >
                Add Post
            </Button>
        </S.FormAddPost>
    )
}