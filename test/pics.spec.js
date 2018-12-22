import chai from 'chai';
import chaihttp from 'chai-http';
import app from '../index';

const { expect } = chai;
chai.use(chaihttp);
let validToken;

describe('Pics test', () => {
  before('login user', (done) => {
    chai.request(app)
      .post('/users')
      .send({
        email: 'testUser@gmail.com',
        password: 'password',
      })
      .end((err, res) => {
        validToken = res.body.user.token;
        done();
      });
  });
  describe('Main test', () => {
    it('All pics', (done) => {
      chai.request(app)
        .get('/pics')
        .set('authorization', validToken)
        .end((err, res) => {
          expect(res.body.message).to.equal('Pics');
          done(err);
        });
    });

    it('create a pic', (done) => {
      chai.request(app)
        .post('/pics/new')
        .set('authorization', validToken)
        .send({
          caption: 'my new pics',
        })
        .end((err, res) => {
          expect(res.body.message).to.equal('Memory successfully created');
          expect(res.body.pic).to.and.be.a('object');
          done(err);
        });
    });
  });
});
