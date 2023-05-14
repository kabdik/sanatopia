import { Body, Controller, Post, Res } from '@nestjs/common';
import type { Response } from 'express';

import { AuthService } from './auth.service';
import { LoginBodyDto } from './dto/login.body.dto';

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post('login')
  public async login(@Body() data: LoginBodyDto, @Res({ passthrough: true }) res:Response): Promise<void> {
    await this.auth.login(res, data);
  }
}
