import * as chai from "chai"
import supertest from "supertest"
import chaiJsonSchemaAjv from "chai-json-schema-ajv"

import postSearchSchema from "../schemas/postSearchSchema.js";

chai.use(chaiJsonSchemaAjv)

const {expect} = chai

const request = supertest('https://dummyjson.com')

it("Posts Search Schema Test", async () => {
    const res = await request.get('/posts/search?q=love')
    expect(res.body).to.be.jsonSchema(postSearchSchema)
})