# No he venido a caerte bien — web oficial

Web estática lista para GitHub Pages.

## Publicación
1. Crea un repositorio en GitHub (por ejemplo, `nohevenidoacaertebien`).
2. Sube **el contenido de esta carpeta a la raíz del repositorio**. No subas la carpeta contenedora.
3. En **Settings → Pages**, elige **Deploy from a branch**, rama `main`, carpeta `/ (root)` y guarda.
4. En **Settings → Pages → Custom domain**, indica `nohevenidoacaertebien.com`.
5. En el panel DNS del registrador del dominio, configura el dominio raíz con estos registros A de GitHub Pages:
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153
6. Para `www`, añade un CNAME al host `<TU_USUARIO>.github.io` (sustituye por tu usuario real).
7. Espera la propagación del DNS y activa **Enforce HTTPS** cuando GitHub lo permita.

**Importante:** el archivo `CNAME` prepara la web, pero **no compra ni registra el dominio**.
Si ya tienes registros DNS para `@` o `www`, revisa conflictos antes de modificarlos.
La publicación y el dominio no están activados todavía.

El enlace de compra de la web apunta a la categoría de Humor de CoolLibri;
sustitúyelo por la ficha exacta del libro cuando dispongas de ella.
