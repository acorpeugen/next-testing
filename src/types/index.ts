export type Post = {
    title: string
    text: string
}

export type PostResponse = Post & {
    id: string
}