import { Injectable } from '@angular/core';

@Injectable()
export class Logger {

  log(value: any, ...rest: any[]): void {
    console.log(value, ...rest);
  }

  error(value: any, ...rest: any[]): void {
    console.error(value, ...rest);
  }

  warn(value: any, ...rest: any[]): void {
    console.warn(value, ...rest);
  }
}
