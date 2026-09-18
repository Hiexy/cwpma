import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';

const db = drizzle({
	connection: {
		connectionString: process.env.DATABASE_URL!,
		ssl: true
	}
});

const app = express();

app.use(
	cors({
		credentials: true,
	}),
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
	console.log("Server running on http://localhost:8080/");
});
