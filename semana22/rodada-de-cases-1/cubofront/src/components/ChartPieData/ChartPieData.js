import React, { useContext } from "react"
import { Chart } from "react-google-charts"
import { GlobalContext } from "../../contexts/Global/GlobalContext"
import { ContainerChartPieDate, ItemLegend, Legend } from "./styled";

const colors = [
    "#ED9121",	
    "#F400A1",	
    "#00FFFF",
    "#00A86B",
    "#8EE53F",
    "#008000",
    "#248EFF",		
    "#0000DD",
    "#DE3163",
	"#8A2BE2",
    "#F4C430",
    "#D2691E",	
    	
]

const options = {
    pieHole: 0.4,
    is3D: false,
    legend: "none",
    colors
}

export const ChartPieData = () => {
    const { states } = useContext(GlobalContext)

    const dataUsers = states.users.map((user) => {
        return [`${user.firstName} ${user.lastName}`, user.participation]
    })
    
    const totalParticipation = states.users.reduce((total, user)=>{
        return total + user.participation
    }, 0)

    return ( <ContainerChartPieDate>
        <Chart
            chartType="PieChart"
            width="300px"
            height="300px"
            data={[
                ["Name", "Participation"],
                ...dataUsers,
                ["Ownerless", 100 - totalParticipation]
            ]}
            options={options}
        />
        <Legend>
            {
                states.users.map((user, index) => {
                    const indexColor = index % colors.length
                    return <ItemLegend color={colors[indexColor]}>
                        <div></div>
                        <p>{`${user.firstName} ${user.lastName}`}</p>
                    </ItemLegend>
                })}
            <ItemLegend color={colors[states.users.length % (colors.length)]}>
                <div></div>
                <p>Ownerles</p>
            </ItemLegend>
        </Legend>
    </ContainerChartPieDate>
    )
        
}