
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Cursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    // Use a ref to track first move to avoid re-renders or stale closures causing loops
    const hasMoved = useRef(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        // Ensure elements exist before trying to animate
        if (!cursor || !follower) return;

        // Initial setup: hidden and centered
        gsap.set([cursor, follower], { xPercent: -50, yPercent: -50, opacity: 0 });

        const moveCursor = (e: MouseEvent) => {
            // On first move, reveal the cursor
            if (!hasMoved.current) {
                hasMoved.current = true;
                gsap.to([cursor, follower], { opacity: 1, duration: 0.3 });
            }

            // Direct mapping for instant reaction
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1, // Very fast for precision
                ease: 'power3.out'
            });

            // Fluid delay for the follower
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.8, // Slower for liquid feel
                ease: 'power3.out'
            });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check for interactive elements
            const isInteractive =
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.tagName.toLowerCase() === 'input' ||
                !!target.closest('a') ||
                !!target.closest('button') ||
                !!target.closest('.interactive') ||
                getComputedStyle(target).cursor === 'pointer';

            setIsHovering(Boolean(isInteractive));
        };

        const handleMouseDown = () => {
            gsap.to([cursor, follower], {
                scale: 0.8,
                duration: 0.1
            });
        };

        const handleMouseUp = () => {
            gsap.to([cursor, follower], {
                scale: isHovering ? 1.5 : 1,
                duration: 0.1
            });
        };

        const handleMouseLeave = () => {
            gsap.to([cursor, follower], { opacity: 0, duration: 0.3 });
        };

        const handleMouseEnter = () => {
            if (hasMoved.current) {
                gsap.to([cursor, follower], { opacity: 1, duration: 0.3 });
            }
        };

        // Attach listeners to window for global coverage
        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        document.body.addEventListener('mouseleave', handleMouseLeave);
        document.body.addEventListener('mouseenter', handleMouseEnter);

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, []); // Empty dependency array - runs once on mount

    // Effect to handle hover state visual changes
    useEffect(() => {
        const follower = followerRef.current;
        const cursor = cursorRef.current;

        if (!follower || !cursor) return;

        if (isHovering) {
            // Hover State: Expanded ring, hidden dot
            gsap.to(follower, {
                width: 50,
                height: 50,
                backgroundColor: 'rgba(48, 255, 103, 0.1)',
                borderColor: 'rgba(48, 255, 103, 0.8)',
                borderWidth: '1px',
                duration: 0.3
            });
            gsap.to(cursor, {
                opacity: 0,
                duration: 0.3
            });
        } else {
            // Normal State: Small ring, visible dot
            gsap.to(follower, {
                width: 24,
                height: 24,
                backgroundColor: 'transparent',
                borderColor: 'rgba(48, 255, 103, 0.5)',
                borderWidth: '2px',
                duration: 0.3
            });
            // Only restore opacity if we have moved at least once
            if (hasMoved.current) {
                gsap.to(cursor, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.3
                });
            }
        }
    }, [isHovering]);

    return (
        <>
            {/* Main Pointer Dot */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-2 h-2 bg-[rgb(48,255,103)] rounded-full pointer-events-none z-[9999]"
                style={{
                    boxShadow: '0 0 10px rgb(48, 255, 103), 0 0 20px rgb(48, 255, 103)',
                    mixBlendMode: 'difference',
                    opacity: 0 // Start hidden
                }}
            />
            {/* Follower Ring */}
            <div
                ref={followerRef}
                className="fixed top-0 left-0 border border-[rgb(48,255,103)] rounded-full pointer-events-none z-[9998]"
                style={{
                    boxShadow: '0 0 15px rgba(48, 255, 103, 0.2)',
                    mixBlendMode: 'difference',
                    opacity: 0 // Start hidden
                }}
            />
        </>
    );
};

export default Cursor;
