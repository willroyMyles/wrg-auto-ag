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
    replies : [];

}

export enum PostStatus{
  open,
  closed,
  inactive,
  filled
}
