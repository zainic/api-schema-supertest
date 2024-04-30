const postDeleteSchema = {
    type : "object",
    properties : {
        id : {type : "number"},
        title : {type : "string"},
        body : {
            type : "string",
            minLength : 20
        },
        userId : {type : "number"},
        tags : {
            type : "array",
            items: { type: "string" }
        },
        reaction : {type : "number"},
        isDeleted : {type : "boolean"},
        deletedOn : {type : 'string'}
    },
}

export default postDeleteSchema