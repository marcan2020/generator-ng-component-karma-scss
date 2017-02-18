import { Component } from '@angular/core';

@Component({
  selector: 'app-<%= file_name %>',
  templateUrl: './<%= file_name %>.component.html',
  styleUrls: ['./<%= file_name %>.component.scss']
})
export class <%= component_name %>Component {

  constructor() { }

}

