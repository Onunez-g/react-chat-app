var socket = null

var apiUrlRoot = process.env.REACT_APP_APIURL;

let connect = (cb, id = "") => {
  console.log("Attempting to connect");
  if (socket == null && id !== "")  {
    socket = new WebSocket(`wss:${apiUrlRoot}/ws?id=${id}`)
  } else if (socket == null) {
    socket = new WebSocket(`wss:${apiUrlRoot}/ws`)
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

let sendMsg = (msg, from = "", to = "all") => {
  console.log("sending msg: ", to, msg);
  let body = JSON.stringify({from,to,msg});
  socket.send(body);
  console.log("sent");
}

export { connect, sendMsg };