# React + Vite

Dirijidos a los alumnos de la cohort 9.

En esta clase tuvimos el primer contacto con React, en donde vimos el uso de React sin Frameworks por parte de create react app y react con vite.


# React + Vite

1) Definir react:

## ¿Qué es React?
React es una biblioteca de JavaScript de código abierto ampliamente utilizada para construir interfaces de usuario interactivas y dinámicas. Fue desarrollada por Facebook y se ha convertido en una de las herramientas más populares en el desarrollo web moderno. React se utiliza comúnmente para crear aplicaciones web de una sola página (SPA) y aplicaciones móviles nativas a través de React Native.

### Características Principales
1. Componentes
React se basa en el concepto de componentes. Los componentes son bloques de construcción reutilizables que encapsulan la lógica y la interfaz de usuario de una parte específica de la aplicación. Estos componentes pueden ser anidados dentro de otros componentes, lo que permite crear interfaces de usuario complejas y escalables.

2. Virtual DOM
React utiliza un Virtual DOM (DOM virtual) para mejorar el rendimiento. En lugar de actualizar el DOM en tiempo real cada vez que cambia el estado de la aplicación, React crea una representación virtual del DOM y calcula las diferencias (diffing) entre la representación virtual anterior y la nueva. Luego, solo se actualizan las partes que han cambiado, lo que reduce la carga en el navegador y mejora la velocidad de la aplicación.

3. JSX (JavaScript XML)
React utiliza JSX, una extensión de JavaScript que permite escribir código HTML directamente en los archivos de JavaScript. Esto facilita la creación de componentes y la renderización de elementos en la interfaz de usuario.

4. Unidireccionalidad de datos
React sigue un flujo de datos unidireccional, lo que significa que los datos fluyen en una sola dirección, desde el componente padre hacia los componentes hijos. Esto facilita el seguimiento de los cambios de estado y depura la aplicación.

5. Comunidad Activa y Ecosistema
React cuenta con una comunidad activa y un amplio ecosistema de bibliotecas y herramientas complementarias que facilitan el desarrollo web moderno. Algunas de estas herramientas incluyen React Router para la gestión de rutas, Redux para la gestión del estado y numerosos componentes y bibliotecas de terceros.

2) Instalar React:

3) Props:

Las props son los atributos que recibe un componente cuando se escribe por medio de JSX y a las cuales el componente tiene acceso para poder inicializarlo, se puede decir que las props son el estado inicial del componente, esto quiere decir que se puede pasar propiedades entre componentes dentro de componentes y hacia otros componentes, ya que la composición otorga esta flexibilidad.

  Ejemplo:

4) State:

El estado de un componente es similar a las props, pero en lugar de que el estado sea transferido al componente, el estado es privado y no es inmutable, por lo que un componente puede cambiar su estado dependiendo de las interacciones y funcionalidades internas del componente, por lo que es el mismo componente el que se encarga de manejar su propio estado.

Al final, el estado es la representación de los datos de un componente en un tiempo determinado, estos datos son mutables y pueden cambiar durante el uso de la aplicación. El estado no es obligatorio, lo que da pie a que existan Stateful Components (componentes con estado) y Stateless Components (componentes sin estado).

Para poder asignar un estado a un componente, se asigna como cualquier otro atributo dentro de la clase, en el constructor usando un this.state, el cual va a guardar el estado del componente y se le puede asignar cualquier valor necesario para que el componente realice su funcionalidad. Al usar React un paradigma funcional para el manejo de los atributos de los componentes, no se puede modificar el estado directamente, la única vez que se asigna es en el constructor, pero cualquier otra modificación que se requiera hacer sobre el estado, se debe realizar usando el método especial setState, el cual forma parte de react y es encargado de realizar y manejar de manera adecuada las actualizaciones de estado al estar internamente ligado al algoritmo de reconciliación que realiza el renderizado del DOM.

  Ejemplo:

5) Operador ternario:

   Ejemplo:

6) React Boostrap::


