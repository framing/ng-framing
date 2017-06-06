/**
 * Dev tool class used for framing integration with Redux DevTools
 *
 * @class FramingTools
 */
export class FramingTools {
  private static _instance: FramingTools;
  public instantiatedFramers: any[];

  public constructor() {}

  public static get Instance(): FramingTools {
    return this._instance || (this._instance = new this());
  }

  public addFramer(framer: any): void {
    this.instantiatedFramers.push(framer);
  }

  public getAllFramers(): any {
    return this.instantiatedFramers;
  }
}
