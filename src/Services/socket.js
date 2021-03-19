var socket = new WebSocket("ws://localhost:8080/ws")

let connect = cb => {
  console.log("Attempting to connect");

  socket.onopen = () => {
    console.log("Connected succesfully");
  };

  socket.onmessage = (msg) => {
    console.log(msg);
    cb(msg);
  };

  socket.onclose = event => {
    console.log("Socket closed the connection: ", event);
  };

  socket.onerror = error => {
    console.log("Socket Error: ", error);
  };
}

let sendMsg = msg => {
  console.log("sending msg: ", msg);
  socket.send(msg);
}

export { connect, sendMsg };