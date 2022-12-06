import ws from 'k6/ws';
import { check } from 'k6';

export default function () {
  const url = 'ws://localhost:8080/ws';
  const params = { tags: { my_tag: 'hello' } };

  const res = ws.connect(url, params, function (socket) {
    socket.on('open', function open() {
          console.log('connected');
          socket.send('ping');
        });
    socket.on('message', function message (data) {
        console.log('Message received: ', data)
        socket.close();
    });
    socket.on('close', () => console.log('disconnected'));
  });

  check(res, { 'status is 101': (r) => r && r.status === 101 });
}
