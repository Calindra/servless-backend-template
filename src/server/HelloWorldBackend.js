export default class HelloWorldBackend {
    async sayHello(req) {
        console.log(`About to say "Hello, ${req.body.message}!"`);
        return { hello: `Hello, ${req.body.message}!` };
    }
}