import {Reference} from './reference';

export interface Experience{
	id:number;
	projectTitle:string;
	technologyUsed:string[];
	projectDesc:string;
	githubLink:string;
	referenceLink:Array<Reference>;

}