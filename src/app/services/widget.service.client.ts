import { Injectable } from '@angular/core';
import { Widget } from '../models/widget.model.client';
import { Http, Response } from "@angular/http";
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment"

// injecting service into module
@Injectable()
export class WidgetService {
    constructor(private http:Http) {}
  
    baseUrl = environment.baseUrl;

    createWidget(widget: Widget) {
        const url = this.baseUrl + "/api/widget";
    return this.http.post(url, widget).pipe(
      map((res:Response) => {
        return res.json();
      })
    ); 
    } 

    findWidgetsByPageId(pageId: string) {
        const url = this.baseUrl + "/api/page/:pid/widget";
        return this.http.get(url).pipe(
          map((res:Response) => {
            return res.json();
          })
        ); 
    }
    findWidgetById(widgetId: string) {
        const url = this.baseUrl + "/api/widget/:wid";
    return this.http.get(url).pipe(
      map((res:Response) => {
        return res.json();
      })
    ); 
    }
    updateWidget(widget: Widget) {
        const url = this.baseUrl + "/api/widget";
        return this.http.post(url, widget).pipe(
          map((res:Response) => {
            return res.json();
          })
        ); 
    }
    deleteWidget(widgetId: string) {
        const url = this.baseUrl + "/api/widget/:wid";
        return this.http.get(url).pipe(
          map((res:Response) => {
            return res.json();
          })
        ); 
    }
}