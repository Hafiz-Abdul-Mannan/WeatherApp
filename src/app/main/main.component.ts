import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Weather } from '../weather.model';
import { MainService } from './main.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  favoriteCities = ['Paderborn', 'Lahore', 'Karachi', 'Colonge', 'Islamabad'];
  weatherInCities: Weather[] = [];
  width = 1000;
  height = 500;
  cellsToShow = 3;
  cellWidth = 250;
  arrowsOutside = true;
  // i: number = 0;
  // get image() {
  //   return '../../assets/images/' + this.weatherInCities[this.i].weather + '.png';
  // }
  get zeeshan() {
    return 150;
  }

  constructor(private mainSevice: MainService, private postService: PostService) {

  }

  ngOnInit(): void {
    this.favoriteCities.forEach(city => {
      this.postService.fetchPost(city).subscribe(res => this.weatherInCities.push(res));
    })
    console.log(screen.width);
  }
  weather = ['Sunny', 'Clouds', 'Rain'];

  image(name: string) {
    if (this.weather.includes(name)) {
      return '../../assets/images/' + name + '.png';
    }
    return '../../assets/images/Sunny.png';

  }

}

