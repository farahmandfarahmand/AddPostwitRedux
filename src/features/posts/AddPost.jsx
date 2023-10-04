import { useDispatch } from "react-redux"
import { addNewPost } from "./postSlice"
import faker from 'faker'

function AddPost() {
    const dispatch = useDispatch()
    
    const handleNewPost = () => {
        dispatch(addNewPost(
            faker.lorem.sentence(),
            faker.lorem.paragraph()
        ))
    }

    return <button onClick={handleNewPost}>New Post</button>
}

export default AddPost
