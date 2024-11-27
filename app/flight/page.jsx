import {People} from "@/app/_components/People";
import {PageLayout} from "@/app/_components/PageLayout";


export const metadata = {
    title: 'Flight page',
    description: 'bus page'
}
const Page = () => {
    return <>
        <h1 className='text-center text-2xl underline'>Flight</h1>
        <PageLayout>

            <People name='Confirmation' section='flight' mtq='/flight/flight1.pdf'
                  />
            <People name='Expedia Confirmation' section='flight' mtq='/flight/flight-expedia.pdf'
                    qtm='/bus/Quebec-Montreal/Q-M-Shengge.pdf'/>
        </PageLayout>
    </>


}

export default Page