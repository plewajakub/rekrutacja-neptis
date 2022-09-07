import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private _httpClient: HttpClient) {
  }
  sendFormData(loginData: any) {
    let server = "https://jsonplaceholder.typicode.com/posts/";
    console.log(loginData);
    return this._httpClient.post(server, loginData);
  }
}
