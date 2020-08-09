import {Injectable} from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {Http, ResponseContentType} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FileService {

  constructor(private http: Http) {}

  downloadFile(): Observable<any>{
    return this.http.get('https://api.github.com/users/hacktivist123/repos', {responseType: ResponseContentType.Blob});
}
   
}