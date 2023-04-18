import React from 'react'
import CategoryHeader from 'src/component/CategoryHeader'
import Header from 'src/component/Header'
import MainPage from './MainPage'
import Footer from 'src/component/Footer'
import Modal from 'src/component/Modal/Modal'

const MainPage2 = () => {

  return (
    <React.Fragment>
        <Header />
        <CategoryHeader />
        <MainPage />
        <Footer>footer</Footer>
        <Modal />

    </React.Fragment>
  )
}

export default MainPage2