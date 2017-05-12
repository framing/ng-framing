import { Injectable } from '@angular/core';
import { Controller } from '@framing/ng-core';

import { DocsArticleModel } from './docs-article.model';
import { DocsArticleView } from './docs-article.view';

@Injectable()
export class DocsArticleController extends Controller<DocsArticleModel, DocsArticleView> {

}
