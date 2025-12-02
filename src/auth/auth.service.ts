import { Injectable } from '@nestjs/common'

@Injectable()
export class AuthService {
  validateCredentials(identifier: string, password: string): { success: boolean } {
    void identifier // temp
    void password // temp

    return { success: true }
  }
}
