import chai from 'chai';
import chaihttp from 'chai-http';
import app from '../index';

const { expect } = chai;
chai.use(chaihttp);
const request = chai.request(app);

describe('Pics test', () => {
  it('All pics', (done) => {
    request
      .get('/pics')
      .end((err, res) => {
        expect(res.body.message).to.equal('Pics');
        done(err);
      });
  });
});
