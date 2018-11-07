import chai from 'chai';
import chaihttp from 'chai-http';
import app from '../index';

const { expect } = chai;
chai.use(chaihttp);

describe('User Test', () => {
  describe('User SignUp', () => {
    it('signup', (done) => {
      chai.request(app)
        .post('/users/new')
        .send({
          email: 'testUser@gmail.com',
          username: 'testUser',
          password: 'password',
        })
        .end((err, res) => {
          expect(res.body.message).to.equal('User is successfully signed up');
          done();
        });
    });

    it('signup failed', (done) => {
      chai.request(app)
        .post('/users/new')
        .send({
          email: 'testUser@gmail.com',
          username: 'testUser',
          password: 'password',
        })
        .end((err, res) => {
          expect(res.body.message).to.equal('email is already taken');
          done(err);
        });
    });
  });

  describe('User Login', () => {
    it('login', (done) => {
      chai.request(app)
        .post('/users')
        .send({
          email: 'testUser@gmail.com',
          password: 'password',
        })
        .end((err, res) => {
          expect(res.body.message).to.equal('User is successfully signed in');
          done();
        });
    });

    it('login failed with wrong password', (done) => {
      chai.request(app)
        .post('/users')
        .send({
          email: 'testUser@gmail.com',
          password: 'passwor',
        })
        .end((err, res) => {
          expect(res.body.message).to.equal('Invalid credentials supplied');
          done(err);
        });
    });

    it('login failed with wrong email', (done) => {
      chai.request(app)
        .post('/users')
        .send({
          email: 'testUse@gmail.com',
          password: 'password',
        })
        .end((err, res) => {
          expect(res.body.message).to.equal('Invalid credentials supplied');
          done(err);
        });
    });
  });
});
