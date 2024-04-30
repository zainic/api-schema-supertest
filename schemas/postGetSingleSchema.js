const postGetSingleSchema = {
    type : "object",
    properties : {
        id : {type : "number"},
        title : {type : "string"},
        body : {
            type : "string",
            minLength : 20
        },
        userId : {type : "number"},
        tags : {type : "array"},
        reaction : {type : "number"}
    },
    required : ["id", "title", "body"]
}

export default postGetSingleSchema