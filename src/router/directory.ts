// import { ReactComponentElement } from 'react'

// const Overview = () => import('../views/overview')
// const AntdSelect = () => import('../views/components/antdSelect')

import AntdSelect from '../views/components/antdSelect'
import Overview from '../views/overview'
export interface Route {
  icon?: string
  name: string
  path?: string
  component?: any
  children?: Route[]
}
export const directory: Route[] = [
  {
    icon: 'bars',
    name: 'overview',
    path: '/overview',
    component: Overview,
  },
  {
    icon: 'project',
    name: 'components',
    children: [
      {
        component: AntdSelect,
        name: 'AntdSelect',
        path: '/components/AntdSelect',
      },
    ],
  },
]
