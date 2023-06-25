import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const HeatMap = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const options = {
            plotOptions: {
                heatmap: {
                    colorScale: {
                        ranges: [
                            {
                                from: -30,
                                to: 5,
                                color: '#00A100',
                                name: 'low',
                            },
                            {
                                from: 6,
                                to: 20,
                                color: '#128FD9',
                                name: 'medium',
                            },
                            {
                                from: 21,
                                to: 45,
                                color: '#FFB200',
                                name: 'high',
                            },
                        ],
                    },
                },
            },
        };

        const chart = new ApexCharts(chartRef.current, options);
        chart.render();

        // 在组件销毁时销毁图表实例
        return () => {
            chart.destroy();
        };
    }, []);

    return <div id="chart" ref={chartRef}></div>;
};

export default HeatMap;
