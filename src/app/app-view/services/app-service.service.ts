import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';


@Injectable()
export class AppServiceService {

  url = 'http://localhost:8000/sal-app/customers';

  constructor(private http: HttpClient) {
  }

  getData(): Observable<HttpResponse<any[]>> {
    return this.http.get<any[]>(this.url, {observe: 'response'});
  }

  getDataWithId(id: any): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.url + "/id/" + id, {observe: 'response'});
  }
}
