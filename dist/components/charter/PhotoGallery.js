"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
const DefaultImg = (props) => {
    var _a;
    return (_jsx("img", Object.assign({}, props, { alt: (_a = props.alt) !== null && _a !== void 0 ? _a : "" })));
};
const PLACEHOLDER = "/placeholder-1.jpg";
function normalizeMedia(list, title) {
    if (!Array.isArray(list) || list.length === 0) {
        return [{ src: PLACEHOLDER, alt: `${title} photo` }];
    }
    return list.map((item, i) => {
        if (typeof item === "string") {
            return {
                src: item || PLACEHOLDER,
                alt: `${title} photo ${i + 1}`,
            };
        }
        return {
            src: item.src || PLACEHOLDER,
            alt: item.alt || `${title} photo ${i + 1}`,
        };
    });
}
function clsx(...classes) {
    return classes.filter(Boolean).join(" ");
}
export function PhotoGallery({ images, title, ImageComponent = DefaultImg, }) {
    var _a;
    const safeImages = Array.isArray(images) && images.length > 0 ? images : undefined;
    const media = useMemo(() => normalizeMedia(safeImages !== null && safeImages !== void 0 ? safeImages : [], title), [safeImages, title]);
    const [activeIdx, setActiveIdx] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const openAt = useCallback((idx) => {
        setActiveIdx(idx);
        setIsOpen(true);
    }, []);
    // scroll lock when modal open
    useEffect(() => {
        if (!isOpen)
            return;
        const original = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = original;
        };
    }, [isOpen]);
    // keyboard navigation
    useEffect(() => {
        if (!isOpen)
            return;
        const onKey = (e) => {
            if (e.key === "Escape")
                setIsOpen(false);
            if (e.key === "ArrowRight")
                setActiveIdx((i) => (i + 1) % media.length);
            if (e.key === "ArrowLeft")
                setActiveIdx((i) => (i - 1 + media.length) % media.length);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isOpen, media.length]);
    const main = (_a = media[activeIdx]) !== null && _a !== void 0 ? _a : media[0];
    const tiles = media.slice(0, Math.min(5, media.length));
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "grid gap-3 sm:grid-cols-[minmax(0,3fr)_minmax(0,1fr)] sm:auto-rows-[minmax(0,1fr)]", children: [_jsxs("button", { type: "button", onClick: () => openAt(0), className: "relative w-full overflow-hidden bg-gray-100 group rounded-xl sm:row-span-2 aspect-video sm:aspect-auto sm:min-h-[500px]", "aria-label": "Open gallery", children: [_jsx(ImageComponent, { src: (main === null || main === void 0 ? void 0 : main.src) || PLACEHOLDER, alt: `${title} main image`, className: "object-cover transition-transform duration-300 group-hover:scale-[1.02]", style: {
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    position: "absolute",
                                    inset: 0,
                                }, onError: (e) => {
                                    const target = e.currentTarget;
                                    target.src = PLACEHOLDER;
                                } }), ")", _jsx("div", { className: "absolute top-0 left-0 z-10 w-full p-3 pointer-events-none bg-gradient-to-b from-black/30 to-transparent sm:p-4", children: _jsxs("div", { className: "flex items-center justify-between gap-2 text-white", children: [_jsx("div", { className: "min-w-0 text-sm font-semibold truncate drop-shadow", children: title }), _jsxs("div", { className: "rounded-full bg-black/40 px-2 py-0.5 text-xs backdrop-blur", children: [media.length, " ", media.length === 1 ? "item" : "items"] })] }) }), _jsx("div", { className: "absolute bottom-0 right-0 z-10 m-3 pointer-events-none sm:m-4", children: _jsxs("span", { className: "inline-flex items-center gap-2 px-3 py-1 text-sm font-medium text-gray-900 transition rounded-full shadow pointer-events-auto bg-white/80 backdrop-blur hover:bg-white", children: [_jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "feather feather-image", children: [_jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }), _jsx("circle", { cx: "8.5", cy: "8.5", r: "1.5" }), _jsx("path", { d: "M21 15l-5-5L5 21" })] }), _jsx("span", { onClick: (e) => {
                                                e.stopPropagation();
                                                openAt(activeIdx);
                                            }, children: "View all" })] }) })] }), _jsx("div", { className: "hidden sm:grid sm:row-span-2 sm:grid-cols-1 sm:grid-rows-4 sm:gap-3 sm:h-full", children: tiles.slice(1).map((m, i) => {
                            const idx = i + 1;
                            const isLast = idx === tiles.length - 1 && media.length > tiles.length;
                            return (_jsxs("button", { type: "button", onClick: () => openAt(idx), className: "relative flex w-full h-full overflow-hidden bg-gray-100 group rounded-xl", "aria-label": `Open item ${idx + 1}`, children: [_jsx(ImageComponent, { src: m.src || PLACEHOLDER, alt: `${title} thumbnail ${idx + 1}`, className: "object-cover", style: {
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            position: "absolute",
                                            inset: 0,
                                        }, onError: (e) => {
                                            const target = e.currentTarget;
                                            target.src = PLACEHOLDER;
                                        } }), ")", isLast && (_jsx("div", { className: "absolute inset-0 z-10 flex items-center justify-center bg-black/40", children: _jsxs("span", { className: "px-3 py-1 text-sm font-semibold text-gray-900 rounded-full shadow bg-white/90", children: ["+", media.length - tiles.length, " more"] }) }))] }, m.src + idx));
                        }) }), _jsx("div", { className: "flex gap-2 mt-2 overflow-x-auto sm:hidden", children: media.map((m, idx) => (_jsxs("button", { type: "button", onClick: () => openAt(idx), "aria-label": `Open item ${idx + 1}`, className: clsx("relative h-16 w-28 shrink-0 overflow-hidden rounded-lg border bg-gray-100", idx === activeIdx ? "border-[#ec2227]" : "border-transparent"), children: [_jsx(ImageComponent, { src: m.src || PLACEHOLDER, alt: `${title} thumbnail ${idx + 1}`, className: "object-cover", style: {
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        position: "absolute",
                                        inset: 0,
                                    }, onError: (e) => {
                                        const target = e.currentTarget;
                                        target.src = PLACEHOLDER;
                                    } }), ")"] }, m.src + idx))) })] }), isOpen && (_jsx(Lightbox, { title: title, media: media, index: activeIdx, onClose: () => setIsOpen(false), onIndexChange: setActiveIdx, ImageComponent: ImageComponent }))] }));
}
// Lightbox modal for PhotoGallery
function Lightbox({ title, media, index, onClose, onIndexChange, ImageComponent = DefaultImg, }) {
    const [current, setCurrent] = useState(index);
    const containerRef = useRef(null);
    const touch = useRef(null);
    useEffect(() => {
        setCurrent(index);
    }, [index]);
    useEffect(() => {
        onIndexChange(current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [current]);
    // Keyboard navigation
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape")
                onClose();
            if (e.key === "ArrowRight")
                next();
            if (e.key === "ArrowLeft")
                prev();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [current, media.length]);
    const prev = useCallback(() => {
        setCurrent((c) => (c - 1 + media.length) % media.length);
    }, [media.length]);
    const next = useCallback(() => {
        setCurrent((c) => (c + 1) % media.length);
    }, [media.length]);
    const onTouchStart = (e) => {
        const t = e.touches[0];
        touch.current = { x: t.clientX, y: t.clientY };
    };
    const onTouchEnd = (e) => {
        if (!touch.current)
            return;
        const t = e.changedTouches[0];
        const dx = t.clientX - touch.current.x;
        if (Math.abs(dx) > 50) {
            if (dx < 0)
                next();
            else
                prev();
        }
        touch.current = null;
    };
    const fsRef = useRef(null);
    const requestFs = () => {
        const el = fsRef.current;
        if (el && typeof el.requestFullscreen === "function")
            el.requestFullscreen();
    };
    const m = media[current];
    return (_jsxs("div", { className: "fixed inset-0 bg-black/80 backdrop-blur-sm z-[1000]", role: "dialog", "aria-modal": "true", ref: containerRef, onClick: (e) => {
            e.preventDefault();
            e.stopPropagation();
            onClose();
        }, children: [_jsxs("div", { className: "absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-3 mx-auto text-white pointer-events-none max-w-7xl", onClick: (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                }, children: [_jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1 text-sm rounded-full pointer-events-auto bg-white/10", children: _jsx("span", { className: "truncate", children: title }) }), _jsxs("div", { className: "flex items-center gap-2 pointer-events-auto", children: [_jsx("button", { className: "px-3 py-1 text-sm rounded-full bg-white/10 hover:bg-white/20", onClick: requestFs, "aria-label": "Enter fullscreen", children: "Fullscreen" }), _jsx("button", { className: "px-3 py-1 text-sm rounded-full bg-white/10 hover:bg-white/20", onClick: onClose, "aria-label": "Close gallery", children: "Close" })] })] }), _jsxs("div", { ref: fsRef, className: "absolute inset-0 flex items-center justify-center px-4 mx-auto max-w-7xl", onClick: (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                }, onTouchStart: onTouchStart, onTouchEnd: onTouchEnd, children: [_jsxs("div", { className: "relative w-full max-w-full aspect-video", children: [_jsx(ImageComponent, { src: m.src || PLACEHOLDER, alt: m.alt || title, className: "object-contain rounded-lg", style: {
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                    position: "absolute",
                                    inset: 0,
                                }, onError: (e) => {
                                    const target = e.currentTarget;
                                    target.src = PLACEHOLDER;
                                } }), ")"] }), media.length > 1 && (_jsxs(_Fragment, { children: [_jsx("button", { className: "absolute p-3 text-white -translate-y-1/2 rounded-full left-2 top-1/2 bg-white/10 hover:bg-white/20", onClick: (e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    prev();
                                }, "aria-label": "Previous", children: _jsx(ArrowLeft, {}) }), _jsx("button", { className: "absolute p-3 text-white -translate-y-1/2 rounded-full right-2 top-1/2 bg-white/10 hover:bg-white/20", onClick: (e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    next();
                                }, "aria-label": "Next", children: _jsx(ArrowRight, {}) })] })), _jsxs("div", { className: "absolute px-3 py-1 text-sm text-white -translate-x-1/2 rounded-full bottom-4 left-1/2 bg-white/10", children: [current + 1, " / ", media.length] })] }), media.length > 1 && (_jsx("div", { className: "absolute bottom-0 left-0 right-0 hidden py-3 overflow-x-auto max-h-28 bg-black/40 sm:block", onClick: (e) => e.stopPropagation(), children: _jsx("div", { className: "flex gap-2 px-4 mx-auto max-w-7xl", children: media.map((mm, i) => (_jsxs("button", { className: clsx("relative h-20 w-32 shrink-0 overflow-hidden rounded-md border", i === current ? "border-white" : "border-white/30"), onClick: (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setCurrent(i);
                        }, "aria-label": `Go to item ${i + 1}`, children: [_jsx(ImageComponent, { src: mm.src || PLACEHOLDER, alt: `${title} thumbnail ${i + 1}`, className: "object-cover", style: {
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    position: "absolute",
                                    inset: 0,
                                }, onError: (e) => {
                                    const target = e.currentTarget;
                                    target.src = PLACEHOLDER;
                                } }), ")"] }, mm.src + i))) }) }))] }));
}
function VideoPlayer({ src, poster }) {
    var _a;
    if (src.includes("youtube.com") || src.includes("youtu.be")) {
        const id = ((_a = src.match(/(?:v=|\/)([0-9A-Za-z_-]{11})(?:\?|\&|$)/)) === null || _a === void 0 ? void 0 : _a[1]) ||
            src.split("/").pop();
        const embed = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
        return (_jsx("iframe", { className: "w-full h-full rounded-lg", src: embed, allow: "autoplay; encrypted-media", allowFullScreen: true, title: "Video" }));
    }
    if (src.includes("vimeo.com")) {
        const id = src.split("/").filter(Boolean).pop();
        const embed = `https://player.vimeo.com/video/${id}?autoplay=1`;
        return (_jsx("iframe", { className: "w-full h-full rounded-lg", src: embed, allow: "autoplay; encrypted-media", allowFullScreen: true, title: "Video" }));
    }
    return (_jsxs("video", { className: "object-contain w-full h-full bg-black rounded-lg", controls: true, autoPlay: true, poster: poster, children: [_jsx("source", { src: src }), "Your browser does not support the video tag."] }));
}
function ArrowLeft() {
    return (_jsx("svg", { width: "22", height: "22", viewBox: "0 0 24 24", "aria-hidden": "true", children: _jsx("path", { d: "M15 6l-6 6 6 6", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" }) }));
}
function ArrowRight() {
    return (_jsx("svg", { width: "22", height: "22", viewBox: "0 0 24 24", "aria-hidden": "true", children: _jsx("path", { d: "M9 6l6 6-6 6", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" }) }));
}
