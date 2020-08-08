import { Image } from './image.model';
import { Powerstats } from './powerstats.model';
import { Biography } from './biography.model';
import { Work } from './work.model';
import { Appearance } from './appearance.model';
import { Connections } from './connections.model';

export class Hero {
  
  constructor(public responseStatus: string, public id: string, public name: string, public powerstats: Powerstats, public biography:Biography,
     public apprearance: Appearance, public work: Work, public connections: Connections, public image: Image) { }

}