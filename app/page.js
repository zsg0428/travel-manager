

export default function Home() {
    const imgArr = [
        "https://upload.wikimedia.org/wikipedia/commons/c/c2/Mtl_from_mont_royal_%28cropped%29.jpg",
        'https://d37rmf1ynyg9aw.cloudfront.net/fit-in/1280x1280/data/v4/destinations/21210040-48b5-48b4-984d-21c9ac82d680/resources/23861.jpg'
    ]
    return (
        <div>

            <div className='text-center text-2xl '>Welcome to Dempsey and Mavis Travel Manager</div>
            <div className='relative flex justify-center items-center mt-20 w-full gap-20 h-3/4 mx-4'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Mtl_from_mont_royal_%28cropped%29.jpg" alt="montreal" className='rounded-full w-1/2 h-3/5 animate-pulse sm:h-auto sm:w-1/3'/>
                <img
                    src='https://d37rmf1ynyg9aw.cloudfront.net/fit-in/1280x1280/data/v4/destinations/21210040-48b5-48b4-984d-21c9ac82d680/resources/23861.jpg'
                    alt='quebec' className='rounded-full w-1/2 h-3/5 animate-pulse  sm:h-auto sm:w-1/3'/>
            </div>
        </div>
    );
}
