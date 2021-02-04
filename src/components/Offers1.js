import React from 'react'
import {Card} from 'react-bootstrap'

export const Offers1 = () => {
    return (
        <div className="container ">
            <div className="text-center"> <h4>Offers</h4></div>
            <div className="row overflow-auto cardsContainer">
                <div className="cardContainer col-8 col-md-3 p-2">
                    <a>
                    <Card>
                        <Card.Img variant="top" src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/quizzes/fast_food_smarts_rmq/650x350_fast_food_smarts_rmq.jpg" />
                        <Card.Body className="text-center">
                            <Card.Title>Card Title</Card.Title>
                            <h4 className="successHeader">34.87$</h4>
                        </Card.Body>
                    </Card>
                    </a>
                </div>
                <div className="cardContainer col-8 col-md-3 p-2">
                    <Card>
                        <Card.Img variant="top" src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/quizzes/fast_food_smarts_rmq/650x350_fast_food_smarts_rmq.jpg" />
                        <Card.Body className="text-center">
                            <Card.Title>Card Title</Card.Title>
                            <h4 className="successHeader">34.87$</h4>
                        </Card.Body>
                    </Card>
                </div>
                <div className="cardContainer col-8 col-md-3 p-2">
                    <Card>
                        <Card.Img variant="top" src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/quizzes/fast_food_smarts_rmq/650x350_fast_food_smarts_rmq.jpg" />
                        <Card.Body className="text-center">
                            <Card.Title>Card Title</Card.Title>
                            <h4 className="successHeader">34.87$</h4>
                        </Card.Body>
                    </Card>
                </div>
                <div className="cardContainer col-8 col-md-3 p-2">
                    <Card>
                        <Card.Img variant="top" src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/quizzes/fast_food_smarts_rmq/650x350_fast_food_smarts_rmq.jpg" />
                        <Card.Body className="text-center">
                            <Card.Title>Card Title</Card.Title>
                            <h4 className="successHeader">34.87$</h4>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}
