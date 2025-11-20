FlowerTime - Paquete de despliegue

Contenido:
- index.html   (la app)
- server.js    (servidor Node/Express simple)
- package.json

Cómo descargar y usar localmente
1) En tu equipo, abre la carpeta `c:\Users\yeira\Downloads\flowertime-deploy`.
2) Comprime la carpeta si quieres descargarla: clic derecho -> Enviar a -> Carpeta comprimida (Windows).
3) Ejecutar localmente (Node.js requerido):
   - Abre PowerShell en la carpeta `flowertime-deploy`.
   - Ejecuta:
     npm install
     npm start
   - Abre http://localhost:3000 en tu navegador.

Cómo desplegar en Netlify (estático):
- Opción rápida: arrastra la carpeta `flowertime-deploy` o el `index.html` a https://app.netlify.com/drop
- Netlify servirá la página sin servidor adicional.

Cómo desplegar en GitHub Pages:
- Crea un repositorio en GitHub y sube los archivos.
- En Settings -> Pages, configura la rama `main` (o `gh-pages`) y la carpeta `/` (root).
- GitHub Pages alojará `index.html` en https://<tu-usuario>.github.io/<repo>

Cómo desplegar en un VPS / servidor (ej. Linux)
- Copia la carpeta al servidor (scp o FTP).
- En el servidor:
  npm install
  npm start
- Usa un reverse proxy (nginx) o configurar el puerto 3000 y abrir firewall.

Importante: API keys y seguridad
- Si vas a usar la clave de OpenAI, NO la dejes en `index.html` en producción.
- Recomendado: crear un endpoint en tu servidor que guarde la clave en variables de entorno y haga la llamada a OpenAI. El frontend llamaría a ese endpoint.

Si quieres, puedo:
- A) Poner la llamada a OpenAI en `server.js` (crear un proxy) para que no expongas la clave.
- B) Crear un archivo ZIP listo para descargar.
Dime cuál prefieres y lo hago.