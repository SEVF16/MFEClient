import { Injectable, NgZone } from '@angular/core';
import * as PubSub from 'pubsub-js';
@Injectable({
  providedIn: 'root'
})
export class ReciveService {
  publish(eventName: string, data: any): void {
    PubSub.publish(eventName, data);
  }

  subscribe(eventName: string, callback: (msg: string, data: any) => void): string {
    console.log(callback);
    return PubSub.subscribe(eventName, callback);
  }

  unsubscribe(token: string): void {
    PubSub.unsubscribe(token);
  }
}
