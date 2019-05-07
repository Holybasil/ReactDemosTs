import { Icon, Layout } from 'antd'
import React from 'react'
import HolyBreadcrumb from '../../../components/breadcrumb'
const { Header } = Layout

// type toggle = () => void

interface Prop {
  collapsed: boolean
  toggle: () => void
}
class Navbar extends React.Component<Prop, {}> {
  constructor(props: Prop) {
    super(props)
  }
  public toggle = () => {
    this.props.toggle()
  }
  public render() {
    return (
      <Header style={{ background: '#fff', paddingLeft: 16 }}>
        <Icon
          className="trigger"
          type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        />
        <HolyBreadcrumb />
      </Header>
    )
  }
}
export default Navbar
