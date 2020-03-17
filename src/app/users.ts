import { Posts } from './posts';

export interface Users {
   _id;
   email : String;
   userName : String;
   password : String;
   posts : Array<Posts>;
}

export class UserObject implements Users{
  _id;
  email: String;
  userName: String;
  password: String;
  posts: Posts[];

}
