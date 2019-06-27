import * as db from './db';

export async function list() {
    const text: string = 'SELECT * FROM my_demo_names ORDER BY id ASC LIMIT 100;';
    const args: any[] = [];
    return db.query(text, args);
}
