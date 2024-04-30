import * as chai from "chai"
import supertest from "supertest"
import chaiJsonSchemaAjv from "chai-json-schema-ajv"

import postDeleteSchema from "../schemas/postDeleteSchema.js";

chai.use(chaiJsonSchemaAjv)

const {expect} = chai

const request = supertest('https://dummyjson.com')

it("Posts Delete Post Schema Test", async () => {
    const res = await request.delete('/posts/1')
    expect(res.body).to.be.jsonSchema(postDeleteSchema)
})