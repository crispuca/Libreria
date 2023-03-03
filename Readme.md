Proyecto en Springboot, donde de los puntos extras del challenge se alcanzo a implementar el uso de H2, como base de datos en memoria
Parte Frontend, no se alcanzo con el total de los cruds, fallo en traer todos los libros, y mostrarlos en lista, solo se pudo llegar a crear un formulario y manejar la
eliminacion de los libros

Para iniciar el proyecto solo es necesario clonar el repositorio en tu maquina, de manera local, y de ahi se puede acceder al proyecto tanto del client comop el del server, el del server es la carpeta libreria, y el client el client-libreria

para iniciar el proyecto springboot solo es necesario sincronizar las dependencias en el pom.xml, y tener el jdk 19, para el manejo de ciertas dependencias, luego de eso se ejecuta la aplicacion en LibreriaApplication.

Se pueden probar los siguientes curl para probar la app

1-obtener todos los libros: " curl --location 'http://localhost:8080/api/v1/books' "

2-obtener un libro en particular: " curl --location 'http://localhost:8080/api/v1/books/1' "

3-crear un libro:
curl --location 'http://localhost:8080/api/v1/books' \
--header 'Content-Type: application/json' \
--data '{
    "titulo": "El jardin secreto",
    "autor": "Oscar Wilde",
    "precio": 200,
    "fechalanzamiento": "19-02-1904"
}'

4-actualizar un libro:
curl --location --request PUT 'http://localhost:8080/api/v1/books/1' \
--header 'Content-Type: application/json' \
--data '{
    "titulo": "El jardin secreto Remake",
    "autor": "Oscar Wilde",
    "precio": 200,
    "fechalanzamiento": "19-02-1204"
}'

5-Borrar un libro: curl --location --request DELETE 'http://localhost:8080/api/v1/books/1'

Puede usar la url http://localhost:8080/swagger-ui/index.html, para ver la documentacion en swagger

Para iniciar el proyecto en client-libreria se debe utilizar en la raiz del proyecto npm start, para bajar los modulos que necesita el proyecto en react para correr
