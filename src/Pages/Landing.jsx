import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Landing() {
    return (
        <>
            <div className='container-fluid p-5 bg-light'>
                <div>
                    <Row>
                        <Col sm={12} md={6} className='d-flex flex-column justify-content-center p-5'>
                            <h1 className='text-primary'>Media Player</h1>
                            <p>
                                Media Player is an online platform for youtube video uploads and management.

                            </p>
                            <Link to={'/home'} className='btn btn-success border shadow rounded'>Lets Go..</Link>

                        </Col>
                        <Col sm={12} md={6} className='p-5'>
                            <img src="https://cdni.iconscout.com/illustration/premium/thumb/media-player-8044271-6369983.png?f=webp" alt="" />
                        </Col>
                    </Row>
                </div>
                <div className='mt-5 p-5'>
                    <h1 className='text-center text-info'>Features</h1>
                    <div className='d-flex justify-content-around mt-5'>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" height={'200px'} src="https://families-infaith.com/wp-content/uploads/2017/09/video-gallery.gif" />
                            <Card.Body>
                                <Card.Title>Manage videos</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" height={'200px'} src="https://i.pinimg.com/originals/21/80/1f/21801f4aaed85514b1d0f0c1f8fea275.gif" />
                            <Card.Body>
                                <Card.Title>Upload Videos</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" height={'200px'} src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/31a97258737059.5a07705b4b565.gif" />
                            <Card.Body>
                                <Card.Title>Watch History</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>


                    </div>
                </div>
                <div className='mt-5 p-5'>
                    <Row>
                        <Col sm={12} md={8}>
                            <h3 className='text-info'>Simple and Fast</h3>
                            <p style={{ textAlign: 'justify' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis diam hendrerit, sollicitudin leo non, posuere dolor. Donec efficitur congue ex, sed viverra sem cursus in. In eget venenatis metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec commodo aliquet vestibulum. Morbi mi risus, mattis a tortor at, volutpat faucibus mi. In tempus suscipit ex vitae volutpat.
                            </p>
                        </Col>
                        <Col sm={12} md={4}>
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/N3AkSS5hXMA?si=2Ku5iRFJxARH9FC9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Landing