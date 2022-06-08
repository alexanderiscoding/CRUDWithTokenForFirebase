## 🚀 Usage

Exemplo de post com jQuery

```js
$.post("https://examplename.vercel.app/api/post", { 
    request: 'Name for Request',
    url: window.location.href,
    date: new Date().getTime()
});
```

Exemplo de post com Fetch

```js
fetch('https://examplename.vercel.app/api/post', {
    method: 'POST',
    body: JSON.stringify({ 
        request: 'Name for Request',
        url: window.location.href,
        date: new Date().getTime() 
    })
});
```
