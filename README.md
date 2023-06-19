##Descripción:
	Se escogió la propuesta 2 (CarShop), la solución de este proyecto React utiliza un componente diferente para sección que 
	se debe llenar, se utilizó un Context para almacenar datos y al final muestra un resumen detallado de la orden de trabajo.
	A futuro se puede implementar la funcionalidad del botón Guardar y conectar con alguna base de datos para conservar los 
	registros de cada orden generada.

##Desarrollo:
	De manera local, al descargar el proyecto ubicarse en la carpeta carshop y ejecutar:
		**npm start**
	Para generar los archivos con se desplegará en AWS y GitHub:
		**npm run build**

##Despliegue:
	Para AWS:
		Copiar los archivos de la carpeta build en el bucket de S3 creado en AWS.
	Para GitHub Pages:
		Establecer el index.html de la carpeta build como archivo raíz del GitHub Page.