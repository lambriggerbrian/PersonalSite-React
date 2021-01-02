import { ImageMetadata } from './ImageMetadata';
import { LinkData } from './LinkData';

export interface ItemData {
  title: string;
  img_small: ImageMetadata;
  img_large: ImageMetadata;
  links: LinkData[];
  synopsis: string;
  summary: string;
}
