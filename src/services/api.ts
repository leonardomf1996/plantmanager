import axios from 'axios';

export const api = axios.create({
   baseURL: 'http://192.168.5.50:3333/', // Colocamos o ip do PC pois como eu testarei no celular, o aparelho iria procurar nele msm, e não está. Está na máquina :)
});