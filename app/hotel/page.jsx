import {People} from "@/app/_components/People";
import {PageLayout} from "@/app/_components/PageLayout";


export const metadata = {
    title: 'Hotel page',
    description: 'Hotel page'
}
const Page = () => {
    return <>
        <h1 className='text-center text-2xl underline'>Hotel</h1>
        <PageLayout>

            <div>
                <p>Check in time: <span className='text-yellow-500 text-xl'>Tuesday, Dec 24, @ 3PM</span></p>
                <p>Check out time: <span className='text-yellow-500 text-xl'>Friday, Dec 27, @ 12PM</span></p>
                <People name='Travelodge Hotel by Wyndham Montreal Centre' section='hotel'
                        mtq='/hotel/montreal-hotel.pdf' qtm='50 René-Lévesque St. West, Montreal, QC, H2Z 1A2 Canada'
                />
            </div>
            <div>
                <p>Check in time: <span className='text-yellow-500 text-xl'>Tuesday, Dec 27, @ 4PM</span></p>
                <p>Check out time: <span className='text-yellow-500 text-xl'>Friday, Dec 29, @ 11AM</span></p>
                <People name='Manoir Sur le Cap' section='hotel' mtq='/hotel/quebec.pdf' qtm='9 Avenue Sainte-Genevieve, G1R 4A7 Quebec
City, Canada'
                />
            </div>
        </PageLayout>
    </>


}

export default Page