import Card from "@/components/Card";
import Chart from "react-apexcharts";
import icon_rise from "@/assets/svg/icon_rise.svg";
import icon_down from "@/assets/svg/icon_down.svg";

import type { Props as ApexChartProps } from "react-apexcharts";

interface TotalCardProps {
	data: {
		text: string;
		count: string | number;
		chartsData: number[];
		percent: string;
	};
}

function getIsRise(percent: string) {
	// 获取percent字符串第一项  如果是 "+" 返回true
	return percent.charAt(0) === "+";
}

function TotalCard({ data }: TotalCardProps) {
	let series = [
		{
			name: "",
			data: data.chartsData,
		},
	];

	let options = {
		chart: {
			type: "line",
			width: 120,
			height: 40,

			sparkline: {
				enabled: true,
			},
		},
		stroke: {
			curve: "smooth",
			width: 2,
		},
		tooltip: {
			// enabled:false,
			fixed: {
				enabled: false,
			},
			x: {
				show: false,
			},
			marker: {
				show: false,
			},
			onDatasetHover: {
				highlightDataSeries: false,
			},
		},
		xaxis: {
			labels: {
				show: false,
				showDuplicates: false,
			},
			tooltip: {
				enabled: false,
			},
			crosshairs: {
				show: false,
			},
		},
		dataLabels: {
			show: false,
		},
	} as ApexChartProps;

	const icon = getIsRise(data.percent) ? icon_rise : icon_down;

	return (
		<Card
			style={{
				border: "1px solid #ccc",
				padding: "2rem",
				display: "flex",
				alignItems: "center",
			}}
		>
			<div className="text" style={{ width: "100%" }}>
				<div className="title">{data.text}</div>
				<div className="up_or_down">
					<img src={icon} alt="" /> {data.percent}
				</div>
				<div
					className="count"
					style={{ fontSize: "2rem", fontWeight: "bold" }}
				>
					{data.count}
				</div>
			</div>
			<Chart
				className="charts"
				options={options}
				series={series}
				type="line"
			/>
		</Card>
	);
}

export default TotalCard;
