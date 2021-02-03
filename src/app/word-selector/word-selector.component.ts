import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';
import {MadLib} from './word-input/mad-lib';

@Component({
  selector: 'app-word-selector',
  templateUrl: './word-selector.component.html',
  styleUrls: ['./word-selector.component.css']
})
export class WordSelectorComponent implements OnInit {
  MadLibList : MadLib[] = [];

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.getMadLibList();
  }
  getMadLibList(): any[] {
    this.configService.getMadLibs()
      .subscribe( response => {
        for(const MadLibResponse of response){
          const MadLibObject = new MadLib(
            MadLibResponse.id,
            MadLibResponse.name,
            MadLibResponse.story,
            MadLibResponse.partsOfSpeech
          );
          this.MadLibList.push(MadLibObject);
        }
      });
    return this.MadLibList;
  }

}
