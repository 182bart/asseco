// interface for model from model_example.yml
export interface Model {
  id?: number;
  nazwa: string;
  data_na: Date;
  frakcja_testow: number;
  n_trees: number;
  interaction_depth: number;
  shrinkage: number;
  n_minobsinnode: number;
  cv_folds: number;
  threshold: number;
  preprocesor: string;
  postprocesor: string;
  zbior_danych: string;
  cechy: Array<string>;
  cechy_all: Array<string>;
  fraud: number;
}
