import { Test } from '@nestjs/testing'
import type { INestApplication } from '@nestjs/common'
import request from 'supertest'
import { AppModule } from '../src/app.module'
import type { Server } from 'http'

describe('Authentication', () => {
  let app: INestApplication

  beforeAll(async () => {
    app = (
      await Test.createTestingModule({ imports: [AppModule] }).compile()
    ).createNestApplication()

    await app.init()
  })

  afterAll(async () => app.close())

  it('should return a successful response when <<the endpoint is accesed>>', async () => {
    const ENDPOINT = '/auth/validate'

    const server = app.getHttpServer() as unknown as Server
    const res = await request(server).get(ENDPOINT)

    expect(res.status).toBe(200)
    expect(res.body).toEqual({ success: true })
  })
})
