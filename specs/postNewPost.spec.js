import * as chai from "chai"
import supertest from "supertest"
import chaiJsonSchemaAjv from "chai-json-schema-ajv"

import postNewPostSchema from "../schemas/postNewPostSchema.js";

chai.use(chaiJsonSchemaAjv)

const {expect} = chai

const request = supertest('https://dummyjson.com')

it("Posts New Post Schema Test", async () => {
    const newPost = {
        id: 3,
        title: 'Testing',
        userId: 4
    }
    const res = await request.post('/posts/add').send(newPost)
    expect(res.body).to.be.jsonSchema(postNewPostSchema)
})