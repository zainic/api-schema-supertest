import * as chai from "chai"
import supertest from "supertest"
import chaiJsonSchemaAjv from "chai-json-schema-ajv"

import postGetAllSchema from "../schemas/postGetAllSchema.js";

chai.use(chaiJsonSchemaAjv)

const {expect} = chai

const request = supertest('https://dummyjson.com')

it("Posts Get All Schema Test", async () => {
    const res = await request.get('/posts')
    expect(res.body).to.be.jsonSchema(postGetAllSchema)
})