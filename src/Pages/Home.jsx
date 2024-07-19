import React,{useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import AddVideo from '../Components/AddVideo'
import Videolist from '../Components/Videolist'
import Category from '../Components/Category'
import { Link } from 'react-router-dom'


function Home() {
  const [addResponse,setAddResponse]=useState("")

  return (
    <>
      <div className='container-fluid bg-light p-3'>
        <div className='d-flex justify-content-between'>
          <h1 className='text-info'>All Videos</h1>
          <Link className='btn btn-link' to={'/his'}>Watch History</Link>
        </div>
        <Row>
          <Col sm={12} md={1}>
            <AddVideo setadd={setAddResponse}/>
          </Col>
          <Col sm={12} md={8}>
            <Videolist addres={addResponse}/>
          </Col>
          <Col sm={12} md={3}>
            <Category />
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Home