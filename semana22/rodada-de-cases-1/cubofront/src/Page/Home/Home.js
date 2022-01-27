import  Header  from "../../components/Header/Header"
import  TableData  from "../../components/TableData/TableData"
import  TitleData  from "../../components/TitleData/TitleData"
import { SectionData } from "./styled"
import { ChartPieData } from "../../components/ChartPieData/ChartPieData"


const Home = () => {
    return <div>
            <Header/>
        <TitleData/>
        <SectionData>
            <TableData/>
            <ChartPieData/>
        </SectionData>
        </div>
    
}
export default Home