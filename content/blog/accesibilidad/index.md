---
title: Acceso a todos
date: "2020-05-09T21:14:17.321Z"
description: "Un descubrimiento que no es nuevo pero como que lo es."
tags: "web"
image: "accessibility.jpeg"
---

![Accessibility icon with light blue background and a person in the middle](./accessibility.jpeg)
_Pensar que todos tenemos las mismas facultades no es solo poco empático, sino que conlleva a un mal diseño._

## Trabajando sin pensar.

Si has hecho unas cuantas páginas o aplicaciones web entonces has utilizado muchos "trucos" con elementos html y css para lograr un efecto que viste en otra página. ¿No? Pues yo sí.

Por ejemplo, mientras intentaba crear un `select` para este mismo blog me encontré con un problema. Estilizar este elemento no es tan sencillo como con cualquier otro, de hecho la solución que encontré en muchos sitios era utilizar elementos `div` junto con `span`. Claramente no utilizar un elemento nativo para este fin te priva del comportamiento _out of the box_ que el navegador le asigna, a los cuales no les había tomado en cuenta e incluso me parecían hasta molestos. Habiendo terminado mi super `select` estilizado hecho con `div` me di cuenta que ahora al presionar mi tecla tab ya no se seleccionaba. Me quedé 😮.

Alguna vez dije que la mejor manera de aprender en este rubro es el seguir a exponentes importantes, gente cuya mente crea grandes cosas, personas que ya han estado en el negocio por mucho tiempo. El mismo hecho de haber estado trabajando por más tiempo implica que han afrontado mucho problemas, que puede que te estén ocurriendo, o que te puedan ocurrir en un futuro. Menciono esto porque instantáneamente recordé a [Ryan Florence](https://twitter.com/ryanflorence) (solo falta leer la su bio para saber que este hombre sabe lo que hace). Ryan aparece mucho en mi feed y en muchos tweets es por temas de accesibilidad. Yo he leído varios de ellos, pero no tanto a conciencia.

## Abriendo los ojos ante un nuevo mundo.

La accesibilidad web, lastimosamente, nunca ha sido un tema que me quitara el sueño, no le había tomado mucha importancia si mis imágenes tuviera un texto alternativo adecuado y cosas así. Aunque cuando recibí la materia Programación Web en la universidad, el proyecto debía llevar muchas características de accesibilidad, pero en esa época no me gustaba mucho web, por lo que no le di mucha importancia tampoco. Pero me dio curiosidad el resolver mi problema esta vez.

Googleando un poco me di cuenta que este tema no es tomado a la ligera, es un tema serio. Y no es para sorprenderse, porque las personas que no pueden interactuar de una forma _"normal"_ con nuestro sitio o aplicación y debemos asegurarnos que su experiencia sea igual para todos.

Ahora, no me he convertido en un maestro en la accesibilidad de la noche a la mañana, de hecho, no he investigado lo suficiente. Mi problema lo resolví utilizando la librería [Reach UI](https://reacttraining.com/reach-ui/) (del propio Ryan), que busca ser la base para aplicaciones React accesible. Yo casi no hice nada.

Sin dudarlo, este tema ahora ya no me pasará desapercibido mientras trabajo en la web. Me queda mucho por estudiar, mucho por entender y mucho por aplicar.
