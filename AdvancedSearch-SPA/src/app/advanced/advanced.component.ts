import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../node_modules/@angular/material';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.css']
})
export class AdvancedComponent implements OnInit {
  order: String;
  orderby: String;
  limit: Number;
  mr: any;
  name: String;
  provider: String;
  constructor(public dialogRef: MatDialogRef<AdvancedComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  
  search() {
    const arr = [this.order, this.orderby, this.limit, this.mr, this.name, this.provider];
    console.log(arr);
    this.dialogRef.close(arr);
  }
  cancel() {
    this.dialogRef.close("closed");
  }

  resetVals(){
    this.order = undefined;
    this.orderby = undefined;
    this.limit = undefined;
    this.mr = undefined;
    this.name = undefined;
    this.provider = undefined;
  }



}
