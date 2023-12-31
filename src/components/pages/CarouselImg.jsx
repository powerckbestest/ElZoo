import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { useParams } from 'react-router-dom';


export default function CarouselImg() {
  const [index, setIndex] = useState(0);
  const [animal, setAnimal] = useState(null)
  const [pics, setPics] = useState([])
  const { id } = useParams();

  const imgStyle = {
    maxWidth: '100%',
    maxHeight: '400px',
    width: 'auto',
    height: 'auto',
    margin: '0 auto', 
    marginTop: '40px',
    display: 'block'
  };

  useEffect(() => {
    axios.post(`/api/animals/${id}`).then((data) => {
      setAnimal(data.data.animal)
      setPics(data.data.animalPics)
    })
  }, [])

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {pics?.map((el) => (
        <Carousel.Item key={el.id}>
          <img style={imgStyle} src={`/img/${el.img}`} alt="img" />
          <Carousel.Caption>
            <h3>{animal?.name}</h3>
            <p>{animal?.desc}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}
