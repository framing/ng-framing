import * as _ from 'lodash';

export abstract class FramerHelper {

  private static _nextId: number = 1;

  /**
   * A unique framer id for this this.
   */
  public framerHelperId: number;

  /**
   * A unique identifier string for this framer helper instance.
   */
  public get framerHelperIdent(): string {
    return _.camelCase(`framerHelper-${(this as any).__proto__.constructor.name}-${this.framerHelperId}`);
  }

  // ========================================
  // constructor
  // ========================================

  public constructor() {
    this.framerHelperId = FramerHelper._nextId++;
  }
}
