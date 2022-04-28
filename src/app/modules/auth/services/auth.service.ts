import { Observable } from 'rxjs';
import { UserModel } from './../../../models/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: UserModel = { id: '1', name: 'Admin', email: 'Admin', photoUrl: 'abc' } as UserModel;

  constructor() {

  }

  checkAuth() {
    return this.user;
  }
}
