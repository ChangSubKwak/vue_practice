const sayHello = require('../app').sayHello;


// without mocha
if (sayHello) {
    console.log('sayHello should return "hello"');
    if (sayHello() === 'hello') {
        console.log('Success');
    } else {
        console.log('Fail');
    }
}

describe('App test!', function () {
	it('sayHello should return hello', function (done) {
			if (sayHello() === 'hello') {
				done();
			}
	});
});