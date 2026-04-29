import { AfterViewInit, Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal implements AfterViewInit{

  courseName: string = "Angular";

  version = signal("21");

  courseDuration = signal<string>('2 Months');

  changeDuration(){
    this.courseDuration.set('3 Months..');
  }

  cityList = signal<string []>(["Pune","Mumbai"]);

  addCity(cityName: string){
    this.cityList.update((old : string[]) => [...old, cityName]);
  }

  showCityList(){
    console.log(this.cityList);
  }

  ngAfterViewInit(): void {
    console.log(this.cityList.length);
  }

}
