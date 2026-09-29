# Secure Lab App

Proyecto base para la practica preparatoria de Git, GitHub y Docker.

## Ejecutar localmente

```bash
npm install
npm start
```

Abrir `http://localhost:3000` o consultar `/health`.

## Docker

```bash
docker build -t secure-lab-app:1.0 .
docker run -d --name secure-lab-app -p 8080:3000 -e APP_ENV=lab secure-lab-app:1.0
```

Este proyecto usa credenciales ficticias solamente cuando la guia lo indique.
