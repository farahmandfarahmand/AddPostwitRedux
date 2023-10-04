import { useSelector, useDispatch } from "react-redux"
import { addNewComment, updateComment } from "./commentSlice"
import faker from 'faker'

function Comment({ id }) {
    const comment = useSelector(state => state.comments.byId[id])
    const dispatch = useDispatch()
    const handleUpdateComment = () => {
        dispatch(updateComment(id, faker.lorem.sentence()))
    }

    return (
        <div className="comment">
            <button onClick={handleUpdateComment}>Update comment</button>
            <p>{comment.body}</p>
        </div>
    )
}

function Post({ id }) {
    const post = useSelector(state => state.posts.byId[id])
    const dispatch = useDispatch()

    const handleNewComment = () => {
        dispatch(addNewComment(id, faker.lorem.sentence()))
    }

    const comments = post.comments.map(commentId => <Comment id={commentId} key={commentId} />)
    return (
        <div className="post">
            <p>{post.title}</p>
            <button onClick={handleNewComment}>Add new comment</button>
            {comments}
        </div>
    )
}

function Posts() {
    const postIds = useSelector(state => state.posts.allIds)

    const postCm = postIds.map(id => <Post id={id} key={id} />)

    return (
        <div>
            {postCm}
        </div>
    )
}

export default Posts
