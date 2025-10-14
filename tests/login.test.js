import http from 'k6/http'; //faz requisições
import { sleep, check } from 'k6'; //função para esperar por alguns segundos

export const options = { //criar constante já exportando
    iterations: 50,
    thresholds: { //falha o teste se não for validado
        http_req_duration: ['p(90)<10', 'max<1'], //duração da requisão
        http_req_failed: ['rate<0.01'] //quantidade de requisições falhas
    } 
};

export default function () { //exporta teste (tem 1 por arquivo)
  const url = 'http://localhost:3000/login';
  
  const payload = JSON.stringify({ //request body
    username: 'julio.lima',
    senha: '123456',
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(url, payload, params);

  check(res, {
    'Validar que o Status é 200': (r) => r.status === 200,
    'Validar que o token é string': (r) => typeof(r.json().token) == 'string' 
  })

  sleep(1);
}