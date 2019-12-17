import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'serverName';
  userName = "userName";
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  showParagraph: boolean = false;
  timesButtonClicked: number = 0;
  buttonClickedArray = [];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}.`;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  emptyString() {
    this.userName = '';
  }

  onButtonClick() {
    this.showParagraph = !this.showParagraph;
    this.timesButtonClicked += 1;
    this.buttonClickedArray.push(new Date());
  }

}
