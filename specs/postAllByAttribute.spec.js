import * as chai from "chai"
import supertest from "supertest"
import chaiJsonSchemaAjv from "chai-json-schema-ajv"

import postAllByAttributeSchema from "../schemas/postAllByAttributeSchema.js";

chai.use(chaiJsonSchemaAjv)

const {expect} = chai

const request = supertest('https://dummyjson.com')

it("Posts All By Attribute Schema Test", async () => {
    const res = await request.get('/posts/user/5')
    expect(res.body).to.be.jsonSchema(postAllByAttributeSchema)
})