// vamos a hacer una peticion POST para cargar datos

let nuevoPost = JSON.stringify({
    title: "Nuevo Post",
    body: "Contenido del post",
    userId: 54
});


fetch('https://jsonplaceholder.typicode.com/posts',{
    method: "POST",
    body: nuevoPost,
    headers:{
        "Content-Type": "application/json; charset=UTF-8"
    }
})
.then(response => response.json())
.then(datos => console.log(datos));