Requisitos tener instalado:
php;
Node;
Composer;


para base de datos: Xamp o Mysql Worbench

versiones utilizadas en este proyecto:

 	laravel/framework: ^9.2
	php: ^8.0.2
	axios: ^0.25,
        laravel-mix: ^6.0.6
 	vue: ^2.6.12
        vue-axios: ^2.0.0
        vue-router: ^2.0.0


para la ejecucion del sistema necesitamos clonar el repositorio https://github.com/JordanVillegas25/PokedexPruebaTecnica.git
- Abrir el proyecto con Visual Code y ejecutar "composer install".
- Al terminar ejecutar "npm install && npm run dev" esto instala y configura las dependendencias del proyecto.
- El punto env solo se agrega el nombre de la base de datos "pokedexdb" queda de la siguiente manera:
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=pokedexdb
DB_USERNAME=root
DB_PASSWORD=

- Luego ejecutar php artisan migrate para ejecutar las migraciones en la base de datos.
- Ejecutar el back end necesitamos abrir una terminal de Visual studio code y ejecutar "php artisan serve"
- Ejecutar el front end abrimos una nueva terminal y ejecutamos npm run watch.
