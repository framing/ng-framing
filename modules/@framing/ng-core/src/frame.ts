import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, ReplaySubject, Subject } from 'rxjs';

export class Frame {

  // ========================================
  // public properties
  // ========================================

  /**
   * The route url of the route that this controller is attached to, if any.
   * This value MAY change if the route url changes of the controllerrs route.
   */
  public routeUrl: string;

  /**
   * The current activated route snapshot for this frame.
   */
  public routeSnapshot: ActivatedRouteSnapshot;

  /**
   * An observable of the route url of the route that this controllerr is attached to, if any.
   */
  public get routeUrl$(): Observable<string> { return this.routeUrlSubject; }

  /**
   * Emitted when the frame resolve method starts.
   */
  public get resolveStart$(): Observable<void> { return this.resolveStartSubject; }

  /**
   * Emitted when the frame resolve method ends.
   */
  public get resolveEnd$(): Observable<void> { return this.resolveEndSubject; }

  /**
   * Emitted when the frame resolve method is cancelled
   */
  public get resolveCancel$(): Observable<void> { return this.resolveCancelSubject; }

  /**
   * Subjects
   */
  public routeUrlSubject: ReplaySubject<string> = new ReplaySubject<string>();
  public resolveStartSubject: Subject<void> = new Subject<void>();
  public resolveEndSubject: Subject<void> = new Subject<void>();
  public resolveCancelSubject: Subject<void> = new Subject<void>();
}
