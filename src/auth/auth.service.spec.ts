import { Test } from '@nestjs/testing'
import { AuthService } from './auth.service'

describe('AuthService', () => {
  let service: AuthService

  beforeEach(async () => {
    service = (await Test.createTestingModule({ providers: [AuthService] }).compile()).get(
      AuthService,
    )
  })

  it('should return <<success when credentials are validated>>', () => {
    const identifier = 'user.example'
    const password = 'password-example'

    const result = service.validateCredentials(identifier, password)

    expect(result).toEqual({ success: true })
  })
})
