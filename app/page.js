"use client"
import {useRouter} from "next/navigation";
import {useEffect, useRef} from "react";
import Typed from "typed.js";

export default function Home() {
    const imgArr = [
        "https://upload.wikimedia.org/wikipedia/commons/c/c2/Mtl_from_mont_royal_%28cropped%29.jpg",
        'https://d37rmf1ynyg9aw.cloudfront.net/fit-in/1280x1280/data/v4/destinations/21210040-48b5-48b4-984d-21c9ac82d680/resources/23861.jpg'
    ]

    const router = useRouter()
    const handleRedirect = (path) => {
        router.push(path)
    }

    const el = useRef(null)

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Welcome to Dempsey and Mavis Travel Manager', 'We are going to visit Montreal', 'We are going to visit Quebec', 'We are going to experience via Train', 'We are going to experience bus', 'We are going to fly back', 'Have fun!!'],
            typeSpeed:15,
            backSpeed:15,
            startDelay:1000,
            smartBackspace:true,
            loop:true
        })

        return  ()=> {
            typed.destroy()
        }
    }, []);

    return (
        <div>

            <div ref={el} className='text-center text-2xl text-yellow-500 '></div>
            <div className='relative flex justify-center items-center mt-15 w-full gap-20 h-3/4 mx-4'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Mtl_from_mont_royal_%28cropped%29.jpg" alt="montreal" className='rounded-full w-1/2 h-3/5 animate-pulse sm:h-auto sm:w-1/3 cursor-pointer hover:scale-110 transition-all' onClick={()=>handleRedirect('/places/montreal')}/>
                <img
                    onClick={()=>handleRedirect('/places/quebec')}
                    src='https://d37rmf1ynyg9aw.cloudfront.net/fit-in/1280x1280/data/v4/destinations/21210040-48b5-48b4-984d-21c9ac82d680/resources/23861.jpg'
                    alt='quebec' className='rounded-full w-1/2 h-3/5 animate-pulse  sm:h-auto sm:w-1/3 cursor-pointer hover:scale-110 transition-all'/>
            </div>
        </div>
    );
}
