import supertest from "supertest";
import { web } from "../src/application/web";

describe("POST /api/user", function () {

    // afterEach(async () => {
    //     await prismaClient.user.deleteMany({
    //         where: {
    //             username: "maulana"
    //         }
    //     });
    // })

    it("Should can register new user", async () => {
        const result = await supertest(web).post("/api/users").send({
            username: "test",
            password: "rahasia",
            name: "maulana givari"
        });

        expect(result.status).toBe(201);
        expect(result.body.data.username).toBe("test");
        expect(result.body.data.name).toBe("maulana givari");
        expect(result.body.data.password).toBeUndefined();

    })
})