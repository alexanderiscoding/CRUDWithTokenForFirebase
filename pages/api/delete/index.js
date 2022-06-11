import { db, token, fieldValue } from '../../../firebaseConfig';

export default async(req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	if (!req.headers.authorization || req.headers.authorization.indexOf('Bearer ') === -1) {
		return res.status(401).json({ message: 'Missing Authorization Header' });
	}
	const authorization =  req.headers.authorization.split(' ')[1];
	if (authorization != token) {
		return res.status(401).json({ message: 'Invalid Authentication Credentials' });
	}
	if(req.body.column.delete === "true"){
		const table = db.collection(req.body.table.name).doc(req.body.column.id);
		await table.update({
			[req.body.column.name]: fieldValue.delete()
		});
		res.status(200).send("Field successfully deleted!");
	}else{
		await db.collection(req.body.table.name).doc(req.body.column.id).delete();
		res.status(200).send("Document successfully deleted!");
	}
}