import './function_global';

//array

/*let arr = [10, 20, 30, 40]

	function teste([ a, b ]) {
		console.log(a, b)
	}

	teste(arr)*/

//obj
let obj = {
  a: 10,
  b: 20,
  c: 30,
  d: 40
};

function test({ a: x, b, e = 50 }) {
  console.log(x, b, e);
}

test(obj);
