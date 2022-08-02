import { ILocation } from "./Location";

export interface ICharacter {
   id: number,
   name: string,
   image: string,
}

export interface ICharacterDetail extends ICharacter {
   location: ILocation,
   episode: [],
   species: string,
   status: string,
}