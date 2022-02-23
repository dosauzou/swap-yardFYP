import {HttpClient, HttpParams, HttpRequest, HttpEvent} from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import {Input, Output, EventEmitter, OnChanges} from '@angular/core'
import { UserServiceService } from 'src/app/services/user-service.service';
import {DomSanitizer} from '@angular/platform-browser';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ItemComponent, DialogData } from '../item/item.component';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  fileName = '';
  retrieveResonse: any;
  blobData: any;
  retrievedImage: any;
  imageName: any;
  contentArray: any[];

  constructor(private http: HttpClient, private userService: UserServiceService, public domSanitizationService: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
   
  ngOnInit(): void {
  }

  onFileSelected(event){

    const file:File = event.target.files[0];

    if (file) {
        this.fileName = file.name;
        const formData = new FormData();
        formData.append("file", file);
        console.log(file.text)
        console.log(file.size)

        this.data.posts=formData;

        // const upload$ = this.http.post("/api/thumbnail-upload", formData);

        // upload$.subscribe();
    //     this.userService.uploadFile(formData).subscribe(
    //       data=>{
    //         console.log("response recieved");
    
    //      } ,
    //       error => { 
    //         console.log("exception occured");
    // console.log(file);
    //       })
        }
      }
      // getImage() {

      //       this.userService.getFile(this.imageName).subscribe(
      //         res=>{
      //           this.retrieveResonse = res;
      //           this.blobData = this.retrieveResonse.data;
      //           this.retrievedImage = 'data:image/jpeg;base64,' + this.blobData;
      //           console.log(this.retrievedImage);

      //         });
      //       }

          
    }




