import * as chai from "chai"
import supertest from "supertest"
import chaiJsonSchemaAjv from "chai-json-schema-ajv"

import postGetSingleSchema from "../schemas/postGetSingleSchema.js";

chai.use(chaiJsonSchemaAjv)

const {expect} = chai

const request = supertest('https://dummyjson.com')

it("Posts Get Single Schema Test", async () => {
    const res = await request.get('/posts/1')
    expect(res.body).to.be.jsonSchema(postGetSingleSchema)
})