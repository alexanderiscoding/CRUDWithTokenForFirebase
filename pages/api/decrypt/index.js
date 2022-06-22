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
	const docTable = db.collection(req.body.table.name).doc(req.body.column.id);
	const doc = await docTable.get();
	if (!doc.exists) {
		res.status(400).send("No such document!");
	} else {
		let encrypteddata = doc.data();
		let cleardata = {};

		for(var key in encrypteddata) {
			if(typeof encrypteddata[key] !== "object"){

				const encryptedBuffer = Buffer.from(encrypteddata[key], "base64");

				const hash = crypto.createHash("sha256");
				hash.update(encryptkey);

				if (encryptedBuffer.length < 17) {
					return res.status(401).json({ message: 'Provided ENCRYPTEDTEXT must decrypt to a non-empty string' });
				}
				
				const iv = encryptedBuffer.slice(0, 16);
				const authTag = encryptedBuffer.slice(16, 32);
				const decipher = crypto.createDecipheriv("aes-256-gcm", hash.digest(), iv);
				decipher.setAuthTag(authTag);
				const cipherText = decipher.update(
					encryptedBuffer.slice(32),
					"base64",
					"utf-8"
				);
				const clearText = cipherText + decipher.final("utf-8");
				cleardata[key] = clearText;
			}
		}
		res.status(200).send(cleardata);
	}
}