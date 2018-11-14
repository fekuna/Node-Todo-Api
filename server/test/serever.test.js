const {ObjectID} = require('mongodb');

const request = require('supertest');
const expect = require('expect');

const {Todo} = require('./../models/todo');
const {user} = require('./../models/user');
const {app} = require('./../server');

var todos = [{
    _id: new ObjectID(),
    text: "Something to do"
},{
    _id: new ObjectID(),
    text: "Something to do 2"
}]

beforeEach((done) => {
    Todo.remove({}).then(() => {
        Todo.insertMany(todos)
    }).then(() => done());
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
                
                Todo.find({text}).then((todos) => {
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
                    expect(todos.length).toBe(2);
                    done();
                }).catch((err) => {
                    done(err);
                })
            })
    })
})

describe("GET /todos", () => {
    it("should get all todos", (done) => {
        request(app)
            .get("/todos")
            .expect(200)
            .expect((res) => {
                expect(res.body.todos.length).toBe(2);
            }).end(done)
    })


})

describe("GET /todos/id", () => {
    it('should return todo with id', (done) => {
        request(app)
            .get(`/todos/${todos[0]._id.toHexString()}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.todo.text).toBe(todos[0].text)
            })
            .end(done)
    });

    it('should return 404 if todo not found', (done) => {
        var hexId = new ObjectID().toHexString();
        request(app)
            .get(`/todos/${hexId}`)
            .expect(404)
            .end(done);
    })

    it('should return 404 for non-object id', (done) => {
        request(app)
            .get(`/todos/123`)
            .expect(404)
            .end(done)
    })
})