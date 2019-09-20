import { Component, ViewChild, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { CSVrecord } from './CSVmodel';
import { resourceModelArr} from './resourceModel'
import { ResourceService } from 'src/app/service/resource.service';

export interface PeriodicElement {
    name: string;
    cost_code: number;
  }

  const ELEMENT_DATA: PeriodicElement[] = [

  ];
const RESOURCES: resourceModelArr[] = []

@Component({
    selector: 'app-resource',
    templateUrl: './resource.component.html',
    styleUrls: ['./resource.component.css']
  })

  export class ResourceComponent implements OnInit{    
    constructor(private resourceService : ResourceService) { }

    displayedColumns: string[] = ['name', 'cost_code'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
    resources: any[];
    RScode_in: number = undefined;
    RSname_in: string = undefined;
    public show:boolean = false;
    public records: any[] = []; // CSV file data
    @ViewChild('csvReader', { static: true }) csvReader: any;  
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

    OPTIONS = ["Add Row", "Add Column", "Import CSV"];

    ngOnInit() {
      this.resourceService.get_resources_with_projId(11).subscribe((data: any[]) => {
        console.log(resourceModelArr);
        console.log(data);
        data.forEach(function (element) {
          const newItem = {cost_code: element.res.resourceCode, name: element.res.resourceName};
          ELEMENT_DATA.push(newItem);
        });        
        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
      });        
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    } 

    toggleAddRow(){this.show = !this.show;}
    addRow(){
      var isDuplicate = false;
      if(this.RScode_in != undefined && this.RSname_in != undefined){
      const newItem = {cost_code: this.RScode_in, name: this.RSname_in};
      ELEMENT_DATA.forEach(function (element) {
        if (JSON.stringify(element.cost_code) === JSON.stringify(newItem.cost_code)) {
            isDuplicate = true;
            alert("Can't insert resource with same code!");
            return false;
        }
      });
      if (!isDuplicate) {
        ELEMENT_DATA.push(newItem);
        this.RScode_in = null;
        this.RSname_in = '';
        this.dataSource.paginator = this.paginator;
      };
     }
     
    this.resourceService.addResource(11, this.RSname_in, this.RScode_in);
    
    }
    cancelAddRow(){
      this.RScode_in = null;
      this.RSname_in = '';
      this.show = !this.show;
    }


    uploadListener($event: any): void {  
      let text = [];  
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


// [{"proj":{"projectId":11,"projectName":"Projec5"},"res":{"resourceId":16,"resourceName":"Masonary","resourceCode":"10 11 12"}},
// {"proj":{"projectId":11,"projectName":"Projec5"},"res":{"resourceId":15,"resourceName":"Electric","resourceCode":"00 11 12"}},
// {"proj":{"projectId":11,"projectName":"Projec5"},"res":{"resourceId":18,"resourceName":"Heat","resourceCode":"20 21 12"}},
// {"proj":{"projectId":11,"projectName":"Projec5"},"res":{"resourceId":3,"resourceName":"cccccc","resourceCode":"7944444444466"}},
// {"proj":{"projectId":11,"projectName":"Projec5"},"res":{"resourceId":17,"resourceName":"Wheat","resourceCode":"20 11 12"}}]