## 🚀 Usage

Example for create new table or add on table

```js
fetch("https://examplename.vercel.app/api/create", {
  method: "POST",
  headers: new Headers({
    authorization: "Bearer abcb0dea85221344afabb1f0b2d5d6015b98c0f7",
  }),
  body: JSON.stringify({
    table: {
      name: "test",
    },
    column: {
      english_title: "Cupid's Kitchen",
      display_title: "A Cozinha de Cupido",
      original_title: "舌尖上的心跳",
    },
  }),
});
```
