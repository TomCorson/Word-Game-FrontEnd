export class MadLib {
  id: number;
  name: string;
  story: string;
  partsOfSpeech: string[];

  constructor(id: number,name: string,story: string, partsOfSpeech: string[]) {
    this.id = id;
    this.name = name;
    this.story = story;
    this.partsOfSpeech = partsOfSpeech;
}
}
