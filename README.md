# Tarea Modulo Node.JS

Tarea que realicé para la XAcademy 2023. La misma esta destinada a afianzar conocimientos sobre Node.


## Tecnologías utilizada


**Server:** Node, Express, Sequelize, SQLite, Passport


## Proceso de desarrollo.

La consigna de la tarea pedia crear una API Rest para manejar bibliotecas(Libraries) y los libros asociados a cada una de esas bibliotecas utilizando Node, Express, Sequelize y Passport, tambien SQLite para la base de datos.

Primero comencé con la implementación de Express, respetando la arquitectura que conlleva un proyecto con Express.

    1°- Luego de instalar todas las librerias, creé el archivo server.js el cual configura 
        el servidor web mediante la importacion de express y la creación de un objeto de 
        la aplicacion express, asignado a la variable con nombre "app", que llama a la
        función "express()".

        También definí las rutas, por medio de la funcion "use()", de la API para manejar 
        el CRUD de: Las bibliotecas, los libros, la autenticación y los usuarios.
        
        Por ultimo, por medio de la función "listen()" inicio el servidor y la base de 
        datos, y creo un usuario "admin" como lo especifica el ejercicio.

    2°- Routes o rutas:

        Los archivos en la carpeta "./routes" definen los métodos HTTP que se van a 
        utilizar, previamente en "server.js" habia definido que por ejemplo la ruta que
        maneja los libros es "/book". Esa ruta llama al objeto bookRoute almacenado en un
        indice ( index.js ) que lo direcciona al archivo "./routes/bookRoute" el cual 
        tiene los métodos para el CRUD.

        Dentro de los archivos con el sufijo "Route": En una variable "router" llamo a 
        la función "Router()" de express lo cual crea una instancia del enrutador. Este
        enrutador luego lo utilizo para llamar a un método específico del CRUD,
        por ejemplo: "router.get('/', bookController.getAllBooks);" cuando haga una 
        petición get en la ruta "/book/" llamo a la función getAllBooks en bookController.
        Por el otro lado tambien la ruta puede incluir un parametro como: "/:bookid", 
        como es en el caso de "router.get('/:bookid', bookController.getBook);", que pasa
        ese parametro para, por ejemplo, poder identificar el libro por id.

    3°- Controllers o controladores:

        Cuando uno de los controllers es llamado por un route, estos se encargan de, por 
        medio de una función asíncrona, pasar la solicitud (req) y respuesta (res) hacia el
        próximo paso dentro del proyecto que son los services. Por ejemplo, la función:
        "updateLibrary" que es llamada por un metodo PUT en el enrutador "libraryRoute",
        crea una variable "library" que llama a la funcion "updateLibrary" en el
        servicio "libraryService" y le pasa los parametros "req.params.libraryid" y 
        "req.body". Estos parametros son obtenidos por medio del cliente que utiliza la 
        API, el primer parametro es el id de la libreria que se obtuvo al usar la ruta
        "/library/:libraryid" (donde :libraryid es un numero), y el segundo parametro es
        el body con el cual se va a editar los datos de la libreria. Si esa libreria no 
        existe, el server le devuelve una respuesta con un status(404) y un mensaje json.

    4°- Services o servicios:

        Los services se encargan de manejar la lógica de negocio de la aplicación. En 
        el caso de este proyecto, solo se encargan de recibir los parametros que envian
        los controllers y pasarselos a los providers.

    5°- Providers o proveedores:

        Los providers, en este proyecto, se encargan de recibir los datos que envian los
        services y realizan operaciones en la base de datos comunicandose por medio de 
        los models, ya sea de las libraries, books o users.

        En el caso de "updateBook" dentro de el archivo "bookProvider" crea una variable
        book, la cual busca por medio de la funcion "findByPk" en el objeto "bookModel"
        un book con el id que le paso el service. Si lo encuentra, actualiza los datos de
        ese book, y luego lo guarda con los nuevos datos.

    6°- Models o modelos:

        Los models se encargan de la logica de datos de la aplicación. En este caso, por 
        medio de sequelize define un modelo dentro de la base de datos con sus respectivos
        datos valga la redundancia.

        En "libraryModel" sequelize define el modelo "sequelize.define('Libraries')", y
        se le otorgan los datos: id, name, etc.
        Los datos pueden ser de distintos tipos(DataTypes.STRING, DataTypes.INTEGER), y
        pueden incluir parametros como "allowNull: true/false" que permite, o no, que un
        dato sea nulo, o "primaryKey" que se utiliza como un identificador unico,
        normalmente utilizado para id's. Otros parametros como "paranoid" permiten el 
        borrado lógico dentro de la base de datos para que cuando se destruya un objeto,
        solo lo marque como borrado y no lo elimine completamente.

        También aquí se pueden definir las relaciones entre modelos."Library.hasMany(Book)"
        y "Book.belongsTo(Library)" define una relacion One-To-Many donde una biblioteca
        puede contener muchos libros. El atributo "foreignKey", incluido en hasMany y 
        belongsTo, hace referencia a la "primaryKey" para linkear los books con las
        libraries.

    Extra- Middlewares y autenticación:

        Los middlewares se utilizan como un intermedio entre la ejecución de una solicitud
        HTTP y el resto del código, controlando el flujo del mismo (así lo entiendo yo por
        lo menos). En este proyecto lo utilizo para validar a un usuario. En el middleware
        "auth-mdw" utilizo la libreria passport para autenticar y validar tokens JWT.
        Cuando un cliente se loguea en la API, recibe un token y passport decide si es 
        valido o no. A este middleware lo exporto para luego utilizarlo en las rutas:
            Ejemplo: "router.post('/', jwtValidMDW, libraryController.createLibrary )"
        Antes de llamar a la funcion en el controller, el middleware decide si el usuario
        es o no es valido.
    







## Conclusión

Aprendí mucho al realizar este proyecto, es la primera vez que veía backend y, aunque
algunas cosas no me quedaron completamente claras, como el manejo de passport y algunos cuestiones relacionadas a sequelize y sqlite, creo que aprendí un monton para haber comenzado con casi nada de conocimiento y siguiendo este bootcamp tan intensivo. Ayudó
también un monton la forma de explicar del profe y su predisposicion a responder todas las preguntas que surgían, Gracias :)