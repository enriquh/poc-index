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
  templateUrl?: string;
  costs: number;
  tags: string[];
}
