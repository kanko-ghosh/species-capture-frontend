import { Component } from '@angular/core';
import { IconDefinition, faTree } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

    faTree: IconDefinition;

    constructor() {
        this.faTree = faTree
    }

}
