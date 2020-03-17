export interface Replies {
  _id;
  postId;
  userId;
  body;
  time;
  notify;
  username;
}

export class ReplyObject implements Replies{

  _id: any;
  postId: any;
  userId: any;
  body: any;
  time: any;
  notify: any;
  username: any;

}
