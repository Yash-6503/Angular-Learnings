import { AfterViewInit, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal',
  imports: [FormsModule],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal implements AfterViewInit{

  courseName: string = "Angular";

  version = signal("21");

  toggle = signal<boolean>(false);

  cityName : string = "";

  courseDuration = signal<string>('2 Months');

  changeDuration(){
    this.courseDuration.set('3 Months..');
  }

  cityList = signal<string []>(["Pune","Mumbai"]);

  addCity(cityName: string){

    const newCity = cityName.trim();

    // const exisits = this.cityList().some(c => c.toLowerCase() === newCity);
    // const exists = this.cityList().filter((c : string) => c === newCity);

     const exists = this.cityList()
    .map(c => c.trim().toLowerCase())
    .includes(newCity.toLowerCase());
    
    // some(
    //   (c : string) => c.toLowerCase() === newCity
    // );

    if(exists){
      alert("City "+cityName+" is Already available please enter other city.");
      return;
    }


    this.cityList.update((old : string[]) => [...old, cityName]);
    
  }

  showCityList(){
    console.log(this.cityList);
    return this.cityList;
  }

  ngAfterViewInit(): void {
    console.log(this.cityList.length);
  }

}
