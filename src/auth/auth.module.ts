import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({
    global: true,
    secret: '1234',
    signOptions: { expiresIn: '3600s' },
  })],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
