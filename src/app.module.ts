import { MiddlewareConsumer, NestModule, BadRequestException, Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE, RouterModule } from '@nestjs/core';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { TypeOrmModule } from '@nestjs/typeorm';
import type { ValidationError } from 'class-validator';

import { CommonModule } from './common/common.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { DbConfig } from './config/db.config';
import { AuthModule } from './modules/auth/auth.module';
import { FacilitiesModule } from './modules/facilities/facilities.module';
import { OwnerModule } from './modules/owner/owner.module';
import { PhotoModule } from './modules/photo/photo.module';
import { RoomModule } from './modules/room/room.module';
import { SanatoriumModule } from './modules/sanatorium/sanatorium.module';
import { ServicesModule } from './modules/services/services.module';
import { TreatmentModule } from './modules/treatment/treatment.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    // Database
    // https://docs.nestjs.com/techniques/database
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: DbConfig.DB_HOST,
      port: DbConfig.DB_PORT,
      database: DbConfig.DB_NAME,
      username: DbConfig.DB_USERNAME,
      password: DbConfig.DB_PASSWORD,
      logging: DbConfig.DB_LOG_ENABLE,
      entities: [`${__dirname}/modules/**/*.entity.{js,ts}`],
    }),

    // Service Modules
    CommonModule, // Global

    // Module Router
    // https://docs.nestjs.com/recipes/router-module
    RouterModule.register([]),
    SanatoriumModule,
    UserModule,
    TreatmentModule,
    RoomModule,
    OwnerModule,
    AuthModule,
    PhotoModule,
    ServicesModule,
    FacilitiesModule,
  ],
  providers: [
    // Global Guard, Authentication check on all routers
    // { provide: APP_GUARD, useClass: AuthenticatedGuard },
    // Global Filter, Exception check
    // { provide: APP_FILTER, useClass: ExceptionsFilter },
    // Global Pipe, Validation check
    // https://docs.nestjs.com/pipes#global-scoped-pipes
    // https://docs.nestjs.com/techniques/validation
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        // disableErrorMessages: true,
        transform: true,
        whitelist: true,
        exceptionFactory: (errors: ValidationError[]): BadRequestException => new BadRequestException(errors),
      }),
    },
  ],
})
export class AppModule implements NestModule {
  // Global Middleware, Inbound logging
  public configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
