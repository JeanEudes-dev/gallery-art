export interface Artwork {
  id: number;
  title: string;
  artist_display: string;
  image_id: string;
  publication_history?: string;
  artist_title: string;
}

export interface ApiResponse<T> {
  data: T;
  pagination: {
    total: number;
    limit: number;
    offset: number;
    current_page: number;
    total_pages: number;
  };
}
