'use client'
import {Avatar, ListItemAvatar, ListItemText} from "@mui/material";

import type {Post, PostResponse} from "@types";

import * as S from './styled'
import {AddPostForm} from "./parts/AddPostForm";

export const Posts = ({posts, addPost}: { posts: PostResponse[]; addPost(post: Post): Promise<PostResponse> }) => {

    return (
        <>
            <AddPostForm addPost={addPost}/>
            <S.Container>
                <S.Title>Posts List</S.Title>
                <S.List>
                    {posts?.map(({id, title, text}) => (
                        <S.ListItem key={id}>
                            <ListItemAvatar>
                                <Avatar>{id}</Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={title}/>
                            <ListItemText primary={text}/>
                        </S.ListItem>
                    ))}
                </S.List>
            </S.Container>
        </>
    )
}