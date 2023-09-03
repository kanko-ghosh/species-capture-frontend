import { Component, OnInit } from '@angular/core';
import { SpeciesService } from '../shared/service/species.service';
import { Species } from '../shared/model/species.model';

@Component({
    selector: 'app-species-section',
    templateUrl: './species-section.component.html',
    styleUrls: ['./species-section.component.scss']
})
export class SpeciesSectionComponent implements OnInit {

    speciesCount: number;
    speciesList: Species [];
    // curPage: number;
    // numSpeciesInOnePage: number;

    constructor(private speciesService: SpeciesService) {
       this.speciesCount = 0
       this.speciesList = []
    //    this.curPage = 1
    //    this.numSpeciesInOnePage = 10
    }

    ngOnInit(): void {
        this.refreshList()
    }

    refreshList(): undefined {
        this.getSpeciesCount()
        this.getSpeciesList()
    }

    getSpeciesCount(): undefined {
        this.speciesService.getSpeciesCount().subscribe((count: number) => {
            this.speciesCount = count
        })
    }

    getSpeciesList(): undefined {
        this.speciesService.getAllSpecies().subscribe((speciesList) => {
            this.speciesList = speciesList
        })
    }



    // test() {
    //     console.log('Lol');
    //     var mySpecies: Species = new Species('Species Name 69', 'scient-name-69', '69 boi ...')
    //     this.speciesService.addSpecies(mySpecies).subscribe((result) => {
    //         console.log('Result of add: ' + result)
    //     })
    // }

}
