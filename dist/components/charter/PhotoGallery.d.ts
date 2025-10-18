export type ImageComponentType = React.ComponentType<React.ImgHTMLAttributes<HTMLImageElement>>;
export type Media = string | {
    src: string;
    type?: "image" | "video";
    alt?: string;
    /** Optional poster image for videos */
    poster?: string;
};
export declare function PhotoGallery({ images, title, ImageComponent, }: {
    images: Media[];
    title: string;
    ImageComponent?: ImageComponentType;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=PhotoGallery.d.ts.map