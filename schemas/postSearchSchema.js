const postSearchSchema = {
    type : "object",
    properties : {
        posts : {
            type : "array",
            items : {
                type: "object",
                properties : {
                    id : {type : "number"},
                    title : {type : "string"},
                    body : {
                        type : "string",
                        // pattern : "^.*love.*$",
                        minLength : 20
                    },
                    userId : {type : "number"},
                    tags : {type : "array"},
                    reaction : {type : "number"}
                },
                required : ["id", "title", "body"]
            },
            maxItems : 30
        },
        total: {type : "number"},
        skip: {type : "number"},
        limit: {type : "number"}
    }
}

export default postSearchSchema