import Image from "next/image";

export default function Home() {
    return (
        <div>

            <div className='text-center text-2xl animate-bounce '>Welcome to Dempsey and Mavis Travel Manager</div>
            <div className='relative flex justify-center items-center mt-20 w-full gap-20 '>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Mtl_from_mont_royal_%28cropped%29.jpg" alt="montreal" className='rounded-full w-1/3 h-auto animate-pulse'/>
                <img
                    src='https://d37rmf1ynyg9aw.cloudfront.net/fit-in/1280x1280/data/v4/destinations/21210040-48b5-48b4-984d-21c9ac82d680/resources/23861.jpg'
                    alt='quebec' className='rounded-full w-1/3 h-auto animate-bounce'/>
            </div>
        </div>
    );
}
