import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Model } from './models/model';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  url: string = 'http://localhost:3000/Models';

  loginData = {
    username: 'admin',
    password: 'admin',
  };

  constructor(public httpService: HttpClient) {}

  addModel(model) {
    return this.httpService.post(this.url, model);
  }
  fetchModels(): Observable<Array<Model>> {
    return this.httpService.get<Model[]>(this.url);
  }

  deleteModel(model: Model) {
    return this.httpService.delete(`${this.url}/${model.id}`);
  }
}
