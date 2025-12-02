import { Controller, Get, Query } from '@nestjs/common'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('validate')
  validate(
    @Query('identifier') identifier: string,
    @Query('password') password: string,
  ): { success: boolean } {
    return this.authService.validateCredentials(identifier, password)
  }
}
