import request from "supertest";
import { app } from "../app"

import createConnection from "../database";

describe("Users", () =>{
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    it("Should be able to create a new user", async () => {
        const response = await request(app).post("/users").send({
            email: "user2@exaample.com",
            name: "User2 Example"
        });

        expect(response.status).toBe(201);
    })  

    it("Should not to be able to create a user with exist e-mail", async () => {
        const response = await request(app).post("/users").send({
            email: "user2@exaample.com",
            name: "User2 Example"
        });

        expect(response.status).toBe(400);
    })
});