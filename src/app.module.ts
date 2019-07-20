import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AzureADStrategy } from './aad.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PassportModule],
  controllers: [AppController],
  providers: [AppService, AzureADStrategy],
})
export class AppModule {}
