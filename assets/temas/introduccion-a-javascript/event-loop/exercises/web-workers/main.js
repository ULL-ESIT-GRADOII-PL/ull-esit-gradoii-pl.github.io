let first = document.querySelector('#number1');
let second = document.querySelector('#number2');
let compute = document.querySelector('#click');

let result = document.querySelector('.result');

if (window.Worker) { //check if Browser supports the Worker api.
  // Requires script name as input
  let myWorker = new Worker("worker.js");

  compute.onclick = function() {
    console.log('Message posted to worker '+first.value+', '+second.value);
    myWorker.postMessage([Number(first.value), Number(second.value)]); //sending message as array to the worker
  };

  myWorker.onmessage = function(e) {
    console.log(e);
    result.textContent = e.data;
    console.log('Message received from worker '+e.data);
  };
}
