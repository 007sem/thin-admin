import { HomeOutlined, UserOutlined } from "@ant-design/icons";

import LayOut from "@/components/Layout/LayOut";

import Home from "@/views/Home";
import Login from "@/views/Login";
import Charts from "@/views/Charts";
import NotFound from "@/views/NotFound";

import ManegeGoods from "@/views/manege/ManegeGoods";
import ManegeUsers from "@/views/manege/ManegeUsers";

import { RouteType } from "./type";


export const routes: RouteType[] = [
	{
		path: "login",
		name: "登录",
		element: <Login />,
	},
	{
		path: "/",
		element: <LayOut />,
		children: [
			{
				index: "true",
				path: "/",
				name: "首页",
				icon: <HomeOutlined />,
				element: <Home />,
			},
			{
				path: "charts",
				name: "图表",
				element: <Charts />,
			},
			{
				path: "manege",
				name: "管理",
				icon: <UserOutlined />,
				type: "sub",
				children: [
					{
						path: "manege_goods",
						name: "商品管理",
						element: <ManegeGoods />,
					},
					{
						path: "manege_users",
						name: "用户管理",
						element: <ManegeUsers />,
					},
				],
			},
		],
	},
	{
		path: "*",
		name: "404",
		element: <NotFound />,
	},
];
// 将路由扁平化
const flatRoutes = (routes: RouteType[]) => {
	let res: RouteType[] = []
	routes.forEach(item => {
		res.push(item)
		if (item.children && item.children.length > 0) {
			res.push(...flatRoutes(item.children))
		}
	})

	return res
}

export const flatRoutesList = flatRoutes(routes)

