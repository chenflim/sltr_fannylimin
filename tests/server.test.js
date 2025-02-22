const request = require('supertest');
const app = require('../src/server');

describe("GET /welcome/:name", () => {
    test("should return a welcome message with the provided name", async () => {
        const res = await request(app).get("/welcome/FannyLimin");
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe("Selamat datang FannyLimin");
    });

    test("should return 'Anonymous' when no name is provided", async () => {
        const res = await request(app).get("/welcome");
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe("Selamat datang Anonymous");
    });
});