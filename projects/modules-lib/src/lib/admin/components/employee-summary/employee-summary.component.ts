import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef, GridReadyEvent, IServerSideDatasource } from 'ag-grid-community';

@Component({
  selector: 'lib-employee-summary',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './employee-summary.component.html',
  styleUrl: './employee-summary.component.scss'
})
export class EmployeeSummaryComponent {

  rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ];

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "make", sortable: true },
    { field: "model", sortable: true },
    { field: "price", sortable: true },
    { field: "electric", sortable: true }
  ];

  pagination = true;

  // sets 10 rows per page (default is 100)
  paginationPageSize = 10;

  // allows the user to select the page size from a predefined list of page sizes
  paginationPageSizeSelector = [10, 20, 50, 100];


  onSortChange(params:any){
    console.log(params);
  }

  onPaginationChange(params:any){
    console.log(params);
  }
}
