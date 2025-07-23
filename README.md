🍔 Proyecto: "Arma Tu Combo de Hamburguesas"
¡Bienvenido al proyecto "Arma Tu Combo de Hamburguesas"! Esta aplicación permite a los usuarios personalizar su combo de hamburguesas eligiendo ingredientes, acompañamientos y bebidas, con un sistema de carrito de compras integrado.

🚀 Características principales
Esta aplicación web permite a los usuarios crear combos personalizados de hamburguesas seleccionando ingredientes, acompañamientos y bebidas. Incluye un sistema de carrito de compras para revisar y modificar el pedido antes de finalizar la compra. La interfaz es intuitiva y fácil de usar, pensada para ofrecer una experiencia divertida y práctica al armar tu combo ideal.


🛠️ Tecnologías utilizadas

Este proyecto está desarrollado con **Next.js** , **Redux Toolkit** para la gestión eficiente del estado global y **Tailwind CSS** para el diseño de la interfaz de usuario con estilos modernos y personalizables.


📌 Instalación

Clona el repositorio:
git clone https://github.com/tuusuario/arma-tu-combo.git  

Instala las dependencias (si usa Node.js):
npm install  


Ejecuta el proyecto:
npm start  

📸 Capturas de Pantalla

En la siguiente imagen se muestra la pantalla inicial, donde el usuario debe seleccionar una hamburguesa y escribir su nombre para habilitar el botón "Siguiente". Sin completar ambos campos, no es posible avanzar al siguiente paso.
![alt text](image.png)

En esta sección, puedes ver cómo la aplicación te permite personalizar tu combo de hamburguesas de manera sencilla y visual. Cada ingrediente, acompañamiento y bebida se presenta con opciones claras para que puedas elegir según tus preferencias. Además, el sistema de carrito te muestra en tiempo real los productos seleccionados y el precio total, facilitando la revisión y modificación de tu pedido antes de finalizar la compra.

Para mejorar la experiencia de usuario, las imágenes cuentan con un efecto *hover*: al pasar el cursor sobre ellas, se resaltan con un borde y una sombra suave, permitiendo identificar fácilmente la opción seleccionada o visualizar mejor los detalles de cada pantalla.

```css
<style>
img:hover {
      border: 2px solid #ff9800;
      box-shadow: 0 4px 16px rgba(0,0,0,0.15);
      transition: border 0.2s, box-shadow 0.2s;
}
</style>
```
![alt text](image-1.png)

En esta pantalla, el usuario puede seleccionar una bebida para completar su combo. Si decide no elegir ninguna, puede finalizar el pedido igualmente. Al hacer clic en "Finalizar pedido", la aplicación genera un ticket en PDF con el resumen de la compra. Además, se ofrece la opción de regresar al paso inicial para seleccionar una hamburguesa diferente y crear un nuevo combo.
![alt text](image-2.png)

En la última imagen se muestra el ticket generado por la aplicación, donde se detallan los productos seleccionados, el precio total y el total de calorías del combo. Esta pantalla permite al usuario revisar el resumen de su compra antes de finalizar el pedido.

![alt text](image-3.png)

🔗 Demo
🔜 https://app-armatu-combo.vercel.app/

🤝 Contribuciones
¡Las contribuciones son bienvenidas! Abre un issue o envía un pull request.

📜 Licencia
MIT License © 2025 - Walter Castillo