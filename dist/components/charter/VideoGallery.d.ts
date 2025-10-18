export type ImageComponentType = React.ComponentType<React.ImgHTMLAttributes<HTMLImageElement>>;
export interface VideoGalleryItem {
    url: string;
    name?: string;
    thumbnailUrl?: string | null;
}
interface VideoGalleryProps {
    videos: VideoGalleryItem[];
    className?: string;
    ImageComponent?: ImageComponentType;
}
export declare function VideoGallery({ videos, className, ImageComponent, }: VideoGalleryProps): import("react/jsx-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=VideoGallery.d.ts.map