const request = require('supertest');
const app = require('../server');

describe('GET /', () => {
  it('responds to the world', async () => {
    const response = await request(app)
      .get('/')
      .set('Accept', 'application/json');

    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
    expect(response.body.message).toBe('Hello World!');
  });
});

describe('GET /404', () => {
  it('responds with a 404', async () => {
    const response = await request(app)
      .get('/404')
      .set('Accept', 'application/json');

    expect(response.status).toBe(404);
  });
});

// Clean up after all tests
afterAll(done => {
  done();
});