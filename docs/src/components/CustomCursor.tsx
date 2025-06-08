import { useState, useEffect } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    // Dynamic hover detection
    const checkHover = () => {
      const elementUnderMouse = document.elementFromPoint(position.x, position.y);
      if (elementUnderMouse) {
        const isInteractive = elementUnderMouse.closest("button, a, input, textarea, select, [role='button'], .cursor-hover");
        setIsHovering(!!isInteractive);
      }
    };

    const interval = setInterval(checkHover, 50);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      clearInterval(interval);
    };
  }, [position.x, position.y]);

  return (
    <div
      className={`custom-cursor ${isHovering ? "hover" : ""} ${
        isClicked ? "clicked" : ""
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}