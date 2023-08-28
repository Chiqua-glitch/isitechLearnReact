/*

//Websocekt variables

//DOM Elements
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const tbody = document.querySelector("tbody");
const btn = document.querySelector("#submit");



btn.addEventListener("click", (a) => sendMsg(a));

//Sending message from client
function sendMsg(a) {
  a.preventDefault();
  const n = name.value;
  const e = email.value;
  msgGeneration(n);

}

//Creating DOM element to show received messages on browser page
function msgGeneration(msg) {
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  td.innerHTML = msg;

  tbody.appendChild(tr);
  tr.appendChild(td);
}
/*
//enabling send message when connection is open
mywsServer.onopen = function () {
  btn.disabled = false;
};

//handling message event
mywsServer.onmessage = function (event) {
  const { data } = event;
  msgGeneration(data, "Server");
};
*/
