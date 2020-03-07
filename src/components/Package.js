import React, { Component } from "react";
import { Container, Row, CardColumns, Badge } from "reactstrap";
import TourCard from "./TourCard";
import "../App.css";
import imgCard1 from "../img/begnas.jpg";
import imgCard2 from "../img/dwarika.jpg";
import imgCard3 from "../img/everestpanorama.jpg";
import imgCard4 from "../img/gokarna.jpg";
import imgCard5 from "../img/moskha.jpg";
import imgCard6 from "../img/mountainglory.jpg";
import imgCard7 from "../img/rupakot.jpg";
import imgCard8 from "../img/shangrilla.jpg";
import imgCard9 from "../img/templetree.jpg";
import imgBarobaybay from "../img/tigerpalce.jpg";
const tours = [
  {
    id: 1,
    category: ["Lakeside", "Treking"],
    img: imgCard1,
    alt: "Hiking&Treking",
    title: "Lakeside Begnas Resort",
    subtitle: "Begnas, Pokhara"
  },
  {
    id: 2,
    category: ["lakeside", "Hiking"],
    img: imgCard2,
    alt: "Beautiful Secenary",
    title: "Dwarika group",
    subtitle: "Pokhara, Nepal"
  },
  {
    id: 3,
    category: ["Treking", "Adventure"],
    img: imgCard3,
    alt: "Camping & climbing",
    title: "The Everest Panorama",
    subtitle: "Namche, Sagarmath-Nepal"
  },
  {
    id: 4,
    category: ["Hiking", "Luxury"],
    img: imgCard4,
    alt: "Secenaries",
    title: "Gokaran Forest Resort",
    subtitle: "Luxury & Safaris"
  },
  {
    id: 5,
    category: ["Hiking", "Adventure"],
    img: imgCard5,
    alt: "Hiking",
    title: "Moskha Mustang",
    subtitle: "Mustang, Nepal"
  },
  {
    id: 6,
    category: ["Climbing", "Adventure"],
    img: imgCard6,
    alt: "blah blah",
    title: "Mountain Glory",
    subtitle: "Pokhara, Nepal"
  },
  {
    id: 7,
    category: ["Hiking", "Climbing"],
    img: imgCard7,
    alt: "Scenaries",
    title: "Rupakot Resort",
    subtitle: "Rupakot , Nepal"
  },
  {
    id: 8,
    category: ["Hiking", "Lakeside"],
    img: imgCard8,
    alt: "Lakeside, Sunrise &S unset",
    title: "Shangrilla Hotel",
    subtitle: "Phokara, Nepal"
  },
  {
    id: 9,
    category: ["Camping", "Safari"],
    img: imgCard9,
    alt: "blah blah",
    title: "Temple Tree Hotel",
    subtitle: "Luxury Hotel"
  },
  {
    id: 10,
    category: ["Luxury", "Camping"],
    img: imgBarobaybay,
    alt: "Luxury Safari through the National Park",
    title: "Tiger Palace Luxury Hotel",
    subtitle: "Butwal , Nepal"
  }
];

const itemCategories = [
  "all",
  "Treking",
  "Lakeside",
  "Climbing",
  "Camping",
  "Luxury",
  "Adventure",
  "Safari"
];

class Package extends Component {
  state = {
    cards: [],
    category: "all"
  };

  componentDidMount() {
    this.setState({ cards: tours });
  }

  render() {
    const { cards, category } = this.state;
    return (
      <div className="subComponent-lg" id="packageBody">
        <Container>
          <header className="headerTitle text-center">
            <h1>Tour Packages</h1>
            <p>A Great Collection of Our Tour Packages</p>
          </header>
          <section className="packageBody text-center">
            {itemCategories.map((badge, index) => (
              <Badge
                key={index}
                href=""
                color={badge === category ? "dark" : "light"}
                onClick={() => this.setState({ category: badge })}
              >
                {badge}
              </Badge>
            ))}

            <Row className="text-left">
              <CardColumns>
                {category !== "all"
                  ? cards.map(tourcard => {
                    return tourcard.category.map(catItem => {
                      return catItem === category ? (
                        <TourCard key={tourcard.id} tourcard={tourcard} />
                      ) : null;
                    });
                  })
                  : cards.map(tourcard => (
                    <TourCard key={tourcard.id} tourcard={tourcard} />
                  ))}
              </CardColumns>
            </Row>
          </section>
        </Container>
      </div>
    );
  }
}

export default Package;
