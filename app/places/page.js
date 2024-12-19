import {People} from "@/app/_components/People";
import {PageLayout} from "@/app/_components/PageLayout";
import {TitleSection} from "@/app/_components/TitleSection";
import Link from "next/link";


export const metadata = {
    title: 'Places page',
    description: 'Place page'
}
const Page = () => {
    return <PageLayout>
        <TitleSection>
            Places</TitleSection>
<div className='flex gap-8 justify-center items-center mx-auto'>

        <Link className='border-amber-300 border-2 p-7 text-xl hover:scale-125 transition-all ' href='/places/montreal'>Montreal</Link>
        <Link className='border-amber-300 border-2 p-7 text-xl hover:scale-125 transition-all' href='/places/quebec'>Quebec</Link>
</div>

    </PageLayout>


}

export default Page