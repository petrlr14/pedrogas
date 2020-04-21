---
title: Bievenido al mundo
date: "2020-04-21T15:48:39.593Z"
description: "La odisea para crear mi propio blog."
tags: "story,react,gatsby"
---

Como toda idea, este blog empezó como un impulso de querer recrear lo que personajes que sigo en la industria han hecho. En este caso le tocó a [Dan Abramov](https://twitter.com/dan_abramov) ser mi fuente de inspiración con su blog [Overreacted](https://overreacted.io/) (en retrospectiva, quizá demasiada inspiración). A continuación relataré el proceso por el que pasé hasta llegar a este producto final (?).

### La necesidad.

¿Por qué necesito de un blog? Porque tengo muy poca disciplina cuando de ser constante se refiere. Me di cuenta de esto porque empecé a realizar el #100DaysOfCode challenge y no tarde ni 3 días en perder la racha 😟. Aunque luego retomé el challenge, otra vez perdí la racha. En el segundo intento también me percaté que los caracteres que me proporciona Twitter no me daba la liberta de expresar mis vivencias del día. Tomando en cuenta que todo lo que estaba haciendo era relativamente nuevo para mí (canvas, firebase, anime.js) cada día era de aprendizaje masivo para mí, por tanto, lo que tenía que contar era proporcional. Aunqué en este momento no se me pasaba por la cabeza el crear un blog.

### Blog... how?

Ahora, una necesidad no obliga una solucion específica. Tan fácil fue, que mi solución fue dejar de publicar mis avances del challenge. ¿Es la mejor solución? Depende de en qué momento me lo preguntes.

Una tarde me encontraba felizmente navegando entre la toxicidad de Twitter, cuando de la nada me pregunté: ¿Por qué no tengo un blog?. Así, sin más. De ahí en adelante no pare de pensar en cómo debería lograrlo.

Pensé en una solución ya hecha como WordPress, alguna página genérica de Blog, pero ninguna me convencía lo suficiente. Me decidí por crear desde cero (casi) todo el sistema.

Tenía claro que el front-en lo realizaría con React, porque es el framework (sí, lo digo, FRAMEWORK) con el que más cómodo me siento y deseo perfeccionar mis conocimientos. En el back-end, pensé en aprender algo nuevo. Quizá Go o Ruby, pero quería utilizar GraphQL, porque la tendencia indica que almenos conocer lo básico sera clave. Siendo sincero, y si no me complico de más, un cliente y una API puede llegar a ser trivial, pero el problema radica en el generado de contenido, tenía en mis manos el crear un CMS... safo.

Este problema ya había pasado por mis manos, cuando estabamos activamente en la planeación del portal del CEII. En ese entonces mi conocimiento con la tecnología no era tanto, porque no me había fogeado tanto como ahora. Pero incluso ahora, si pienso en crear el CMS, prefiero pensarlo otra vez, y así hasta que al final dejo olvidada esa solución.

Investigando un poco descubrí que ya hay unas cuantas soluciones para mi problema, ya que existe el concepto de Headless CMS, cuyo concepto es el de tener una API que maneje la Data y un cliente que la consuma, contrario a un CMS común cuyo manejo es monolítico. Buscando sobre este tema me topé con GrahpCMS, el cual es CaaS (Content as a Service), es decir, maneja el contenido por tí, no te tienes que preocupar con construir la arquitectura del manejador de contenido como tal. Conocer que existían estos servicios me causo un gran alivio, quizá ahora si podría crear mi blog 😃. No.

Había decidido usar [Gatsby](https://www.gatsbyjs.org/) para el front, siempre he querido utilizarlo y pensé que este sería un buen momento para darle una oportunidad. Así que como todo buen informático novato en cierta tecnología me puse a buscar unos buenos tutoriales para ver si lo que quería hacer era posible. Para mi sorpresa, habían unos cuantos tutoriales. Yay, ya tenía un CaaS y una tecnología para el front... pero ¿todo este trabajo en realidad vale la pena para poder expresar lo que quiero comunicar? No lo vale, no para esto. Pero quizá para algún proyecto futuro toda esta información sí que me sea útil.

### Dime ya como diablos lo hiciste.

Bueno, mencioné al principio que Dan Abramov fue en parte mi inspiración para este proyecto. Claro, ya expresé como surgió la necesidad y la solución, pero la implementación de ésta es lo que más me tenía agobiado. Dan tiene un blog personal, pensé: ¿Cómo lo haces Dan?. Así que otra vez, como todo buen informático, me di una vuelta por su perfil de Github, para ver con qué tecnología había desarrollado su blog. Vaya sorpresa, lo hizo con Gatsby y un template... Decidido.

El template es tal cual todo lo que necesitaba. Un feed, entrada individual, nevegación a la siguiente y/o anterior historia, bio. ¿Qué más puedo pedir? claro, un switch para tener modo noche (completamente necesario). Pero espera, ¿como genera el contenido? ¿el template tiene un CMS integrado? Nel pasteles. El contenido es generado **a pie**, debo crear un archivo .md dentro de una carpeta, y ya el template se encarga de tomar la información y mostrarla según el componente.

Lo que he modificado del template ha sido meramente estilo, agregue tags al preview de la entrada y claro, agregue el switch para cambiar a modo noche. Me he estado enterando poco a poco de como funciona. No lo he hecho por completo, pero tengo pensado entender completamente que esta pasando para poder seguir haciendo modificaciones.

### Conclusiones.

Esta ha sido una bonita experiencia, también me motiva a superar mis debilidades, la consistencia. Creo que expresando y plasmando las vivencias en nuestra carrear, ayuda a pensar mejor en los problemas que enfrentas y quien sabe, quizá alguien los lea y te ayude a solucionarlos.

No habré pasado por tantos intentos para luego dejarlo tirado y abandonado. Incluso gaste my dominio .me que me proporciona el Github Student Pack. Si eso no es compromiso, a saber qué será.
