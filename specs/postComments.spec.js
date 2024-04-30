import * as chai from "chai"
import supertest from "supertest"
import chaiJsonSchemaAjv from "chai-json-schema-ajv"

import postCommentsSchema from "../schemas/postCommentsSchema.js";

chai.use(chaiJsonSchemaAjv)

const {expect} = chai

const request = supertest('https://dummyjson.com')

it("Posts Comments Schema Test", async () => {
    const res = await request.get('/posts/1/comments')
    expect(res.body).to.be.jsonSchema(postCommentsSchema)
})