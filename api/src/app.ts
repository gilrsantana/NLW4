import express from 'express';
import 'reflect-metadata';
import "./database";
import { router } from './routes';



const app = express();


//  MÉTODOS HTTP
/*  GET => Buscar
 *  POST => Salvar
 *  PUT => Alterar
 *  DELETE => Apagar
 *  PATCH => Alteração específica
 */

// http://localhost:3333/users

app.use(express.json());
app.use(router);

export { app };
