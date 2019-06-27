import * as pg from "pg";
import {PoolClient, PoolConfig} from "pg";

const config: PoolConfig = {
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT, 10),
    max: 10,
    idleTimeoutMillis: 30000,
};

if (process.env.POSTGRES_CA) {
    config.ssl = {
        rejectUnauthorized : false,
        ca : process.env.POSTGRES_CA
    }
}

const pool = new pg.Pool(config);
pool.on('error', (err: Error, client: PoolClient) => {
    console.error('idle client error', err.message, err.stack);
});

export async function query(text: string, args: any[]) {
    return pool.query(text, args);
}
