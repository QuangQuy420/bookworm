import React from "react";
import "./style.scss";

function About(props) {
    return (
        <div className="about">
            <div className="about__title">
                <h5>About Us</h5>
            </div>
            <div className="container about__content">
                <div className="row about__description">
                    <h3 className="about__description-title">Welcome To Bookworm</h3>
                    <span className="about__description-detail">
                        "Bookworm is an independent New York bookstore and
                        language school with locations in Manhattan and
                        Brooklyn. We specialize in travel books and language
                        classes."
                    </span>
                </div>
                <div className="row about__history">
                    <div className="col-6 about__history-story">
                        <h4>Our Story</h4>
                        <span>
                            The name Bookworm was taken from the original name
                            for New York International Airport, which was
                            renamed JFK in December 1963
                        </span>
                        <span>
                            Our Manhattan store has just moved to the West
                            Village. Our new location is 170 7th Avenue South,
                            at the corner of Perry Street
                        </span>
                        <span>
                            From March 2008 through May 2016, the store was
                            located in the Flatiron District
                        </span>
                    </div>

                    <div className="col-6 about__history-story">
                        <h4>Our Vision</h4>
                        <span>
                            One of the last travel bookstores in the country,
                            our Manhattan store carries a range of guidebooks
                            (all 10% off) to suit the needs and tastes of every
                            traveller and budget.
                        </span>
                        <span>
                            We believe that a novel or travelogue can be just as
                            valuable a key to a place as any guidebook, and our
                            well-read, well-travelled staff is happy to make
                            reading recommendations for any traveller, book
                            lover, or gift giver.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
