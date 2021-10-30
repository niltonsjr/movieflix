# MovieFlix - Bootcamp Devsuperior :mortar_board:

### Proyecto del curso Bootcamp [DevSuperior](https://devsuperior.com.br/) ministrado por los profesores: [Nelio Alves](https://www.linkedin.com/in/nelio-alves/) y [Washington Soares](https://www.linkedin.com/in/washington-soares-braga/).

En el proyecto, desarrollamos la aplicación de un sistema de avaliación de peliculas llamado MovieFlix

## Visión general del sistema

El sistema MovieFlix consiste en un banco de filmes, los cuales pueden ser listados y avaliados por los usuarios.

Los usuarios pueden tener el rol de visitantes (VISITOR) y miembros (MEMBER). Solamente los usuarios _MEMBER_ pueden insertar la avaliación de una película.

Al acceder al sistema, el usuario debe realizar un Login. Solamente usuarios logados pueden navegar en las películas. Tras hacer el login, el usuario accederá al listado de películas que las mostrará de forma paginada y ordenadas alfabéticamente por el título. El usuario también podrá filtrar las películas por su género.

Al seleccionar una película del listado, se muestra una página con los detalles, donde es posíble visualizar la información de la misma y también sus avaliaciones. Si el usuario tiene el rol de _MIEMBRO_, podrá añadir una avaliación en la misma página. Un mismo usuario puede dejar más de una avaliación para la misma película.

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

- **Back end:** [Heroku](https://www.heroku.com/)
- **Front end:** [Netlify](https://www.netlify.com/)

Enlace a la aplicación: [Movieflix](https://nsj-movieflix.netlify.app/)

##### :mag: Usuarios de acceso:

VISITOR -- email: bob@gmail.com | contraseña: 123456  
MEMBER -- email: ana@gmail.com | contraseña: 123456

---

## :camera: Capturas de pantalla

<p align="center">
    <img width="100%" height="100%" src="https://github.com/niltonsjr/assets/blob/main/Movieflix_readme/home.jpg?raw=true">
    <img width="100%" height="100%" src="https://github.com/niltonsjr/assets/blob/main/Movieflix_readme/movies.jpg?raw=true">
    <img width="100%" height="100%" src="https://github.com/niltonsjr/assets/blob/main/Movieflix_readme/categories.jpg?raw=true">
    <img width="100%" height="100%" src="https://github.com/niltonsjr/assets/blob/main/Movieflix_readme/description.jpg?raw=true">
     <img align="left" width="45%" height="45%" src="https://github.com/niltonsjr/assets/blob/main/Movieflix_readme/home_resp.jpg?raw=true">
    <img align="right" width="45%" height="45%" src="https://github.com/niltonsjr/assets/blob/main/Movieflix_readme/categories_resp.jpg?raw=true">
    
</p>
<p align="center">
    <img style="padding-top: 5px;" align="left" width="45%" height="45%"  src="https://github.com/niltonsjr/assets/blob/main/Movieflix_readme/movies_resp.jpg?raw=true">  
    <img style="padding-top: 5px;" align="right" width="45%" height="45%" src="https://github.com/niltonsjr/assets/blob/main/Movieflix_readme/description_resp.jpg?raw=true">
</p>
