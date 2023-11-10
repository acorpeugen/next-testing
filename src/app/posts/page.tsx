import {Posts} from "@components";
import {getPosts, addPost} from "./actions";

const PostsPage = async () => {
    const posts = await getPosts()

    return (
        <Posts posts={posts} addPost={addPost}/>
    )
}

export default PostsPage