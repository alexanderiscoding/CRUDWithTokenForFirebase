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
	if(req.body.column.where === "true"){
		const table = db.collection(req.body.table.name);
		const snapshot = await table.where(req.body.column.name, req.body.column.operator, req.body.column.value).get();
		if (snapshot.empty) {
			return res.status(400).send("No matching documents.");
		}
		let alldocdata = {};
		snapshot.forEach(doc => {
			alldocdata[doc.id] = doc.data();
		});
		res.status(200).send(alldocdata);
	}else{
		const docTable = db.collection(req.body.table.name).doc(req.body.column.id);
		const doc = await docTable.get();
		if (!doc.exists) {
			res.status(400).send("No such document!");
		} else {
			res.status(200).send(doc.data());
		}
	}
}