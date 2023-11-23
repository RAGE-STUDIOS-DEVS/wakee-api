import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(express.json());


const port = process.env.NODE_ENV === 'local' ? 8080 : process.env.URL;

app.get('/', (req, res, next) => {
	res.status(200).json({
		'message': 'Running Node with Express and Typescript'
	});
});
app.listen(port, () => {
	console.log(
		`Server running on ${port}.`
	)
});