import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search = false;

  constructor(private postService: PostService) { }
  weatherObject: any;

  ngOnInit(): void {
  }
  onSearch(cityName: string) {
    this.search = true;
    this.postService.fetchPost(cityName).subscribe(res => { this.weatherObject = res; });
  }

}
