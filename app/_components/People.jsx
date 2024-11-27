import {Grid2} from "@mui/material";
import Link from "next/link";

export const People = ({name, section, mtq, qtm}) => {

    // Bus section
    if (section === 'bus') {
        return <Grid2 item size={{sm: 12, md: 6, lg: 6}} className='text-center'>
            <p className={name === 'Mavis' ? 'text-pink-400 text-xl' : 'text-blue-400 text-xl'}>{name}:</p>
            <div className='flex gap-4  h-auto mx-auto justify-center mt-4'>
                <Link
                    href={mtq}
                    rel="noreferrer"
                    target="_blank"
                    className=' p-3 bg-yellow-500 rounded-md text-black'>
                    Montreal to Quebec
                </Link>
                <Link
                    href={qtm}
                    rel="noreferrer"
                    target="_blank"
                    className='rounded-md bg-yellow-500 p-3 text-black '>
                    Quebec to Montreal
                </Link>


            </div>
        </Grid2>
    }

    if (section === 'hotel') {
        return <Grid2 item size={{sm: 12, md: 6, lg: 6}} className='text-center'>
            <p className={name === 'Mavis' ? 'text-pink-400 text-xl' : 'text-blue-400 text-xl'}>{name}:</p>
            <div className='flex gap-4  h-auto mx-auto justify-center mt-4 items-center'>
                <Link
                    href={mtq}
                    rel="noreferrer"
                    target="_blank"
                    className=' p-3 bg-yellow-500 rounded-md text-black'>
                    {name}
                </Link>
                <p> {qtm}
                </p>

            </div>
        </Grid2>
    }

    if (section ==='train') {
        return <Grid2 item size={{sm: 12, md: 6, lg: 6}} className='text-center'>
            <p className={name === 'Mavis' ? 'text-pink-400 text-xl' : 'text-blue-400 text-xl'}>{name}:</p>
            <div className='flex gap-4  h-auto mx-auto justify-center mt-4'>
                <Link
                    href={mtq}
                    rel="noreferrer"
                    target="_blank"
                    className=' p-3 bg-yellow-500 rounded-md text-black'>
                    Montreal to Quebec
                </Link>



            </div>
        </Grid2>
    }


    if (section ==='flight') {
        return <Grid2 item size={{sm: 12, md: 6, lg: 6}} className='text-center'>
            <p className={name === 'Mavis' ? 'text-pink-400 text-xl' : 'text-blue-400 text-xl'}>{name}:</p>
            <div className='flex gap-4  h-auto mx-auto justify-center mt-4'>
                <Link
                    href={mtq}
                    rel="noreferrer"
                    target="_blank"
                    className=' p-3 bg-yellow-500 rounded-md text-black'>
                    Montreal to Quebec
                </Link>



            </div>
        </Grid2>
    }
}