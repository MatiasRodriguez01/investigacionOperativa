
import http from 'k6/http';

export const options = {
  scenarios: {
    ramping_users: {
      executor: 'ramping-arrival-rate',
      startRate: 50,
      stages: [
        { duration: '1m', target: 300 }, // Incrementa a 300 usuarios por minuto
        { duration: '1m', target: 0 },   // Finaliza reduciendo a 0
      ],
      preAllocatedVUs: 50, // Usuarios virtuales asignados inicialmente
    },
  },
};

export default function () {
  http.get('https://jsonplaceholder.typicode.com/comments');
}
