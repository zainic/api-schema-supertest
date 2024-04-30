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
                        exclusiveMinimum : 10,
                    },
                    title : {type : "string"},
                    userId : {type : "number"},
                    reaction : {type : "number"}
                },
                required : ["id", "title", "reactions", "userId"]
            },
            maxItems : 10
        },
        total: {type : "number"},
        skip: {type : "number"},
        limit: {type : "number"}
    }
}

export default postLimitAndSkipSchema