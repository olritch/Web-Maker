import { Injectable } from '@angular/core';
import { Page } from '../models/page.model.client';
import { Http, Response } from "@angular/http";
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment"
// injecting service into module
@Injectable()
export class PageService {
  constructor(private http:Http) {}
  
  baseUrl = environment.baseUrl;

  createPage(page: Page) {
     const url = this.baseUrl + "/api/page";
    return this.http.post(url, page).pipe(
      map((res:Response) => {
        return res.json();
      })
    ); 
  }

  findAllPagesForWebsite(websiteId: string) {
    const url = this.baseUrl + "/api/website/:wid/page";
    return this.http.get(url).pipe(
      map((res:Response) => {
        return res.json();
      })
    ); 
  }

  findPageById(pageId: string) {
    const url = this.baseUrl + "/api/page/:pid";
    return this.http.get(url).pipe(
      map((res:Response) => {
        return res.json();
      })
    ); 
  }

  updatePage(page: Page) {
    const url = this.baseUrl + "/api/page";
    return this.http.post(url, page).pipe(
      map((res:Response) => {
        return res.json();
      })
    ); 
  }

  deletePage(pageId: string) {
    const url = this.baseUrl + "/api/page/:pid";
    return this.http.get(url).pipe(
      map((res:Response) => {
        return res.json();
      })
    ); 
  }
}
