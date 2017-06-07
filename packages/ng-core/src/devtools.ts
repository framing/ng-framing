/**
 * Dev tool class used for framing integration with Redux DevTools
 *
 * @class FramingTools
 */
export class FramingTools {
  private static _instance: FramingTools;
  public instantiatedControllers: any = {};

  public constructor() {}

  public static get Instance(): FramingTools {
    return this._instance || (this._instance = new this());
  }

  public addController(framerName: string, controller: any): void {
    this.instantiatedControllers[framerName] = controller;
  }

  public getAllControllers(): any {
    return this.instantiatedControllers;
  }

  public findFramer(key: any): any {
    return this.instantiatedControllers[key] ? this.instantiatedControllers[key] : null;
  }
}
