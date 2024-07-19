import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='container-fluid'>
                <Row className='bg-info p-3'>
                    <Col>
                        <h4>Media Player</h4>
                        <p style={{ textAlign: 'justify' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel libero ac nisl maximus tincidunt. Vestibulum quis ultricies nibh. Nulla interdum elit non elementum porttitor. Quisque nec elit eget urna rutrum molestie ac nec justo. Morbi maximus lorem sed nisl sodales interdum. Nunc vel purus tortor. Nulla vel ante interdum, aliquet tellus non, congue risus. Donec sit amet efficitur diam, ut consequat massa. Quisque suscipit quam elit, eu porttitor nibh tempus vestibulum. In imperdiet dapibus est. Suspendisse mauris tellus, porta non nunc iaculis, maximus condimentum massa. Vivamus elementum mattis convallis. Suspendisse facilisis tortor eget augue rhoncus pulvinar. Pellentesque quis dictum enim.
                        </p>
                    </Col>
                    <Col>
                        <h4 >Links</h4>
                        <ul style={{ listStyle: 'none' }} className='mt-5'>
                            <li>
                                <Link className='text-dark text-decoration-none' to={'/'}>Landing</Link>
                            </li>
                            <li>
                                <Link className='text-dark text-decoration-none' to={'/home'}>Home</Link>
                            </li>
                            <li>
                                <Link className='text-dark text-decoration-none' to={'/his'}>Watch History</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <h4>Contact Us</h4>
                        <p>mediaplayer@gmail.com</p>
                        <p>+91876543210</p>
                        <div>
                            <textarea name="" id="" className='form-control'></textarea>
                            <button className='btn-secondary btn'>Send</button>
                        </div>
                    </Col>
                    <h3 className='text-light text-center'>MediaPlayer 2024 &copy; All rights Resereved</h3>
                </Row>
            </div>
        </>
    )
}

export default Footer