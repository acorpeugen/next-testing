import {Post, PostResponse} from "@types";
import {revalidateTag} from "next/cache";

export const getPosts = async () => {
    'use server';
    const response = await fetch('http://localhost:3001/posts', {next: {tags: ['posts']}})

    const data:PostResponse[] = await response.json()

    return data
}

export const addPost = async (post: Post) => {
    'use server';
    const response = await fetch('http://localhost:3001/posts',{
        method: 'post',
        body: JSON.stringify(post)
    })

    const data:PostResponse = await response.json()

    revalidateTag('posts')

    return data
}