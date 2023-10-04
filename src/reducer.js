import postSlice from './features/posts/postSlice'
import commentSlice from './features/posts/commentSlice'

const rootReducer = {
    posts: postSlice,
    comments: commentSlice
}

export default rootReducer