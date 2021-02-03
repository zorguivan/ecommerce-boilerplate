import React from 'react'
import {Carousel} from 'react-bootstrap';

export const Cover = () => {
    return (
        <div className="container">
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src="https://cdn.yosushi.com/r/w-1440/YoSushi/files/75/75c8cc33-53e1-4b5c-9cbf-d10ef05b4d54.637212426050000000.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src="https://cdn.yosushi.com/r/w-1440/YoSushi/files/8b/8bbd883e-d17b-471a-9d8b-636900fca539.637212426490000000.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://cdn.yosushi.com/r/w-1440/YoSushi/files/f5/f517bcc0-8c76-4b00-8820-7aafd0912e10.637212428540000000.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
