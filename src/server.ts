import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from './routes/UserRoutes'
import mongoose from 'mongoose';

dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI || '';
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', userRoutes);

const port = process.env.NODE_ENV === 'local' ? 8080 : process.env.URL;

app.get('/', (req, res, next) => {
	res.status(200).json({
		'message': 'Running Node with Express and Typescript'
	});
});

const start = async () => {
	try {
		await mongoose.connect(
			MONGODB_URI
		);
		app.listen(3000, () => console.log('Server started on port 3000'));
	} catch (error) {
		console.log(error);
		process.exit();
	}
}

start();