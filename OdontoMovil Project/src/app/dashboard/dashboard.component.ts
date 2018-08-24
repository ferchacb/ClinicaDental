import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    // PolarArea
  public polarAreaChartLabels:string[] = ['Citas Disponibles', 'Registro de Pacientes', 'Total Visitas'];
  public polarAreaChartData:number[] = [300, 500, 210];
  public polarAreaLegend:boolean = true;
 
  public polarAreaChartType:string = 'polarArea';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  constructor() { }

  ngOnInit() {
  }

}
