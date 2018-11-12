const request = require('supertest');
const expect = require('expect');

const {Todo} = require('./../models/todo');
const {user} = require('./../models/user');
const {app} = require('./../server');

beforeEach((done) => {
    Todo.remove({}).then(() => done())
})

describe("POST /todos", () => {
    it("should create a new todo", (done) => {
        var text = "Kecoa terbangs";
        request(app)
            .post("/todos")
            .send({text})
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text)
            })
            .end((err, res) => {
                if (err) throw done(err);
                
                Todo.find().then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((err) => {
                    done(err);
                });
            })
    })

    it("should not create todo with invalid body data", (done) => {
        request(app)
            .post("/todos")
            .send({})
            .expect(400)
            .end((err, res) => {
                if(err) throw done(err);

                Todo.find().then((todos) => {
                    expect(todos.length).toBe(0);
                    done();
                }).catch((err) => {
                    done(err);
                })
            })
    })
})