import {Grid2} from "@mui/material";
import Link from "next/link";

export const People = ({name, section, mtq, qtm}) => {

    // Bus section
    if (section === 'bus') {
        return <Grid2  item size={{sm: 12, md: 6, lg: 6}}
                      className='text-center flex flex-col gap-4 justify-center items-center mx-auto'>
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
            <div className='flex flex-col gap-4 '>
                <p><strong className='text-yellow-500'> Montreal address:</strong> Montréal (centre-ville) Gare
                    d&apos;autocars de Montréal 1717, Rue Berri, H2L 4E9</p>
                <p><strong className='text-yellow-500'> Montreal Depature Time:</strong>Dec 27th, 12:00 pm</p>
            </div>
            <div className='flex flex-col gap-4 '>
                <p><strong className='text-blue-400'> Quebec address:</strong> Québec (centre-ville)Terminus d&apos;autobus de la Gare du Palais 320, Rue Abraham-Martin, G1K 8N2</p>
                <p><strong className='text-blue-400'> Quebec Depature Time:</strong> Dec 29th, 12:30 pm</p>
            </div>
        </Grid2>
    }

    if (section === 'hotel') {
        return <Grid2 item size={{sm: 12, md: 6, lg: 6}} className='text-center mx-auto my-3'>
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
        return <Grid2 item size={{sm: 12, md: 6, lg: 6}} className='text-center mx-auto'>
            <p className={name === 'Mavis' ? 'text-pink-400 text-xl' : 'text-blue-400 text-xl'}>{name}:</p>
            <div className='flex gap-4  h-auto mx-auto justify-center mt-4'>
                <Link
                    href={mtq}
                    rel="noreferrer"
                    target="_blank"
                    className=' p-3 bg-yellow-500 rounded-md text-black'>
                    Toronto to Montreal
                </Link>

            </div>
        </Grid2>
    }


    if (section ==='flight') {
        return <Grid2 item size={{sm: 12, md: 6, lg: 6}} className='text-center mx-auto'>
            <p className={name === 'Mavis' ? 'text-pink-400 text-xl' : 'text-blue-400 text-xl'}>{name}:</p>
            <div className='flex gap-4  h-auto mx-auto justify-center mt-4'>
                <Link
                    href={mtq}
                    rel="noreferrer"
                    target="_blank"
                    className=' p-3 bg-yellow-500 rounded-md text-black'>
                    Montreal to Toronto
                </Link>



            </div>
        </Grid2>
    }
}