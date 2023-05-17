export type TFeedStore = {
  data: TFeedMap;
  list: string[];
};

export type TFeedMap = Record<string, TFeed>;

export type TFeedBase = {
  src: string;
  title: string;
};

export type TFeed = TFeedBase & {
  id: string;
};
