import { Component, ViewChild, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CSVrecord } from './CSVmodel';
import { ResourceService } from 'src/app/service/resource.service';

export interface RES_MODEL {
    name: string;
    cost_code: string;
  }

  const RESOURCE_DATA1: RES_MODEL[] = [];

  @Component({
    selector: 'app-resource',
    templateUrl: './resource.component.html',
    styleUrls: ['./resource.component.css']
  })

  export class ResourceComponent implements OnInit {    
    constructor(private resourceService : ResourceService) { }

    displayedColumns: string[] = ['name', 'cost_code'];
    public RESOURCE_DATA: RES_MODEL[] = [];
    dataSource = new MatTableDataSource(this.RESOURCE_DATA);
    RScode_in: number = undefined;
    RSname_in: string = undefined;
    public show:boolean = false;
    public records: any[] = []; // CSV file data
    public gotRecords:boolean = false;
    @ViewChild('csvReader', { static: true }) csvReader: any;  
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

    OPTIONS = ["Add Row", "Add Column", "Import CSV"];

    ngOnInit() {
      this.resourceService.get_Allresources().subscribe((data: any[]) => {
        data.forEach(function (element) {
          const newItem = {cost_code: element.resourceCode, name: element.resourceName};
          this.RESOURCE_DATA.push(newItem);
        }.bind(this));        
        this.dataSource = new MatTableDataSource(this.RESOURCE_DATA);
        this.dataSource.paginator = this.paginator;
      });   
      this.dataSource = new MatTableDataSource(this.RESOURCE_DATA);
      this.dataSource.paginator = this.paginator;            
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    } 

    toggleAddRow(){this.show = !this.show;}
    addRow(){
      var isDuplicate = false;
      if(this.RScode_in != undefined && this.RSname_in != undefined){
        const formatCode = this.RScode_in.toString().replace(/\B(?=(\d{2})+(?!\d))/g, " ");      
      if (!this.gotRecords){        
        const newItem = {cost_code: formatCode, name: this.RSname_in};
        this.RESOURCE_DATA.forEach(function (element) {
        if (JSON.stringify(element.cost_code) === JSON.stringify(newItem.cost_code)) {
            isDuplicate = true;
            alert("Can't insert resource with same code!");
            return false;
        }
        });
        if (!isDuplicate) {
          this.RESOURCE_DATA.push(newItem);
          this.RScode_in = null;
          this.RSname_in = '';
          this.dataSource.paginator = this.paginator;
          this.resourceService.addResource(newItem.name, newItem.cost_code);
        };
      }
      else{
        const newItem = {cost_code: formatCode, name: this.RSname_in};
        this.records.forEach(function (element) {
        if (JSON.stringify(element.cost_code) === JSON.stringify(newItem.cost_code)) {
            isDuplicate = true;
            alert("Can't insert resource with same code!");
            return false;
        }
      });
      if (!isDuplicate) {
          this.records.push(newItem);
          this.RScode_in = null;
          this.RSname_in = '';
          this.dataSource.paginator = this.paginator;
          this.resourceService.addResource(newItem.name, newItem.cost_code);
        };
      }
     } 
    }
    cancelAddRow(){
      this.RScode_in = null;
      this.RSname_in = '';
      this.show = !this.show;
    }

    uploadListener($event: any): void {  
      let files = $event.srcElement.files;  
      if (files[0] != undefined){
      if (this.isValidCSVFile(files[0])) {  
        let input = $event.target;  
        let reader = new FileReader();  
        reader.readAsText(input.files[0]);  
        reader.onload = () => {  
          let csvData = reader.result;  
          let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);  
          let headersRow = this.getHeaderArray(csvRecordsArray);  
          this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length); 
          this.dataSource = new MatTableDataSource(this.records); 
          this.gotRecords = true;
          if (confirm("Do you want to upload to Database?")){
            this.records.forEach(function (element) {
              const newItem = {cost_code: element.headersRow[0], name: element.headersRow[1]};
              //console.log(newItem);
              this.resourceService.addResource(newItem.name, newItem.cost_code);
            }.bind(this));
          }
          this.dataSource.paginator = this.paginator;
        };  
        reader.onerror = function () {  console.log('error is occured while reading file!');  };  
      } 
      else {  
        alert("Please import valid .csv file.");  
        this.fileReset();  
      }
    }  
    }  

    getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {  
      let csvArr = [];  
      for (let i = 1; i < csvRecordsArray.length; i++) {  
        let curRecord = (<string>csvRecordsArray[i]).split(',');  
        if (curRecord.length == headerLength) {  
          let csvRecord: CSVrecord = new CSVrecord();  
          csvRecord.cost_code = curRecord[0].trim();  
          csvRecord.name = curRecord[1].trim();  
          csvArr.push(csvRecord);  
        }  
      }  
      return csvArr;  
    }  
    
    isValidCSVFile(file: any) {  return file.name.endsWith(".csv");  }  
    
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