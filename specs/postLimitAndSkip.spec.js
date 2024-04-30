import * as chai from "chai"
import supertest from "supertest"
import chaiJsonSchemaAjv from "chai-json-schema-ajv"

import postLimitAndSkipSchema from "../schemas/postLimitAndSkipSchema.js";

chai.use(chaiJsonSchemaAjv)

const {expect} = chai

const request = supertest('https://dummyjson.com')

it("Posts Limit and Skip Schema Test", async () => {
    const res = await request.get('/posts?limit=10&skip=10&select=title,reactions,userId')
    expect(res.body).to.be.jsonSchema(postLimitAndSkipSchema)
})