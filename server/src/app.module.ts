import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './auth/auth-module';
import { AuthService } from './auth/auth.service';
import { User, UserSchema } from './auth/schemas/user-schema';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { RawBodyMiddleware } from './raw-body.middleware';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      `mongodb+srv://Ticoran:yx9qtJrbjjPMdPS@cluster0.ly4qnra.mongodb.net/?retryWrites=true&w=majority`,
    ),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [AppController, LoginController],
  providers: [AppService, LoginService, AuthService, UsersModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RawBodyMiddleware).forRoutes('*');
  }
}
