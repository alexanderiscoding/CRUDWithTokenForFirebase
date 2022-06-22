import { db, token, encryptkey } from '../../../firebaseConfig';

export default async(req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	if (!req.headers.authorization || req.headers.authorization.indexOf('Bearer ') === -1) {
		return res.status(401).json({ message: 'Missing Authorization Header' });
	}
	const authorization =  req.headers.authorization.split(' ')[1];
	if (authorization != token) {
		return res.status(401).json({ message: 'Invalid Authentication Credentials' });
	}
	const crypto = require("crypto");
	let cleardata = req.body.column;
	let encrypteddata = {};

	for(var key in cleardata) {
		if(typeof cleardata[key] !== "object"){
			const hash = crypto.createHash("sha256");
			hash.update(encryptkey);

			const iv = crypto.randomBytes(16);
			const cipher = crypto.createCipheriv("aes-256-gcm", hash.digest(), iv);

			const ciphertext = Buffer.concat([
				cipher.update(Buffer.from(cleardata[key]), "utf8"),
				cipher.final(),
			]);

			const authTag = cipher.getAuthTag();

			const encryptedText = Buffer.concat([iv, authTag, ciphertext]).toString(
				"base64"
			);
			encrypteddata[key] = encryptedText;
		}
	}
	db.collection(req.body.table.name).add(encrypteddata)
	.then((doc) => {
		console.log("Document written with ID: ", doc.id);
		res.status(200).send(doc.id);
	})
	.catch((error) => {
		console.error("Error adding document: ", error);
		res.status(400).send(error);
	});
}