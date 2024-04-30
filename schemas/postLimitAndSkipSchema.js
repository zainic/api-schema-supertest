const postLimitAndSkipSchema = {
    type : "object",
    properties : {
        posts : {
            type : "array",
            items : {
                type: "object",
                properties : {
                    id : {
                        type : "number",
                        minimum : 10,
                    },
                    title : {type : "string"},
                    userId : {type : "number"},
                    reaction : {type : "number"}
                },
                required : ["id", "title", "reactions", "userId"]
            },
        },
        total: {type : "number"},
        skip: {type : "number"},
        limit: {type : "number"}
    }
}

export default postLimitAndSkipSchema