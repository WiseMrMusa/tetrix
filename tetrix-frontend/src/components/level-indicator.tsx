import { useTetrisContext } from "@/context/TetrisContext";
import { useEffect, useState } from "react";

export const LevelIndicator = () => {
    const { score } = useTetrisContext();
    const [level, setLevel] = useState('Easy');
    const [rotation, setRotation] = useState(-90);
    const [firstPathFill, setFirstPathFill] = useState('fill-[#292929]');
    const [secondPathFill, setSecondPathFill] = useState('fill-[#292929]');

    useEffect(() => {
        if (score >= 20) {
            setLevel('Difficult');
            setRotation(90);
            setFirstPathFill('fill-orange-500');
            setSecondPathFill('fill-red-500');
        } else if (score >= 10) {
            setLevel('Medium');
            setRotation(0);
            setFirstPathFill('fill-orange-500');
            setSecondPathFill('fill-[#292929]');
        } else {
            setLevel('Easy');
            setRotation(-90);
            setFirstPathFill('fill-[#292929]');
            setSecondPathFill('fill-[#292929]');
        }
    }, [score]);

    return (
        <div className="bg-[#1D1D1D] rounded-[13.183px] p-5 border-[0.412px] border-[#3A3A3A]">
            <p className="uppercase text-center text-white font-medium text-xs">level: {level}</p>
            <div className="relative mt-5">
                <svg className="w-[109.133px] h-[54.582px] mx-auto" viewBox="0 0 266 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M133 26.4429C106.015 26.4429 81.3646 36.438 62.5488 52.928C60.9222 54.3536 58.4592 54.3231 56.9297 52.7937L44.497 40.361C42.9084 38.7724 42.9355 36.1826 44.6086 34.6832C68.0564 13.6696 99.0358 0.889526 133 0.889526C166.372 0.889526 196.862 13.2277 220.158 33.5912C221.863 35.0822 221.907 37.6983 220.305 39.3002L207.858 51.7466C206.345 53.2597 203.914 53.3077 202.285 51.9205C183.622 36.0317 159.431 26.4429 133 26.4429Z" className={`${firstPathFill} transition-all duration-200 ease-linear`}></path>
                    <path d="M213.587 57.3107C212.058 58.8401 212.027 61.3031 213.453 62.9298C229.289 80.9988 239.134 104.449 239.891 130.179C239.943 131.943 241.368 133.381 243.132 133.381H262.297C264.061 133.381 265.495 131.941 265.453 130.177C264.677 97.4705 252.049 67.698 231.698 44.9895C230.198 43.3164 227.609 43.2893 226.02 44.878L213.587 57.3107Z" className={`${secondPathFill} transition-all duration-200 ease-linear`}></path>
                    <path d="M33.2103 46.2233C34.7013 44.5176 37.3174 44.4744 38.9193 46.0764L51.3657 58.5227C52.8788 60.0359 52.9268 62.4668 51.5396 64.0961C36.2947 82.0026 26.8495 104.999 26.1092 130.179C26.0573 131.943 24.6321 133.381 22.868 133.381H3.70298C1.93889 133.381 0.504941 131.941 0.546792 130.177C1.30896 98.0595 13.5004 68.7713 33.2103 46.2233Z" fill="#00ED47"></path>
                </svg>
                <svg viewBox="0 0 46 63" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -bottom-1 left-1/2 w-[18.302px] h-[25.7px]" style={{ transform: `translateX(-50%) rotate(${rotation}deg)` }}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M41.5123 27.8941L26.6753 2.20093C25.0371 -0.625571 20.9543 -0.625571 19.3246 2.20093L4.48763 27.8941C2.14494 31.4081 0.786865 35.6267 0.786865 40.1677C0.786865 52.4329 10.7263 62.3808 23 62.3808C35.2736 62.3808 45.213 52.4329 45.213 40.1677C45.213 35.6267 43.855 31.4081 41.5123 27.8941ZM23 49.4366C17.8817 49.4366 13.7311 45.286 13.7311 40.1677C13.7311 35.0495 17.8817 30.8988 23 30.8988C28.1182 30.8988 32.2688 35.0495 32.2688 40.1677C32.2688 45.286 28.1182 49.4366 23 49.4366Z" fill="#929292"></path>
                </svg>
            </div>
        </div>
    )
}