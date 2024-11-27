import {People} from "@/app/_components/People";
import {PageLayout} from "@/app/_components/PageLayout";


export const metadata = {
    title: 'Bus page',
    description: 'bus page'
}
const Page = () => {
    return <>
        <h1 className='text-center text-2xl underline'>Bus</h1>
        <PageLayout>

            <People name='Mavis' section='bus' mtq='/bus/Montreal-Quebec/M-Q-Minxian.pdf'
                    qtm='/bus/Quebec-Montreal/Q-M-Minxian.pdf'/>
            <People name='Dempsey' section='bus' mtq='/bus/Montreal-Quebec/M-Q-Shengge.pdf'
                    qtm='/bus/Quebec-Montreal/Q-M-Shengge.pdf'/>
        </PageLayout>
    </>


}

export default Page