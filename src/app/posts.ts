export interface Posts {
  _id;
  userId;
  username;
  title;
  body;
  category;
  sub_category;
  make;
  model;
  year;
  time;
  replies;
  status;
}

export class PostsObject implements Posts{
  _id;
  userId: string;
  username: any;
    title: string;
    body: string;
    category: Number;
    sub_category: Number;
    make: string;
    model: string;
    year: Number;
    time;
    status : Number;
    replies : [];

}

export enum PostStatus{
  open,
  closed,
  inactive,
  filled
}
