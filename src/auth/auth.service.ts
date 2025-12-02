import { Injectable } from '@nestjs/common'

@Injectable()
export class AuthService {
  validateCredentials(): { success: boolean } {
    return { success: true }
  }
}
