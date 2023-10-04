import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    byId: {},
    allIds: []
}

const commentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addNewComment: {
            reducer(state, action) {
                const { comment } = action.payload
                state.byId[comment.id] = comment
                state.allIds.push(comment.id)
            },
            prepare(postId, body) {
                return {
                    payload: {
                        postId,
                        comment: {
                            id: nanoid(),
                            body
                        }
                    }
                }
            }
        },
        updateComment: {
            reducer(state, action) {
                const { commentId, newComment } = action.payload

                state.byId[commentId].body = newComment
            },
            prepare(commentId, newComment) {
                return {
                    payload: { commentId, newComment }
                }
            }
        }
    }
})

export const {
    addNewComment,
    updateComment
} = commentSlice.actions

export default commentSlice.reducer