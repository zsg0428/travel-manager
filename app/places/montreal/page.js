import {People} from "@/app/_components/People";
import {PageLayout} from "@/app/_components/PageLayout";
import {TitleSection} from "@/app/_components/TitleSection";


export const metadata = {
    title: 'Places page',
    description: 'Place page'
}
const Page = () => {
    return <PageLayout>
        <TitleSection>
            Places</TitleSection>

        <div className='mx-auto text-center my-4'>
            <span className='text-yellow-500 text-xl'>Wednesday, Dec 25</span>
            <People name='圣母教堂' section='hotel'
                    mtq='/tickets/mtl-church.pdf' qtm='Basilique Notre-Dame de Montréal.
110 Rue Notre-Dame Ouest, Montréal'
            />
        </div>
    </PageLayout>


}

export default Page