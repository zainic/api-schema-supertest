import * as chai from "chai"
import supertest from "supertest"
import chaiJsonSchemaAjv from "chai-json-schema-ajv"

import postUpdatePostSchema from "../schemas/postUpdatePostSchema.js";

chai.use(chaiJsonSchemaAjv)

const {expect} = chai

const request = supertest('https://dummyjson.com')

it("Posts Update Post Schema Test", async () => {
    const updatedPost = {
        title: 'I think I should shift to the moon',
    }
    const res = await request.put('/posts/1').send(updatedPost)
    expect(res.body).to.be.jsonSchema(postUpdatePostSchema)
})