import chai from 'chai';
import chaihttp from 'chai-http';
import app from '../index';

const { expect } = chai;
chai.use(chaihttp);
const request = chai.request(app);

describe('initial test', () => {
  it('trivial test', (done) => {
    request
      .get('/')
      .end((err, res) => {
        expect(res.body.message).to.equal('Welcome to picsgram!');
        done(err);
      });
  });
});
