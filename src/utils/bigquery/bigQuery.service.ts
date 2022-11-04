import { Injectable } from '@nestjs/common';
import { BigQuery } from '@google-cloud/bigquery';

@Injectable()
export class BigQueryService {
  constructor(private readonly bigquery: BigQuery) {}

  async bqExecutor(query) {
    // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query
    console.log(query);
    const options = {
      query: query,
      // Location must match that of the dataset(s) referenced in the query.
      location: 'US',
    };

    // Run the query as a job
    const [job] = await this.bigquery.createQueryJob(options);
    console.log(`Job ${job.id} started.`);

    // Wait for the query to finish
    const [rows] = await job.getQueryResults();
    console.log(rows);
    return rows;
  }
}
