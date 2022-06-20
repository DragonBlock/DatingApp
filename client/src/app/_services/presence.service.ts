import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { ToastrService } from 'ngx-toastr';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class PresenceService {
  hubURL = environment.hubURL;
  private hubConnection: HubConnection;

  constructor(private toastr: ToastrService) { }

  createHubConnection(user: User) {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(this.hubURL + "presence", {
        accessTokenFactory: () => user.token
      })
      .withAutomaticReconnect()
      .build();
    
      this.hubConnection
        .start()
        .catch(error => console.log(error));

      this.hubConnection.on("UserIsOnline", username => {
        this.toastr.info(username + " has connected");
      })

      this.hubConnection.on("UserIsOffline", username => {
        this.toastr.warning(username + " has disconnected");
      })

  }

  stopHubConnection() {
    this.hubConnection.stop().catch(error => console.log(error));
  }
}