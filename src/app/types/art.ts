export interface Artwork {
    id: number;
    title: string;
    artist_display: string;
    image_id: string;
    publication_history?: string;
  }
  
  export interface ApiResponse<T> {
    data: T;
    pagination: {
      total: number;
      limit: number;
      offset: number;
    };
  }