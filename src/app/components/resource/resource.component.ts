import { Component, ViewChild, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { CSVrecord } from './CSVmodel';

export interface PeriodicElement {
    ResourceName: string;
    // position: number;
    ResourceCode: number;
    // symbol: string;
  }
  
  // const ELEMENT_DATA: PeriodicElement[] = [
  //   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  //   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  //   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  //   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  //   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  //   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  //   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  //   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  //   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  //   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  // ];

  const ELEMENT_DATA: PeriodicElement[] = [
    {ResourceName: 'Hydrogen', ResourceCode: 1.0079},
    {ResourceName: 'Helium', ResourceCode: 4.0026},
    {ResourceName: 'Lithium', ResourceCode: 6.941},
    {ResourceName: 'Beryllium', ResourceCode: 9.0122},
    {ResourceName: 'Boron', ResourceCode: 10.811},
    {ResourceName: 'Carbon', ResourceCode: 12.0107},
    {ResourceName: 'Nitrogen', ResourceCode: 14.0067},
    {ResourceName: 'Oxygen', ResourceCode: 15.9994},
    {ResourceName: 'Fluorine', ResourceCode: 18.9984},
    {ResourceName: 'Neon', ResourceCode: 20.1797},
  ];

@Component({
    selector: 'app-resource',
    templateUrl: './resource.component.html',
    styleUrls: ['./resource.component.css']
  })

  export class ResourceComponent implements OnInit{
    // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    displayedColumns: string[] = ['ResourceCode', 'ResourceName'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
    RScode_in: number = undefined;
    RSname_in: string = undefined;
    public show:boolean = false;
    public records: any[] = []; 
    @ViewChild('csvReader', { static: true }) csvReader: any;  

    OPTIONS = ["Add Row", "Add Column", "Import CSV"];

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

    ngOnInit() {
      this.dataSource.paginator = this.paginator;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    } 

    toggleAddRow(){this.show = !this.show;}
    addRow(){
      if (this.RScode_in != undefined && this.RSname_in != undefined){  
        // ELEMENT_DATA.forEach(function (i) {
        //   //console.log(i);
        //   if (i != this.RScode_in){
        //     ELEMENT_DATA.push({ResourceCode: this.RScode_in, ResourceName: this.RSname_in});
        //     this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        //     this.RScode_in = null;
        //     this.RSname_in = '';
        //     this.dataSource.paginator = this.paginator;
        //   }
        //   else{
        //     alert("Cannot add row with same Code!");
        //   }
        // });
        ELEMENT_DATA.push({ResourceCode: this.RScode_in, ResourceName: this.RSname_in});
        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.RScode_in = null;
        this.RSname_in = '';
        this.dataSource.paginator = this.paginator;
      }
    }
    cancelAddRow(){
      this.RScode_in = null;
      this.RSname_in = '';
      this.show = !this.show;
    }


    uploadListener($event: any): void {  
  
      let text = [];  
      let files = $event.srcElement.files;  
    
      if (this.isValidCSVFile(files[0])) {  
    
        let input = $event.target;  
        let reader = new FileReader();  
        reader.readAsText(input.files[0]);  
    
        reader.onload = () => {  
          let csvData = reader.result;  
          let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);  
    
          let headersRow = this.getHeaderArray(csvRecordsArray);  
    
          this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);  
        };  
    
        reader.onerror = function () {  
          console.log('error is occured while reading file!');  
        };  
    
      } else {  
        alert("Please import valid .csv file.");  
        this.fileReset();  
      }  
    }  
    
    getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {  
      let csvArr = [];  
    
      for (let i = 1; i < csvRecordsArray.length; i++) {  
        let curruntRecord = (<string>csvRecordsArray[i]).split(',');  
        if (curruntRecord.length == headerLength) {  
          let csvRecord: CSVrecord = new CSVrecord();  
          csvRecord.RScode = curruntRecord[0].trim();  
          csvRecord.RSname = curruntRecord[1].trim();  
          csvArr.push(csvRecord);  
        }  
      }  
      return csvArr;  
    }  
    
    isValidCSVFile(file: any) {  
      return file.name.endsWith(".csv");  
    }  
    
    getHeaderArray(csvRecordsArr: any) {  
      let headers = (<string>csvRecordsArr[0]).split(',');  
      let headerArray = [];  
      for (let j = 0; j < headers.length; j++) {  
        headerArray.push(headers[j]);  
      }  
      return headerArray;  
    }  
    
    fileReset() {  
      this.csvReader.nativeElement.value = "";  
      this.records = [];  
    }  

}