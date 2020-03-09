import { Posts } from './posts';

export interface Users {
   id : Number;
   userName : String;
   password : String;
   posts : Array<Posts>;
}
