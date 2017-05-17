export interface Feature {
  id: string;
  title: string;
  npm?: string;
  repo?: string;
  description?: string;
  installation?: string;
  usage?: string;
  modelProperties?: FeatureProperty[];
  viewComponents?: FeatureProperty[];
  controllerMethods?: FeatureProperty[];
}

export interface FeatureProperty {
  name: string;
  description: string;
}
