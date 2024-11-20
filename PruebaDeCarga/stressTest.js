
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 50 }, // Aumenta a 50 usuarios simultáneos
    { duration: '30s', target: 0 },  // Reduce a 0 al final
  ],
};

export default function () {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const payload = JSON.stringify({ title: 'foo', body: 'bar', userId: 1 });
  const params = { headers: { 'Content-Type': 'application/json' } };

  const res = http.post(url, payload, params);

  check(res, {
    'Status 201': (r) => r.status === 201,  // Status code for resource creation
    'Contiene userId': (r) => r.body.includes('"userId"'),
  });

  sleep(1); // Pausa entre solicitudes
}
