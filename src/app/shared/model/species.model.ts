export class Species {

    id!: string | null;
    name!: string | null;
    scientificName!: string | null;
    description!: string | null;

    constructor(name: string, scientificName: string, description: string) {
        this.id = null
        this.name = name
        this.scientificName = scientificName
        this.description = description
    }

}