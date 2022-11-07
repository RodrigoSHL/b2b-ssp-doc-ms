import { BigQuery } from '@google-cloud/bigquery';
import { Module } from '@nestjs/common';
import { BigQueryService } from './bigquery/bigQuery.service';

@Module({
  exports: [BigQuery, BigQueryService],
  providers: [BigQuery, BigQueryService],
})
export class UtilsModule {}
