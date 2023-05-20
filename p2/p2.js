console.dir(document);

const myObj = {
   "html": [
      "head", "body"
   ],
   "h1": {
      "textContent": "Hello"
   },
}
console.log(myObj);

const ele1 = document.querySelector('h1');

ele1.textContent = "h1 is now showing this new text";
console.log(ele1);