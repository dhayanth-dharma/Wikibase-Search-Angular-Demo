import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private httpClient: HttpClient) { }
  getImage(serchTerm: string): Observable<HttpResponse<any>> {
    let searchQuery = "cat";
    let query = serchTerm.trim();
    let endpoint = `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles=${query}&origin=*`;
    let params = new HttpParams().set('_page', "1").set('_limit', "1");
    return this.httpClient.get(endpoint, { observe: 'response' });

  }
  getDBPediaAnother(searchterm: string, searchClass: string): Observable<HttpResponse<any>> {
    let headers: Headers = new Headers({
      'Content-type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    });

    let params = new HttpParams()
      .set('query', "SELECT * WHERE { <http://dbpedia.org/resource/Awolnation> ?pref ?obj } LIMIT 100");
    params.append('query', 'select distinct ?Concept where {[] a ?Concept} LIMIT 100');
    params.append('format', 'json');
    return this.httpClient.get<any>(`http://lookup.dbpedia.org/api/search.asmx/KeywordSearch?QueryClass=${searchClass}&QueryString=${searchterm}`, {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      }), params: params, observe: 'response'
    });
  }

  getDBPedia() {
    let headers: Headers = new Headers({
      'Content-type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    });
    let params = new HttpParams().set('query', "SELECT * WHERE { <http://dbpedia.org/resource/Awolnation> ?pref ?obj } LIMIT 10"); // create 
    params.append('query', 'select distinct ?Concept where {[] a ?Concept} LIMIT 100');
    params.append('format', 'json');

    this.httpClient.get('http://dbpedia.org/sparql', {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      }), params: params
    })
      .subscribe(res => {
        console.log(res);
      })
  }
  getData2(searchTerm: string): Observable<HttpResponse<any>> {
    let searchQuery = searchTerm;
    let query = searchQuery.trim();
    let localUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
    return this.httpClient.get<any>(
      localUrl, { observe: 'response' });
  }
  getData(): Observable<any> {
    return new Observable(observer => {
      let searchQuery = "cat";
      let query = searchQuery.trim();
      const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
      this.httpClient.get(endpoint);
    });

  }
}
