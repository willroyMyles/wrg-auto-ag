import { Posts } from './posts';

export interface Users {
   _id;
   email : string;
   userName : string;
   password : string;
   posts : Array<Posts>;
}

export class UserObject implements Users{
  _id;
  email: string;
  userName: string;
  password: string;
  posts = new Array< Posts>();

}
