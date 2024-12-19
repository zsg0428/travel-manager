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
            <span className='text-yellow-500 text-xl mt-10'>Wednesday, Dec 25</span>
            <People name='摩天轮1' section='hotel'
                    mtq='/tickets/wheel/Billet1.pdf' qtm='362 de la Commune Street East, Montreal'
            />
            <People name='摩天轮2' section='hotel'
                    mtq='/tickets/wheel/Billet2.pdf' qtm='362 de la Commune Street East, Montreal'
            />
            <span className='text-yellow-500 text-xl mt-10'>Wednesday, Dec 26</span>
            <People name='美术馆, Jean-Noël Desmarais Pavilion' section='hotel'
                    mtq='/tickets/commande.PDF' qtm='1380 Sherbrooke St W, Montreal, Quebec H3G 1J5'
            />
        </div>

    </PageLayout>


}

export default Page