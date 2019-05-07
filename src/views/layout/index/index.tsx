import { Layout } from 'antd'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { directory } from '../../../router/directory'
import Navbar from '../navbar'
import Sidebar from '../sidebar'

const { Content } = Layout

const routeArr: any[] = []

interface State {
  collapsed: boolean
}
class App extends React.Component<{}, State> {
  public state = { collapsed: false }
  // constructor(state: State) {
  //   super(state)
  //   this.state = {}
  // }

  public toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  // TODO: 路由懒加载配置
  public getRoute = (data: any[]) => {
    data.forEach(item => {
      if (!item.children) {
        routeArr.push(<Route path={item.path} key={item.name} component={item.component} />)
      } else {
        this.getRoute(item.children)
      }
    })
    return routeArr
  }
  public render() {
    return (
      // <div>
      <Router>
        <Layout style={{ height: '100%', width: '100%' }}>
          <Sidebar collapsed={this.state.collapsed} />
          <Layout>
            <Navbar collapsed={this.state.collapsed} toggle={this.toggle} />
            <Content
              style={{
                background: '#fff',
                margin: '24px 16px',
                padding: 16,
              }}
            >
              <Switch>{this.getRoute(directory)}</Switch>
            </Content>
          </Layout>
        </Layout>
      </Router>
      // </div>
    )
  }
}

export default App
