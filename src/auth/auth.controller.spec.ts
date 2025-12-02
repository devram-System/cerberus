import type { TestingModule } from '@nestjs/testing'
import { Test } from '@nestjs/testing'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

const mockAuthService = {
  validateCredentials: jest.fn(),
}

describe('AuthController', () => {
  let controller: AuthController
  let service: typeof mockAuthService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: mockAuthService,
        },
      ],
    }).compile()

    controller = module.get(AuthController)
    service = module.get(AuthService)
  })

  afterEach(() => jest.clearAllMocks())

  it('should return a successful response when <<credentials are validated>>', () => {
    service.validateCredentials.mockReturnValue({ success: true })

    const result = controller.validate()

    expect(service.validateCredentials).toHaveBeenCalled()
    expect(result).toEqual({ success: true })
  })
})
