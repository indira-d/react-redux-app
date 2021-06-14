
import { CREATE_POST } from "./types";

//action creator
export function createPost(post){
    return {
        type: CREATE_POST,
        payload: post
    }
}