import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilsModule } from './utils/utils.module';
import { DocumentModule } from './document/document.module';

@Module({
  imports: [UtilsModule, DocumentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
