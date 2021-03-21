var socket = null

let connect = (cb, id = "") => {
  console.log("Attempting to connect");
  if (socket == null && id !== "")  {
    socket = new WebSocket(`ws://localhost:8080/ws?id=${id}`)
  } else if (socket == null) {
    socket = new WebSocket("ws://localhost:8080/ws")
  }
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

let sendMsg = (msg, from = "", to = "") => {
  console.log("sending msg: ", msg);
  let body = JSON.stringify({from,to,msg})
  socket.send(body);
}

export { connect, sendMsg };