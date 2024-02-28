import React, { useRef } from "react";

export const TopScroll = () => {
    const divRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        window.scrollTo({
            top: divRef.current!.offsetTop,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <div ref={divRef}>
            
                {[...Array(25)].map((_, index) => (
                    <p key={index}>
                       Tempor consequat nisi anim ut ut ut ad qui en. Aliqua officia amet consequat Lorem ad anim fugiat fugiat quis. Laborum id occaecat Lorem anim aliqua voluptate ut sit nisi consequat ut laborum. Eu nisi eiusmod aliquip et eu sunt cillum nostrud culpa ea aliqua. Irure est aute labore labore quis exercitation voluptate adipisicing et adipisicing sunt.
                    </p>
                ))}
            </div>

            <br />
            <hr />
            <br />

            <button onClick={handleScroll}>Scroll to top</button>

            <br />
            <br />
        </>
    )
}
