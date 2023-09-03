import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Species } from '../model/species.model';

@Injectable({
    providedIn: 'root'
})
export class SpeciesService {

    private speciesUrl: string;
    private defaultHeader: object;

    constructor(private httpClient: HttpClient) { 
        this.speciesUrl = environment.backendUrl + environment.paths.species
        this.defaultHeader = {
            'Access-Control-Allow-Origin': '*'
        }
    }

    getSpeciesCount(): Observable<number> {
        var countUrl: string = this.speciesUrl + environment.functions.species.count
        return this.httpClient.get<number>(countUrl, this.defaultHeader)
    }

    addSpecies(species: Species): Observable<boolean> {
        var addUrl: string = this.speciesUrl + environment.functions.species.add
        return this.httpClient.post<boolean>(addUrl, species, this.defaultHeader)
    }

    getAllSpecies(): Observable<Species []> {
        var getUrl: string = this.speciesUrl + environment.functions.species.get_all + '?limit=0&skip=0'
        return this.httpClient.get<Species []>(getUrl, this.defaultHeader)
    }

}
