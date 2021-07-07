// export interface pocDataObject {
//   id: string;
//   title: string;
//   description: string;
//   imageUrl?: string;
//   launchUrl?: string;
//   tags: string[];
// }

export interface pocDataObject {
  id: string;
  name: string;
  description: string;
  diagram?: string;
  templateURL?: string;
  provider?: string;
  rating?: number;
  url: string;
  costs: number;
  tags: string[];
}
