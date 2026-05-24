const { Client } = require('pg');

const url = "postgres://postgres.tbmoncymybxywuaxjimd:RzkZxAv8fH6G4MTk@aws-1-us-east-1.pooler.supabase.com:6543/postgres?sslmode=require";

const client = new Client({
  connectionString: url,
  connectionTimeoutMillis: 10000,
});

async function test() {
  try {
    console.log("Connecting...");
    await client.connect();
    console.log("Connected!");
    const res = await client.query('SELECT NOW()');
    console.log("Time:", res.rows[0]);
    await client.end();
  } catch (err) {
    console.error("Connection error:", err);
  }
}

test();
