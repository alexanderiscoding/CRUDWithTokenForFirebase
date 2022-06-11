## 🚀 Usage

Download Admin SDK Firebase for Node.js in Account Service from Project Settings

Change filename to serviceAccountKey.json and save in base project

Change after **Bearer** for same token from firebaseConfig.js

Example for create new table or add on table

```js
fetch("https://examplename.vercel.app/api/create", {
  method: "POST",
  headers: new Headers({
    authorization: "Bearer 7f59ba5f69d5b4e588e0ab0d4f8e1634",
  }),
  body: JSON.stringify({
    table: {
      name: "YouDramaList"
    },
    column: {
      english_title: "Cupid's Kitchen",
      display_title: "A Cozinha de Cupido",
      original_title: "舌尖上的心跳"
    },
  }),
});
```

Example for delete document

```js
fetch("https://examplename.vercel.app/api/delete", {
  method: "POST",
  headers: new Headers({
    authorization: "Bearer 7f59ba5f69d5b4e588e0ab0d4f8e1634",
  }),
  body: JSON.stringify({
    table: {
      name: "YouDramaList"
    },
    column: {
      id: "RYIXpDLddsQRwO4Gu9uv"
    },
  }),
});
```

Example for delete field from document

```js
fetch("https://examplename.vercel.app/api/delete", {
  method: "POST",
  headers: new Headers({
    authorization: "Bearer 7f59ba5f69d5b4e588e0ab0d4f8e1634",
  }),
  body: JSON.stringify({
    table: {
      name: "YouDramaList"
    },
    column: {
      id: "uKX3jYQYSYbiMsZv9KYR",
      delete: "true",
      name: "english_title"
    },
  }),
});
```

Example for delete for list document from [operators](https://firebase.google.com/docs/firestore/query-data/queries#query_operators)

```js
fetch("https://examplename.vercel.app/api/delete", {
  method: "POST",
  headers: new Headers({
    authorization: "Bearer 7f59ba5f69d5b4e588e0ab0d4f8e1634",
  }),
  body: JSON.stringify({
    table: {
      name: "YouDramaList"
    },
    column: {
      where: "true",
      name: "display_title",
      operator: "==",
      value: "A Cozinha de Cupido"
    },
  }),
});
```

Example for read document

```js
fetch("https://examplename.vercel.app/api/read", {
  method: "POST",
  headers: new Headers({
    authorization: "Bearer 7f59ba5f69d5b4e588e0ab0d4f8e1634",
  }),
  body: JSON.stringify({
    table: {
      name: "YouDramaList"
    },
    column: {
      id: "RYIXpDLddsQRwO4Gu9uv"
    },
  }),
});
```

Example for list document from [operators](https://firebase.google.com/docs/firestore/query-data/queries#query_operators)

```js
fetch("https://examplename.vercel.app/api/read", {
  method: "POST",
  headers: new Headers({
    authorization: "Bearer 7f59ba5f69d5b4e588e0ab0d4f8e1634",
  }),
  body: JSON.stringify({
    table: {
      name: "YouDramaList"
    },
    column: {
      where: "true",
      name: "display_title",
      operator: "==",
      value: "A Cozinha de Cupido"
    },
  }),
});
```

Example for update document

```js
fetch("https://examplename.vercel.app/api/update", {
  method: "POST",
  headers: new Headers({
    authorization: "Bearer 7f59ba5f69d5b4e588e0ab0d4f8e1634",
  }),
  body: JSON.stringify({
    table: {
      name: "YouDramaList",
      id: "uKX3jYQYSYbiMsZv9KYR"
    },
    column: {
      english_title: "New Cupid's Kitchen",
      display_title: "Uma Nova Cozinha do Cupido",
      original_title: "舌尖上的心跳"
    },
  }),
});
```

For example in PHP view LoginWithAPI.php in [AuthWithTokenForEmail](https://github.com/alexanderiscoding/AuthWithTokenForEmail)