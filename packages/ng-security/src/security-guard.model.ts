export interface SecurityGuardModel {
  /**
   * The authorization string for this guard.
   */
  authorization?: string;

  /**
   * Defualts to true.
   */
  canActive?: boolean;

  /**
   * Defualts to false.
   */
  canLoad?: boolean;

  /**
   * Defualts to false.
   */
  canActivateChild?: boolean;
}
