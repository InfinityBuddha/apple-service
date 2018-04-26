import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

import s from './App.module.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    {/* <Helmet
      title="Repair Box"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    /> */}
    <div className={s.App}>
        <Header />
        {children()}
        <Footer />
    </div>


    </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
