# MovieFlix - Bootcamp Devsuperior :mortar_board:

### Proyecto del curso Bootcamp [DevSuperior](https://devsuperior.com.br/) ministrado por los profesores: [Nelio Alves](https://www.linkedin.com/in/nelio-alves/) y [Washington Soares](https://www.linkedin.com/in/washington-soares-braga/).

En el proyecto, desarrollamos la aplicación de un sistema de avaliación de peliculas llamado MovieFlix

## Visión general del sistema

El sistema MovieFlix consiste en un banco de filmes, los cuales pueden ser listados y avaliados por los usuarios.    

Los usuarios pueden tener el rol de visitantes (VISITOR) y miembros (MEMBER). Solamente los usuarios *MEMBER* pueden insertar la avaliación de una película.     

Al acceder al sistema, el usuario debe realizar un Login. Solamente usuarios logados pueden navegar en las películas. Tras hacer el login, el usuario accederá al listado de películas que las mostrará de forma paginada y ordenadas alfabéticamente por el título. El usuario también podrá filtrar las películas por su género.  

Al seleccionar una película del listado, se muestra una página con los detalles, donde es posíble visualizar la información de la misma y también sus avaliaciones. Si el usuario tiene el rol de *MIEMBRO*, podrá añadir una avaliación en la misma página. Un mismo usuario puede dejar más de una avaliación para la misma película.  

El usuario está compuesto por nombre, email y contraseña, siendo el email el nombre de acceso.  
Cada película está compuesta por título, subtítulo, imagen, año de lanzamiento, sinopsis y género.  

El proyecto constará de un backend desarrollado en Java con Spring Boot y un front end desarrollado en ReactJS.

![modelo de dominio](https://github.com/niltonsjr/assets/blob/main/Movieflix_readme/modelo.jpg?raw=true)

---

## :hammer: Tecnologias utilizadas:
### - Back end:
    - Java
    - Spring Boot
    - Maven
    - H2 / Postman
    - Spring Data JPA
    - Spring Security
    - JUnit y Mockito
---
### - Front end:
    - HTML / CSS / Bootstrap / TypeScript
    - ReactJS
    - React Hooks
    - Axios
    - JEST y Testing Library
---
## :computer: Implantación 
- __Back end:__  [Heroku](https://www.heroku.com/)  
- __Front end:__ [Netlify](https://www.netlify.com/)

##### :mag: Usuarios de acceso: 

VISITOR -- email: bob@gmail.com | contraseña: 123456  
MEMBER -- email: ana@gmail.com | contraseña: 123456

---

## :camera:  Capturas de pantalla

![inicio](https://github.com/niltonsjr/assets/blob/main/Movieflix_readme/home.jpg?raw=true)
![catálogo de películas](https://github.com/niltonsjr/assets/blob/main/Movieflix_readme/movies.jpg?raw=true)
![selector de géneros](https://github.com/niltonsjr/assets/blob/main/Movieflix_readme/categories.jpg?raw=true)
![descripción de película](https://github.com/niltonsjr/assets/blob/main/Movieflix_readme/description.jpg?raw=true)

