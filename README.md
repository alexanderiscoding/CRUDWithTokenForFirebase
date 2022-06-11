## 🚀 Usage

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
      name: "YouDramaList",
    },
    column: {
      english_title: "Cupid's Kitchen",
      display_title: "A Cozinha de Cupido",
      original_title: "舌尖上的心跳",
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
      name: "YouDramaList",
    },
    column: {
      id: "RYIXpDLddsQRwO4Gu9uv",
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
      name: "YouDramaList",
    },
    column: {
      id: "RYIXpDLddsQRwO4Gu9uv",
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
      name: "YouDramaList",
    },
    column: {
      where: "true",
      name: "display_title",
      operator: "==",
      value: "A Cozinha de Cupido",
    },
  }),
});
```
