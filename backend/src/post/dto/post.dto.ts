export class CreatePostDto {
  title: string;
  content: string;
  userId: string;
  mediaUrls?: string[];
  hashtags?: string[];
}

namespace CreatePostDto {
  export class CreatePostDto {
    title: string;
    content: string;
    userId: string;
    mediaUrls?: string[];
    hashtags?: string[];
  }
}

export class UpdatePostDto {
  title?: string;
  content?: string;
  mediaUrls?: string[];
  hashtags?: string[];
  isActive?: boolean
}

namespace UpdatePostDto {
  export class UpdatePostDto {
    title?: string;
    content?: string;
    mediaUrls?: string[];
    hashtags?: string[];
    isActive?: boolean;
  }
}