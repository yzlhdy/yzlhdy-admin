interface ChildrenData {
  key: string;
  title: string;
  icon: string;
}

export interface RouterDatas {
  key: string;
  title: string;
  icon: string;
  children?: ChildrenData[]
}

const menuList: RouterDatas[] = [
  {
    key: '/home',
    title: '首页',
    icon: 'home'
  },
  {
    key: '/article',
    title: '文章管理',
    icon: 'article',
    children: [
      {
        key: '/article-list',
        title: '文章列表',
        icon: 'bars'
      },
      {
        key: '/article-add',
        title: '新增文章',
        icon: 'tool'
      }
    ]
  },


  {
    title: '图形图表',
    key: '/charts',
    icon: 'area-chart',
    children: [
      {
        title: '柱形图',
        key: '/charts/bar',
        icon: 'bar-chart'
      },
      {
        title: '折线图',
        key: '/charts/line',
        icon: 'line-chart'
      },
      {
        title: '饼图',
        key: '/charts/pie',
        icon: 'pie-chart'
      },
    ]
  },


]
export default menuList