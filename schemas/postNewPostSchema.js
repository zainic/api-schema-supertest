const postNewPostSchema = {
    type : "object",
    properties : {
        id : {type : "number"},
        title : {type : "string"},
        userId : {type : "number"},
    }
}

export default postNewPostSchema