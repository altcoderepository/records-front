export type Label = {
  id: number;
  name: string;
  bio: string;
};

export type Artist = {
  id: number;
  name: string;
  bio: string;
};

export type Record = {
  id: number;
  title: string;
  releaseYear: string;
  cover: string;
  artist: string;
  label: string;
};

export type LabelPayload = Omit<Label, "id">;

export type Labels = Label[];

export type Artists = Artist[];

export type Records = Record[];
