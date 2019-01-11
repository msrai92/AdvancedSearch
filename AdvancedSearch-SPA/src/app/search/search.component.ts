import { Component, OnInit } from '@angular/core';
import patients from '../../assets/patients.json';
import { MatDialog } from '@angular/material';
import { AdvancedComponent } from '../advanced/advanced.component';
import { PatientComponent } from '../patient/patient.component';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  total: Number;
  patients: any;
  order: String;
  orderby: String;
  limit: Number;
  mr: any;
  name: String;
  provider: String;
  reducedList = [];
  found = [];
  constructor(public dialog: MatDialog) {
    console.log(patients[0].name);
   }

  ngOnInit() {
    this.patients = patients;
    this.total = this.patients.length;
  }
  openPatient(p): void {
    let dialogRef = this.dialog.open(PatientComponent, {
      height: '470px',
      width: '400px',
      data: p
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(closed);
    })
  }

  openAdvance(): void {
    let dialogRef = this.dialog.open(AdvancedComponent, {
      height: '350px',
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.patients = patients;
      if(result!==undefined){
        console.log(result);
      this.order = result[0];
      this.orderby = result[1];
      this.limit = result[2];
      this.mr = result[3];
      this.name = result[4];
      this.provider = result[5];
      this.patients = this.applyFilter(this.patients);
      }
    });
  }

  applyFilter(p){
    this.found = [];
    if(this.name!==undefined){
      p = this.searchName(p);
    }
    if(this.provider!==undefined){
      p = this.searchProvider(p);
    }
    if(this.mr!==undefined){
      p = this.searchMR(p);
    }
    if(this.order === "asc"){
     p = this.filterASC(p);
    }
    if(this.order === "dsc"){
      p = this.filterDSC(p);
    }
    if(this.order === undefined){
      p = this.filterASC(p);
    }

    if(this.limit > 0){
      return this.getLimitVals(p);
    }
    this.total = p.length;
    return p;
  }
  searchName(p){
    this.found = [];
    for(let x of p){
      if(x.name.includes(this.name)){
        this.found.push(x);
      }
    }
    return this.found;
  }

  searchMR(p) {
    this.found = [];
    for(let x of p){
      if(x.mr.includes(this.mr)){
        this.found.push(x);
      }
    }
    console.log("search mr");
    console.log(this.found);
    return this.found;
  }

  searchProvider(p) {
    this.found = [];
    for(let x of p){
      if(x.prov.includes(this.provider)){
        this.found.push(x);
      }
    }
    return this.found;
  }


  filterASC(p){
    if(this.orderby === "name") {
      console.log("sorting by name");
      p.sort((a,b) => a.name.toString().localeCompare(b.name));
    }
    if(this.orderby === "id") {
      console.log("sorting by id");
      p.sort((a,b) => a.idnum.toString().localeCompare(b.idnum));
    }
    return p;
  }
  filterDSC(p){
    if(this.orderby === "name") {
      console.log("sorting by name");
      p.sort((a,b) => b.name.toString().localeCompare(a.name));
    }
    if(this.orderby === "id") {
      console.log("sorting by id");
      p.sort((a,b) => b.idnum.toString().localeCompare(a.idnum));
    }
    return p;
  }

  getLimitVals(p){
    for(let i=0; i<this.limit; i++){
      if(i<p.length){
        this.reducedList.push(p[i]);
      }  
    }
    this.total = this.reducedList.length;
    return this.reducedList;
  }

}
