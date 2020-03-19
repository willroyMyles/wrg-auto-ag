import { Injectable } from '@angular/core';
import {
  Stitch,
  AnonymousCredential,
  RemoteMongoClient,
  UserPasswordCredential,
  UserPasswordAuthProviderClient,
} from 'mongodb-stitch-browser-sdk'
import { Users } from './users';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { PostsObject } from './posts';
import { CarInfoService } from './car-info.service';
import { ReplyObject } from './replies';
import { SwalService } from './swal.service';
import { v4 as uuidv4 } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private clientId = "wrg-app-udxib";
  private mongoDbAppName = "mongo-wrg";
  private databaseName = "wrgUsers";
  private generalCollectionName = "wrg-ag"
  private postCollectionName = "wrg-posts"
  private replyCollectionName = "wrg-replies"

private client = Stitch.initializeDefaultAppClient(this.clientId);
private db = this.client.getServiceClient(RemoteMongoClient.factory, this.mongoDbAppName).db(this.databaseName);

private userCollection = this.db.collection(this.generalCollectionName);
private postCollection = this.db.collection<PostsObject>(this.postCollectionName);
private replyCollection = this.db.collection(this.replyCollectionName);

private login = false;
private user : Users;
private timeSort = {"time" : -1};



public databaseResponder = new BehaviorSubject<string>("");


  constructor(
    private router : Router,
    private carservice : CarInfoService,
    private swal : SwalService
    ) {

   }

  public addToDataBase(userinfo : Users){

      this.db.collection(this.generalCollectionName).insertOne(userinfo).then(res =>{
        this.router.navigate(['/login']);
      })
  }

  public clearMongoUsers(){

  }

  public Login(){
    this.client.auth.loginWithCredential(new AnonymousCredential()).then(user =>
      this.db.collection(this.generalCollectionName).updateOne({owner_id: this.client.auth.user.id}, {$set:{number:42}}, {upsert:true})
    ).then(() =>
      this.db.collection(this.generalCollectionName).find({owner_id: this.client.auth.user.id}, { limit: 100}).asArray()
    ).then(docs => {
        console.log("Found docs", docs)
        console.log("[MongoDB Stitch] Connected to Stitch")
    }).catch(err => {
        console.error(err)
    });
  }

  public registerWithEmailAndPassword(user : Users){
    var cli = this.client.auth
    .getProviderClient(UserPasswordAuthProviderClient.factory);
    cli.registerWithEmail(user.email.toString(), user.password.toString()).then((val)=>{
      this.user = user;
      this.router.navigate(["login"])
    }).catch((err)=>{
      console.log("error :" , err);
      if(err.errorCode == 46){
        console.log("user alreay registered");
        this.router.navigate(["login"])
      }
    })
  }

  public LoginWithEmailAndPassword(email, password){
    return new Promise(resolve =>{
      var credentials = new UserPasswordCredential(email, password);
      this.client.auth.loginWithCredential(credentials)
      .then((user) =>{
        if(this.user != undefined) {
          this.user._id = user.id;
          this.addToDataBase(this.user);
        }
        this.getUserName();
        resolve(true)
        this.swal.displayToast('success', 'Signed in succesfully')
      }).catch(err =>{
        console.log(err);
        resolve(false);
        this.swal.displayToast('error', 'Sign in unsuccesful')
      })
    })
  }

  public Logout(){
    this.client.auth.logout().then(res =>{
      this.swal.displayToast('success', 'Logged out')
    })
  }

  public updateUserPost(postid){
    this.userCollection.findOne({_id : this.client.auth.user.id}).then( (res : Users)=>{
      res.posts.push(postid)
      this.userCollection.updateOne({_id : this.client.auth.user.id}, {"$set" : {posts : res.posts}}, {'upsert' : false}).then( results =>{
        console.log(results);
      })
    })
  }




  public getLoginStatus() : boolean {
    return this.client.auth.isLoggedIn;
  }

  public getId(){
    return this.client.auth.user.id;
  }

  public getPostersName(posterId){
    return new Promise( resolve  =>{
      this.userCollection.findOne({_id : posterId}).then( (res : Users) =>{
        resolve(res.userName);
      })
    })
  }

  public  getUserName(){

    return new Promise( resolve  =>{
      this.userCollection.findOne({_id : this.client.auth.user.id}).then( (res : Users) =>{
        this.databaseResponder.next(res.userName);
        resolve(res.userName);
      })
    })
  }

  public deleteUsers(){
    return new Promise( resolve =>{
      this.userCollection.deleteMany({}).then(res =>{
        resolve(true);
      }).catch (err =>{
        console.log(err);
        resolve(false)
      })
    })
  }

//#region posts

public addPost(post : PostsObject){
  post._id = uuidv4();
  return new Promise( resolve =>{
    this.postCollection.insertOne(post).then( res =>{
      resolve(true)
      this.updateUserPost(res.insertedId);
      // should get post id and add to user
    }).catch( err =>{
      console.log(err);
      resolve(false)
    })
  })
}

public detelePosts(){
  return new Promise( resolve =>{
    this.postCollection.deleteMany({}).then(res =>{
      resolve(true);
    }).catch (err =>{
      console.log(err);
      resolve(false)
    })
  })
}

public getOnePost(id){
  return new Promise(resolve =>{
    this.postCollection.findOne({_id : id}).then( (res : PostsObject) =>{
      var element = res;

      this.getPostersName(element.userId).then( (r : string) =>{
        element.username = r;
      })

      var cat = element.category; var subcat = element.sub_category;
      var make = element.make; var model = element.model;

      element.category = this.carservice.getCategoryTitleByIndex(cat);
      element.sub_category = this.carservice.getSubCategoryTitleByIndexes(cat,subcat);
      element.make = this.carservice.getCarMakeTitleByIndex(make);
      element.model = this.carservice.getCarModelTitleByIndexes(make, model);

      resolve(res);
    }).catch( err =>{
      console.log(err)
    })
  })
}


public getPosts(cat : string , subcat : string){
  return new Promise( res =>{
    this.postCollection.find({category : cat, sub_category : subcat}, {sort : this.timeSort}).asArray().then( (results : PostsObject[]) =>{
          console.log("get posts called")
      for (let index = 0; index < results.length; index++) {
        const element = results[index];
        this.getPostersName(element.userId).then( (r : string) =>{
          element.username = r;
        })

        var cat = element.category; var subcat = element.sub_category;
        var make = element.make; var model = element.model;

        element.category = this.carservice.getCategoryTitleByIndex(cat);
        element.sub_category = this.carservice.getSubCategoryTitleByIndexes(cat,subcat);
        element.make = this.carservice.getCarMakeTitleByIndex(make);
        element.model = this.carservice.getCarModelTitleByIndexes(make, model);

      }
      res(results);
    })

  })
}

//#endregion

//#region Replies

  public addReply(reply : ReplyObject){
      this.replyCollection.insertOne(reply).then( res =>{
        console.log("reply create", res)
      }).catch (err =>{
        console.log(err)
      })
  }

  public deteleReplies(){
    return new Promise( resolve =>{
      this.replyCollection.deleteMany({}).then(res =>{
        resolve(true);
      }).catch (err =>{
        console.log(err);
        resolve(false)
      })
    })
  }

  public getReplies(id){
    return new Promise( resolve =>{
      this.replyCollection.find({postId : id},{sort :this.timeSort}).asArray().then( res =>{
        resolve(res);
      })
    })
  }

//#endregion


}
