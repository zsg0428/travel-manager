import {People} from "@/app/_components/People";
import {PageLayout} from "@/app/_components/PageLayout";
import {TitleSection} from "@/app/_components/TitleSection";


export const metadata = {
    title: 'Quebec page',
    description: 'Quebec page'
}
const Page = () => {
    return <PageLayout>
        <TitleSection>
            Quebec</TitleSection>

        <div className='mx-auto text-center my-4'>
            <span className='text-yellow-500 text-xl'>Saturday, Dec 28</span>
            <People name='瀑布，Parc de la Chute-Montmorency' section='hotel'
                    mtq='/tickets/fall.pdf' qtm='5300 Sainte-Anne Blvd.
Québec City (Québec) G1C 0M3'
            />
        </div>
        <div className='mx-auto text-center my-4'>
            <span className='text-yellow-500 text-xl'>Saturday, Dec 28</span>
            <div>晚餐:7pm at Maison Livernois</div>
            <div><span className='text-yellow-500'> Address</span> : 1200 Rue Saint-Jean, Québec, QC G1R 1S8</div>
        </div>
    </PageLayout>


}

export default Page