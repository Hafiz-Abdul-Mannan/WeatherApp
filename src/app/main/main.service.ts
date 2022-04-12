import { Injectable } from "@angular/core";
import { PostService } from "../post.service";

@Injectable({
    providedIn: 'root'
})
export class MainService {
    
    weatherData: any;
    constructor(private postService: PostService) { }


}