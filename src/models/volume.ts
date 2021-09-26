import { List, Record } from "immutable";
import dayjs, { Dayjs } from 'dayjs';

import { JSObject } from 'types/Common';

export class ImageLinks extends Record<{
  smallThumbnail: string;
  thumbnail: string;
}>({
  smallThumbnail: '',
  thumbnail: '',
}) {
  static generateFromResponse(response: JSObject) {
    const params = { ...response };
    return new ImageLinks(params);
  }
}

export class VolumeInfo extends Record<{
  title: string;
  subtitle: string;
  authors: List<string>;
  publisher: string;
  publishedDate: Dayjs;
  description: string;
  imageLinks: ImageLinks;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
}>({
  title: '',
  subtitle: '',
  authors: List(),
  publisher: '',
  publishedDate: dayjs(),
  description: '',
  imageLinks: new ImageLinks(),
  previewLink: '',
  infoLink: '',
  canonicalVolumeLink: '',
}) {
  static generateFromResponse(response: JSObject) {
    const params = { ...response };
    params.authors = List(params.authors);
    params.publishedDate = dayjs(params.publishedDate);
    params.imageLinks = ImageLinks.generateFromResponse(params.imageLinks);
    return new VolumeInfo(params);
  }
  get descriptionWithNewLine() {
    return this.description.replace('。 ', '\n');
  }
  get publishedDateString() {
    return this.publishedDate.format('YYYY/MM/DD');
  }
}

// cf.https://developers.google.com/books/docs/v1/reference/volumes/get
export class Volume extends Record<{
  id: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
} > ({
  id: '',
  selfLink: '',
  volumeInfo: new VolumeInfo,
}) {
  static generateFromResponse(response: JSObject) {
    const params = { ...response };
    params.volumeInfo = VolumeInfo.generateFromResponse(params.volumeInfo);
    return new Volume(params);
  }
}

export class VolumeList extends Record<{
  kind: string;
  totalItems: number;
  items: List<Volume>;
}>({
  kind: '',
  totalItems: 0,
  items: List(),
}) {
  static fromResponse(response: JSObject) {
    const params = { ...response };
    params.items = List(params.items.map((item: JSObject) => Volume.generateFromResponse(item)));
    return new VolumeList(params);
  }
}




