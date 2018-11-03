import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable()
export class DataService {

    private baseUrl: string = environment.API_URL;

}