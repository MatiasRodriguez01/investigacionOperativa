
import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  scenarios: {
    constant_rps: {
      executor: 'constant-arrival-rate',
      rate: 27, // 27 requests por segundo
      timeUnit: '1s',
      duration: '2m', // Duración total de 2 minutos
      preAllocatedVUs: 30, // Usuarios virtuales asignados inicialmente
      maxVUs: 50,
    },
  },
};

export default function () {
  const res = http.get('https://jsonplaceholder.typicode.com/posts/1');
  sleep(1);
}
