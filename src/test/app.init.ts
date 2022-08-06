import { expect } from 'chai';
import request from 'supertest';
import application from '../applications/application';

describe('nodejs init test', () => {
    const req = request(application);

    it('GET /main', async () => {
        const res = await req.get('/main').expect(200);
        expect(res.text).to.equal('main!!!');
    });

    it('POST /', async () => {
        await req.post('/').expect(404).expect('Content-Type', /json/);
        expect({ message: '404 Not Found' });
    });
});
