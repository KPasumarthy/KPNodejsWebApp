import { Injectable } from '@angular/core';
//KP : Add (or) import components from angular core
//import { Http } from  '@angular/http';
import { MongoDB } from 'mongodb';
import { Mongoose } from 'mongoose';
import { HttpClient } from '@angular/common/http';
import { Http } from  '@angular/http';
import { MessageService } from '../messages/message.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';
import * as express from 'express';
//import {map} from 'rxjs/add/operator/map'
import * as MongoDBServer from 'mongodb'

@Injectable({
  providedIn: 'root'
})
export class MongodbService {

  constructor(
      private http: HttpClient,
      private messageService: MessageService
      //private mongodbService: MongodbService
      ) {
      console.log("KP : MongodbService for MongoDB Access...");
      //this.kptest();
   }

  // constructor() {
  //     console.log("KP : MongodbService for MongoDB Access...");
  //  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
 }

 kptest(): Observable <any> {
  console.log("KP : Here");
  return this.http.get(`http://localhost:2727/url`)
    .pipe(
      map((response: Response) => {
        console.log(response.json());
        return response.json();
      })
    );
}

kpMongoDBTest(){
  // //var MongoClient = MongoDBServer.connect()
  // MongoDB.connect("mongodb://localhost:27017/", { useNewUrlParser: true}, function(err, db) {
  //   if(!err) {
  //     //KP : Console Log
  //     console.log("KP : Connected to the MongoDB...");
  //     console.log("KP : Ready to retrieve MongoDB collection ...");
  //     var dispLog = true;
  
  //     //KP : Access DB Connection Object
  //     var dbo = db.db("KPMongoDB");
  
  //     ////KP : isMongoDB Connection Object Check - Successfull
  //     var isMongodbConn = db.isConnected();
  //     console.log("KP : Mongodb Connection Check : isMongodbConn !" + isMongodbConn);
  //   }  
  // })  
}

//  kptest(): Observable <any> {
//   console.log("Here");
//   return this.http.get(`http://localhost:2727/url`)
//     .pipe(
//       map((response: Response) => {
//         console.log(response.json());
//         return response.json();
//       })
//     );
// }

  // kptest():void{

  //   console.log("KP : MongodbService for MongoDB Access...");
  //   ///console.log(this.http.get(`localhost:27017/KPMongoDB`));
  //   this.http.get(`http://localhost:2727/url`)
  //   .map((response: Response) => {
  //     console.log(response.json());
  //     response.json();
  //   })
  //   .subscribe();


    //return this.http.get<any>(`http://localhost:2727/url`);
    // .pipe(
    //   tap(_ => this.log(`KP : MongodbService - Successfully accessed`)),
    //   catchError(this.handleError<any>(`KP : MongodbService - Error in accessing MongoDB`))
    //   );
    
    
    /******************************************************************************************************************** */
    // /*** KP : MongoDB Connection  ***/
    // ///*KP : MongoDB Connection*/
    //var MongoClient = require('mongodb').MongoClient;
    //   /******************************************************************************************************************** */
    //   /*** KP : MongoDB Connection  ***/
    //   ///*KP : MongoDB Connection*/      
      //  var conString = "mongodb://localhost:27017/KPMongoDB";
      //  Mongoose.connect(conString, { useMongoClient: true }, () => {
      //      console.log("KP : Connected to the MongoDB using Mongoose...");
      //      console.log("KP : Mongoose ready to retrieve MongoDB collection ...");
      //  });

    /// Connect to the db
    //MongoClient.connect("mongodb://localhost:27017/KPMongoDB", { useNewUrlParser: true}, function(err, db) {
    //MongoClient.connect("mongodb://localhost:27017/", { useNewUrlParser: true}, function(err, db) {
    //KP : Error-Check to establish if MongoDB Connection is established!
    // if(!err) {
    //   //KP : Console Log
    //   console.log("KP : Connected to the MongoDB...");
    //   console.log("KP : Ready to retrieve MongoDB collection ...");
    //   var dispLog = true;

    //   }
    //});
    /******************************************************************************************************************** */
  //}

  /** Log a MongoDB Service message with the MessageService */
  private log(message: string) {
    this.messageService.add(`MongoDBService: ${message}`);
  }

}