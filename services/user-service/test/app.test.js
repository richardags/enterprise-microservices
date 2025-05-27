const request = require('supertest');
const { app, server } = require('../src/app');

describe('GET /health', () => {
  it('should return healthy status', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'OK');
  });

  afterAll((done) => {
    server.close(done);
  });
});