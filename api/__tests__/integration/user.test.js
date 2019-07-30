import request from 'supertest';
import app from '../../src/app';

describe('Users', () => {
  it('Should be able register', async () => {
    const response = await request(app)
      .post('/register')
      .send({
        name: 'Douglas',
        email: 'douglasporto@brainmind.com.br',
        password: '123456',
      });
    expect(response.body).toHaveProperty('id');
  });
});
