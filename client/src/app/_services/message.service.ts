import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Message } from '../_models/message';
import { getPaginatedResult, getPaginationHeaders } from './paginationHelper';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  baseURL = environment.apiURL;
  
  constructor(private http: HttpClient) { }

  getMessages(pageNumber, pageSize, container) {
    let params = getPaginationHeaders(pageNumber, pageSize);
    params = params.append('Container', container);
    return getPaginatedResult<Message[]>(this.baseURL + "messages", params, this.http);
  }

  getMessageThread(username: string) {
    return this.http.get<Message[]>(this.baseURL + "messages/thread/" + username);
  }

  sendMessage(username: string, content: string) {
    return this.http.post<Message>(this.baseURL + "messages", {recipientUsername: username, content})
  }

  deleteMessage(id: number) {
    return this.http.delete(this.baseURL + 'messages/' + id);
  }
}
