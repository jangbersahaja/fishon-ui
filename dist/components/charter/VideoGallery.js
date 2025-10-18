"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const DefaultImg = (props) => {
    var _a;
    // Always provide an alt prop for accessibility/linting
    return _jsx("img", Object.assign({}, props, { alt: (_a = props.alt) !== null && _a !== void 0 ? _a : "" }));
};
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
function cx(...parts) {
    return parts.filter(Boolean).join(" ");
}
function isIframe(url) {
    return /youtube.com|youtu.be|vimeo.com/.test(url);
}
function IframePlayer({ src }) {
    var _a;
    let embed = src;
    if (src.includes("youtube.com") || src.includes("youtu.be")) {
        const id = ((_a = src.match(/(?:v=|\/)([0-9A-Za-z_-]{11})(?:\?|&|$)/)) === null || _a === void 0 ? void 0 : _a[1]) ||
            src.split("/").pop();
        embed = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
    }
    else if (src.includes("vimeo.com")) {
        const id = src.split("/").filter(Boolean).pop();
        embed = `https://player.vimeo.com/video/${id}?autoplay=1`;
    }
    return (_jsx("iframe", { className: "w-full h-full rounded-lg", src: embed, allow: "autoplay; encrypted-media", allowFullScreen: true, title: "Video" }));
}
export function VideoGallery({ videos, className, ImageComponent = DefaultImg, }) {
    const items = useMemo(() => {
        const filtered = videos.filter((v) => !!v.url);
        return filtered;
    }, [videos]);
    const [openIndex, setOpenIndex] = useState(null);
    const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
    const [thumbs, setThumbs] = useState({});
    useEffect(() => {
        let cancelled = false;
        (async () => {
            for (const v of items) {
                if (v.thumbnailUrl || thumbs[v.url] || !isIframe(v.url))
                    continue;
                try {
                    const res = await fetch(`/api/video-thumbnail?url=${encodeURIComponent(v.url)}`);
                    if (!res.ok)
                        continue;
                    const json = (await res.json());
                    if (json.thumbnailUrl && !cancelled) {
                        setThumbs((prev) => prev[v.url] ? prev : Object.assign(Object.assign({}, prev), { [v.url]: json.thumbnailUrl }));
                    }
                }
                catch (_a) {
                    /* ignore */
                }
            }
        })();
        return () => {
            cancelled = true;
        };
    }, [items, thumbs]);
    const open = useCallback((idx) => {
        setOpenIndex(idx);
    }, []);
    const close = useCallback(() => setOpenIndex(null), []);
    if (!items.length)
        return null;
    return (_jsxs("div", { className: cx("mt-6 w-full overflow-hidden", className), children: [_jsx("div", { className: "flex gap-3 overflow-x-auto overflow-y-hidden pb-2 h-[200px] sm:h-[240px] items-stretch no-scrollbar overscroll-x-contain overscroll-y-none snap-x snap-mandatory min-w-0 carousel-scroll", children: items.map((v, i) => (_jsxs("button", { type: "button", "aria-label": `Play video ${i + 1}`, onClick: () => open(i), className: "relative h-full overflow-hidden rounded-lg group w-44 shrink-0 bg-slate-200 snap-start", children: [_jsx(VideoThumb, { src: v.thumbnailUrl || thumbs[v.url], ImageComponent: ImageComponent }), _jsx("div", { className: "absolute inset-0 grid place-items-center", children: _jsx("span", { className: "inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-white rounded-full shadow bg-black/60", children: "\u25B6 Play" }) })] }, v.url + i))) }), _jsx("style", { children: `
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .carousel-scroll {
          -webkit-overflow-scrolling: touch;
          overscroll-behavior-x: contain;
        }
      ` }), openIndex !== null && (_jsx(VideoLightbox, { index: openIndex, items: items, onClose: close, onIndexChange: setOpenIndex, fullscreenMobile: isMobile, thumbs: thumbs, ImageComponent: ImageComponent }))] }));
}
function VideoThumb({ src, ImageComponent = DefaultImg }) {
    const [errored, setErrored] = useState(false);
    if (!src || errored) {
        return (_jsx("div", { className: "absolute inset-0 grid place-items-center bg-gradient-to-br from-slate-400 to-slate-500 text-slate-700", children: _jsxs("div", { className: "flex flex-col items-center gap-1", children: [_jsx("svg", { className: "w-12 h-12 text-white/80", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" }) }), _jsx("span", { className: "text-xs font-medium text-white/90", children: "Video" })] }) }));
    }
    return (_jsx(ImageComponent, { src: src, alt: "Video thumbnail", style: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            inset: 0,
        }, className: "object-cover", onError: () => setErrored(true) }));
}
function VideoLightbox({ items, index, onClose, onIndexChange, fullscreenMobile, thumbs, ImageComponent = DefaultImg, }) {
    const [current, setCurrent] = useState(index);
    const videoRef = useRef(null);
    const [progress, setProgress] = useState(() => Array(items.length).fill(0));
    const [durations, setDurations] = useState(() => Array(items.length).fill(0));
    useEffect(() => {
        onIndexChange(current);
    }, [current, onIndexChange]);
    useEffect(() => {
        setCurrent(index);
    }, [index]);
    const next = useCallback(() => {
        setCurrent((c) => (c + 1 < items.length ? c + 1 : 0));
    }, [items.length]);
    const prev = useCallback(() => {
        setCurrent((c) => (c - 1 >= 0 ? c - 1 : items.length - 1));
    }, [items.length]);
    const handleEnded = useCallback(() => {
        setProgress((p) => {
            const copy = [...p];
            copy[current] = 1;
            return copy;
        });
        next();
    }, [next, current]);
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
    }, [next, prev, onClose]);
    const touch = useRef(null);
    const onTouchStart = (e) => {
        const t = e.touches[0];
        touch.current = { x: t.clientX, y: t.clientY };
    };
    const onTouchEnd = (e) => {
        if (!touch.current)
            return;
        const t = e.changedTouches[0];
        const dx = t.clientX - touch.current.x;
        const dy = t.clientY - touch.current.y;
        if (Math.abs(dy) > 70 && Math.abs(dy) > Math.abs(dx)) {
            onClose();
            touch.current = null;
            return;
        }
        if (Math.abs(dx) > 50) {
            if (dx < 0)
                next();
            else
                prev();
        }
        touch.current = null;
    };
    const cur = items[current];
    useEffect(() => {
        setProgress((p) => {
            const copy = [...p];
            if (copy[current] !== 1)
                copy[current] = 0;
            return copy;
        });
    }, [current]);
    useEffect(() => {
        if (!isIframe(cur.url))
            return;
        const d = durations[current] || 8;
        const t = setTimeout(() => handleEnded(), d * 1000);
        return () => clearTimeout(t);
    }, [cur.url, current, durations, handleEnded]);
    const handleMetadata = () => {
        const el = videoRef.current;
        if (!el)
            return;
        const d = Number.isFinite(el.duration) ? el.duration : 0;
        setDurations((prev) => {
            if (prev[current] === d)
                return prev;
            const copy = [...prev];
            copy[current] = d;
            return copy;
        });
    };
    useEffect(() => {
        const original = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = original;
        };
    }, []);
    const desktop = !fullscreenMobile;
    const videoDuration = durations[current] || (isIframe(cur.url) ? 8 : 8);
    const progressKey = `${current}-${cur.url}-${videoDuration}-${progress[current]}`;
    const viewerWrapperClass = desktop
        ? "w-[960px] min-h-[540px] max-w-full"
        : "aspect-[9/16] max-h-full";
    return (_jsx("div", { className: "fixed inset-0 z-[1000] flex items-center justify-center bg-black/85 backdrop-blur-sm", role: "dialog", "aria-modal": "true", onClick: onClose, children: _jsxs("div", { className: cx("relative flex w-full flex-col", desktop ? "max-w-5xl px-4" : "h-full"), onClick: (e) => e.stopPropagation(), children: [_jsxs("div", { className: "flex items-center justify-between px-2 py-3 text-white", children: [_jsx("button", { type: "button", onClick: onClose, className: "px-3 py-1 text-sm rounded-full bg-white/10 hover:bg-white/20", "aria-label": "Close", children: "Close" }), _jsxs("div", { className: "text-xs opacity-80", children: [current + 1, " / ", items.length] })] }), _jsxs("div", { className: cx("relative mx-auto flex w-full flex-1 items-center justify-center", viewerWrapperClass), onTouchStart: onTouchStart, onTouchEnd: onTouchEnd, children: [isIframe(cur.url) ? (_jsx(IframePlayer, { src: cur.url })) : (_jsx("div", { className: "relative flex items-center justify-center w-full h-full bg-black rounded-lg", children: _jsxs("video", { ref: videoRef, className: "max-h-full sm:max-h-[540px] max-w-full object-contain", autoPlay: true, playsInline: true, controls: true, onEnded: handleEnded, onLoadedMetadata: handleMetadata, children: [_jsx("source", { src: cur.url }), "Your browser does not support the video tag."] }, cur.url) })), !desktop && items.length > 1 && (_jsxs("div", { className: "absolute inset-0 z-10 flex select-none touch-none", children: [_jsx("button", { type: "button", "aria-label": "Previous", onClick: prev, className: "w-1/2 h-full bg-transparent cursor-pointer" }), _jsx("button", { type: "button", "aria-label": "Next", onClick: next, className: "w-1/2 h-full bg-transparent cursor-pointer" })] })), desktop && items.length > 1 && (_jsxs(_Fragment, { children: [_jsx("button", { type: "button", onClick: prev, className: "absolute p-3 text-white -translate-y-1/2 rounded-full left-2 top-1/2 bg-white/10 hover:bg-white/20", "aria-label": "Previous", children: "\u2190" }), _jsx("button", { type: "button", onClick: next, className: "absolute p-3 text-white -translate-y-1/2 rounded-full right-2 top-1/2 bg-white/10 hover:bg-white/20", "aria-label": "Next", children: "\u2192" })] }))] }), desktop && items.length > 1 && (_jsx("div", { className: "mt-3 overflow-hidden", children: _jsx("div", { className: "flex gap-2 h-[120px] items-stretch overflow-x-auto overflow-y-hidden pb-3 no-scrollbar overscroll-x-contain snap-x snap-mandatory carousel-scroll", children: items.map((v, i) => (_jsxs("button", { type: "button", onClick: () => setCurrent(i), className: cx("relative h-full w-32 shrink-0 overflow-hidden rounded-md border snap-start", i === current ? "border-white" : "border-white/30"), "aria-label": `Select video ${i + 1}`, children: [_jsx(VideoThumb, { src: v.thumbnailUrl || thumbs[v.url], ImageComponent: ImageComponent }), i === current && (_jsx("div", { className: "absolute inset-0 ring-2 ring-white/70" }))] }, v.url + i))) }) })), items.length > 0 && (_jsx("div", { className: "absolute top-0 left-0 right-0 z-20 flex gap-1 px-3 pt-2 pointer-events-none", children: items.map((_, i) => {
                        const isPrev = i < current;
                        const isActive = i === current;
                        const isDone = progress[i] === 1;
                        const width = isPrev || isDone ? "100%" : isActive ? "0%" : "0%";
                        const duration = isActive ? videoDuration : 0;
                        return (_jsx("div", { className: "flex-1 h-1 overflow-hidden rounded-full bg-white/30", children: _jsx("div", { className: cx("h-full rounded-full bg-white", isActive && !isDone ? "animate-none" : ""), style: isActive && !isDone
                                    ? {
                                        animation: `storyFill ${duration}s linear forwards`,
                                    }
                                    : { width } }) }, `${i}-${isActive}-${progressKey}`));
                    }) })), _jsx("style", { children: `
            @keyframes storyFill {
              from {
                width: 0%;
              }
              to {
                width: 100%;
              }
            }
          ` })] }) }));
}
