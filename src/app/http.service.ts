import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()

export class HttpService {
  constructor(private http: HttpClient) {}

  register(params) {
    return this.http.post('http://localhost:8080/registration', params);
  }

}
