import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Weather } from "./weather.model";


@Injectable({
    providedIn: 'root'
})
export class PostService {
    constructor(private http: HttpClient) {

    }
    fetchPost(cityName: String) {
        return this.http.get<any>('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=73a072bde7e8a94f7360d466ee6b4c42').pipe(map(res => {
            const weather = new Weather();
            weather.cityName = res.name;
            weather.temperature = this.kelvinToCel(res.main.temp);
            weather.weather = res.weather[0].main;
            weather.maxTemp = this.kelvinToCel(res.main.temp_max);
            weather.minTemp = this.kelvinToCel(res.main.temp_min);
            return weather;
        }));
    }
    kelvinToCel(kel: number): number {
        return Math.round(kel - 273.15);
    }
}