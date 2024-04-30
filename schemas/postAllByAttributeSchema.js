const postGetAllSchema = {
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
                        minLength : 20
                    },
                    userId : {type : "number"},
                    tags : {
                        type : "array",
                        items: { type: "string" }
                    },
                    reaction : {type : "number"}
                },
            },
            maxItems : 30
        },
        total: {type : "number"},
        skip: {type : "number"},
        limit: {type : "number"}
    }
}

export default postGetAllSchema