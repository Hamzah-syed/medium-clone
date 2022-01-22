import { IAuthor } from "./author_interface";
import { IComment } from "./comment_interface";

export interface IPost {
  _id: string;
  _updatedAt: string;
  _createdAt: string;
  title: string;
  author: IAuthor;
  comments?: IComment[];
  mainImage: IImage;
  slug: {
    current: string;
  };
  body: any;
}

export interface IImage {
  assets: {
    url: string;
  };
}
