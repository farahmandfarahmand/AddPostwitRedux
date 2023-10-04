import { createSlice, nanoid } from '@reduxjs/toolkit'
import { addNewComment } from './commentSlice'

const initialState = {
    byId: {},
    allIds: []
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addNewPost: {
            reducer(state, action) {
                const { payload } = action
                state.byId[payload.id] = payload
                state.allIds.push(payload.id)
            },
            prepare(title, body) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        body,
                        comments: []
                    }
                }
            }
        }
    },
    extraReducers: builder => {
        builder
            .addCase(addNewComment, (state, action) => {
                const { postId, comment } = action.payload
                state.byId[postId].comments.push(comment.id)
            })
    }
})

export const {
    addNewPost,

} = postSlice.actions

export default postSlice.reducer