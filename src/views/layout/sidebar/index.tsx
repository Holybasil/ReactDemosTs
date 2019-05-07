import { Icon, Layout, Menu } from 'antd'
import React from 'react'
const { Sider } = Layout
import { Link } from 'react-router-dom'
import { directory, Route } from '../../../router/directory'
import './index.scss'
const SubMenu = Menu.SubMenu
// const MenuItemGroup = Menu.ItemGroup
// interface Location {
//   pathname: string
// }
interface Prop {
  collapsed: boolean
  // location: Location
}

class Sidebar extends React.Component<Prop, {}> {
  constructor(props: Prop) {
    super(props)
  }
  public getMenuItem(data: Route[]) {
    return data.map((item: Route) => {
      if (item.children) {
        return (
          <SubMenu
            key={item.name}
            title={
              <span>
                <Icon type={item.icon} />
                <span>{item.name}</span>
              </span>
            }
          >
            {item.children.map((child: Route) => (
              <Menu.Item key={child.name}>
                <Link to={child.path ? child.path : '/'}>{child.name}</Link>
              </Menu.Item>
            ))}
          </SubMenu>
        )
      } else {
        return (
          <Menu.Item key={item.name}>
            <Icon type={item.icon} />
            <Link to={item.path ? item.path : '/'}>{item.name}</Link>
          </Menu.Item>
        )
      }
    })
  }
  public render() {
    return (
      <Sider
        trigger={null}
        collapsible={true}
        collapsed={this.props.collapsed}
        theme="light"
        style={{ backgroundColor: '#ffdead' }}
      >
        {/* TODO: 通过路由拿到当前的路由信息 */}
        <Menu
          mode="inline"
          defaultOpenKeys={[window.location.pathname.split('/')[1]]}
          defaultSelectedKeys={[
            window.location.pathname.split('/')[3] || window.location.pathname.split('/')[1],
          ]}
        >
          {this.getMenuItem(directory)}
        </Menu>
      </Sider>
    )
  }
}
export default Sidebar
