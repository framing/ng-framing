import { Injectable } from '@angular/core';

@Injectable()
export class MockLogger {

  output: { [key: string]: any[] } = {
    log: [],
    error: [],
    warn: [],
  };

  log(value: any, ...rest: any[]): void {
    this.output.log.push([ value, ...rest ]);
  }

  error(value: any, ...rest: any[]): void {
    this.output.error.push([ value, ...rest ]);
  }

  warn(value: any, ...rest: any[]): void {
    this.output.warn.push([ value, ...rest ]);
  }
}
