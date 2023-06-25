import SmallChartCard from "../Component/ChartCard/ChartCard";
import ChartType from "../util/Constant"
const HomeView = () => {
    const data =  [30, 40, 35, 50, 49, 60, 70, 91, 125];
    const categries = [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998];
    return (
        <div style={{ display: "flex",justifyContent:"center", alignItems: "center" }}>
            <SmallChartCard data={data} categries={categries} title={'心率 109次/分'} subtitle={'心跳在加速'} chartType={ChartType.LINE}/>
        </div>
        );
}
export default HomeView;