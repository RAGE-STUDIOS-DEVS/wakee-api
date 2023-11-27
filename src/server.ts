import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from './routes/UserRoutes'

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
app.listen(port, () => {
	console.log(process.env.NODE_ENV);
	console.log(`Server running on ${port}.`);
});