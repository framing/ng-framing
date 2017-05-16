export interface DocArticle {
  title: string;
  subTitle?: string;
  sections: DocArticleSection[];
}

export interface DocArticleSection {
  id?: string;
  title: string;
  subTitle?: string;
  rows: DocArticleSectionRow[];
}

export interface DocArticleSectionRow {
  cells: DocArticleSectionCell[];
}

export interface DocArticleSectionCell {
  flex?: string | number;
  content: string;
}
