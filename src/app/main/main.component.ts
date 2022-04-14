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
  weather = ['Sunny', 'Clouds', 'Rain'];
  width = 1000;
  height = 500;
  cellsToShow: number = 3;
  cellWidth = 250;
  arrowsOutside = true;
  overflowCellsLimit = 3;
  showSearchCard = false;

  constructor(private mainSevice: MainService, private postService: PostService) {
    if (screen.width <= 450) {
      this.cellsToShow = 1;
      this.arrowsOutside = false;
      this.overflowCellsLimit = 1;

    }
    this.width = 0.78 * screen.width;
  }

  ngOnInit(): void {
    this.gettingData();
  }
  gettingData() {
    this.favoriteCities.forEach(city => {
      this.fetcherData(city);
    })
  }
  fetcherData(name: string) {
    this.postService.fetchPost(name).subscribe(res => this.weatherInCities.push(res));
  }

  image(name: string) {
    if (this.weather.includes(name)) {
      return '../../assets/images/' + name + '.png';
    }
    return '../../assets/images/Sunny.png';

  }
  onAdd() {
    this.showSearchCard = true;
  }
  onSearch(name: string) {
    this.fetcherData(name);
    this.showSearchCard = false;
  }

}

