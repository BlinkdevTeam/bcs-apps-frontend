// lib/postgres/db.ts
import { Pool, QueryResult, QueryResultRow } from "pg";

declare global {
  var pgPool: Pool | undefined;
}

export const pool =
  global.pgPool ||
  new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    port: parseInt(process.env.PGPORT ?? "25060", 10),

    ssl: {
      rejectUnauthorized: false,
    },
  });

if (process.env.NODE_ENV !== "production") global.pgPool = pool;

/**
 * Optional helper wrapper
 */
export const query = <T extends QueryResultRow = QueryResultRow>(
  text: string,
  params?: unknown[]
): Promise<QueryResult<T>> => pool.query<T>(text, params);