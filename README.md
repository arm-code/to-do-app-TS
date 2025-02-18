# Como configurar un proyecto con TypeScript
## Crear el proyecto
1. En la terminal ejecuta:
2. mkdir express-ts-mysql-api
3. cd express-ts-mysql-api
4. npm init -y

## Instala las dependencias necesarias
1. npm install express mysql2 dotenv
2. npm install --save-dev typescript @types/node @types/express ts-node nodemon

## Configura TypeScript
1. npx tsc --init

## Modifica tsconfig.json:
`
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
`
# Configurar las variables de entorno
1. Renombrar el archivo `.env.template` a `.env` colocando los valores correspondientes para conectarte a la DB