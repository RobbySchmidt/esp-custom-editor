// Directus file/image object as returned when a relational file field is
// expanded (e.g. fields=image.*). Matches what <Picture> consumes.
export interface DirectusImage {
  id: string;
  filename_disk: string;
  width: number;
  height: number;
  type: string;
  title: string | null;
  description: string | null;
}
