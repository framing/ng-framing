import { Feature } from 'features/feature-detail/types/feature';

export interface FeatureSet {
  id: string;
  title: string;
  repo?: string;
  features?: Feature[];
};
