import { Component } from '@angular/core';
import templateString from './first.html';
import { UserService } from '../user/user.service';

@Component({
  template: templateString,
  providers: [ UserService ]
})
export class FirstComponent {
  user: any;
  users: any[];
  hello: string;
  usersColumns: any[] = [
    { prop: 'email' },
    { prop: 'role' }
  ];

  constructor(private userService: UserService) {
    this.hello = I18n.t("hello");
    this.userService.all().subscribe((users: any[]) => {
      this.users = users;
    });
    this.userService.find(1).subscribe((user: object) => {
      this.user = user;
    });
  }
}
