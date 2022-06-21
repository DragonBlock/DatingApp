import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Photo } from '../_models/photo';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseURL = environment.apiURL;

  constructor(private http: HttpClient) { }

  getUsersWithRoles() {
    return this.http.get<Partial<User[]>>(this.baseURL + "admin/users-with-roles")
  }

  updateUserRoles(username: string, roles: string[]) {
    return this.http.post(this.baseURL + "admin/edit-roles/"+ username + "?roles=" + roles, {})
  }

  getPhotosForApproval() {
    return this.http.get<Partial<Photo[]>>(this.baseURL + "admin/photos-to-moderate");
  }

  approvePhoto(photoID: number) {
    return this.http.post(this.baseURL + "admin/approve-photo/" + photoID, {});
  }

  rejectPhoto(photoID: number) {
    return this.http.post(this.baseURL + "admin/reject-photo/" + photoID, {});
  }
}
