import { Controller, Get, UseGuards, createParamDecorator } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';

export const User = createParamDecorator((data, req) => {
  return req.user;
});

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard('aad'))
  getHello(@User() user): string {
    console.log(user.roles);

    return this.appService.getHello();
  }
}
