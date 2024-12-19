import {People} from "@/app/_components/People";
import {PageLayout} from "@/app/_components/PageLayout";
import {TitleSection} from "@/app/_components/TitleSection";


export const metadata = {
    title: 'Montreal page',
    description: 'Montreal page'
}
const Page = () => {
    return <PageLayout>
        <TitleSection>
            Montreal</TitleSection>

        <div className='mx-auto text-center my-4'>
            <span className='text-yellow-500 text-xl'>Wednesday, Dec 25</span>
            <People name='圣母教堂' section='hotel'
                    mtq='/tickets/mtl-church.pdf' qtm='Basilique Notre-Dame de Montréal.
110 Rue Notre-Dame Ouest, Montréal'
            />
            <span className='text-yellow-500 text-xl mt-10'>Wednesday, Dec 25</span>
            <People name='摩天轮1' section='hotel'
                    mtq='/tickets/wheel/Billet1.pdf' qtm='362 de la Commune Street East, Montreal'
            />
            <People name='摩天轮2' section='hotel'
                    mtq='/tickets/wheel/Billet2.pdf' qtm='362 de la Commune Street East, Montreal'
            />
            <span className='text-yellow-500 text-xl mt-10'>Thursday, Dec 26</span>
            <People name='美术馆, Jean-Noël Desmarais Pavilion' section='hotel'
                    mtq='/tickets/commande.PDF' qtm='1380 Sherbrooke St W, Montreal, Quebec H3G 1J5'
            />
            <span className='text-yellow-500 text-xl mt-10'>Thursday, Dec 26 @ 4:30pm</span>
            <People name='生物圈' section='hotel'
                    mtq='/tickets/shengwuquan.pdf' qtm='4777, avenue Pierre-De Coubertin
Montréal, QC H1V 1B3'
            />
        </div>

    </PageLayout>


}

export default Page