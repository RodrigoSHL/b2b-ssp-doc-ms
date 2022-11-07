import { Module } from '@nestjs/common';
import { DocumentService } from './document.service';
import { DocumentController } from './document.controller';
import { UtilsModule } from 'src/utils/utils.module';

@Module({
  imports: [UtilsModule],
  controllers: [DocumentController],
  providers: [DocumentService]
})
export class DocumentModule {}
