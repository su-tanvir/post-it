import { FC, Fragment, ReactNode } from 'react'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

interface LayoutProps {
  children?: ReactNode
}

const Layout: FC<LayoutProps> = (props) => {
  return (
    <Fragment>
      <Header />
      <Main {...props} />
      <Footer />
    </Fragment>
  )
}

export default Layout
