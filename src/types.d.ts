export type History = {
  activity: 'plushToyAdded' | 'plushToyModified' | 'plushToyRemoved';
  dateCreated: number;
  plushToyId: string;
};

export type PlushToy = {
  id: string;
  name: string;

  dateCreated?: number;
  description?: string;
  specie?: string;
};
