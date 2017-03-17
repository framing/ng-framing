import { Framer } from './framer';

/**
 * A framer with no route, model, view, controller or frame.
 * To be used for leveraging the frame() function only.
 */
export abstract class SimpleFramer extends Framer<void, void> {
  public get framerName(): string { return 'Simple'; }
  public get createFrame(): boolean { return false; }
  public get routeRule(): ('require' | 'auto' | 'none') { return 'none'; }
}
