import { db, token } from '../../../firebaseConfig';

export default async(req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	if (!req.headers.authorization || req.headers.authorization.indexOf('Bearer ') === -1) {
		return res.status(401).json({ message: 'Missing Authorization Header' });
	}
	const authorization =  req.headers.authorization.split(' ')[1];
	if (authorization != token) {
		return res.status(401).json({ message: 'Invalid Authentication Credentials' });
	}
	db.collection(req.body.table.name).add(req.body.column)
	.then((doc) => {
		console.log("Document written with ID: ", doc.id);
		res.status(200).send(doc.id);
	})
	.catch((error) => {
		console.error("Error adding document: ", error);
		res.status(400).send(error);
	});
}