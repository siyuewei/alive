import SmallChartCard from "../Component/ChartCard/ChartCard";
import ChartType from "../util/Constant"


const HomeView = () => {
    const data =  [30, 40, 35, 50, 49, 60, 70, 91, 125];
    const categries = [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998];
    const heatmap_example = [[0, 0, 35, 50, 49, 60, 91],
        [ 40, 32,49, 60, 70, 91, 95],
        [30, 40, 50, 49, 60, 9, 85],
        [30, 40, 50, 90, 70, 27, 65],
        [30, 45, 50, 70,80,0,0],
        [0, 0, 0, 0, 0,0,0,0],];
    return (
        <div style={{ display: "flex",justifyContent:"center", alignItems: "center" }}>
            <SmallChartCard data={data} categries={categries} title={'心率 109次/分'} subtitle={'心跳在加速'} chartType={ChartType.LINE}/>
            <SmallChartCard data={heatmap_example} categries={null} title={'6月锻炼记录'} subtitle={'好得很'} chartType={ChartType.HEAT}/>
        </div>
        );
}
export default HomeView;