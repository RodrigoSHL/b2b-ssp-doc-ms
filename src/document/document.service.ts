import { Injectable } from '@nestjs/common';
import { BigQueryService } from 'src/utils/bigquery/bigQuery.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';

@Injectable()
export class DocumentService {

  whereCurrentDayToProcess = '';

  constructor(
    private bigQueryService: BigQueryService,
  ) {}

  findAll() {
    const query = this.selectQuery('')
    return query;
  }

  selectQuery(TimeStamp) {
    this.whereCurrentDayToProcess = `DATE(PrvtrxTimeStamp) = "${TimeStamp}"`;

    const select = `SELECT * FROM`
    return select;
  }
}
