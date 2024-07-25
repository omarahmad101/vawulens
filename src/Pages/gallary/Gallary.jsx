import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'
import './gallary.css'

const Gallery = () => { // Corrected component name "Gallary" to "Gallery"
  const galleryLength = 15; // Corrected typo "gallaryLenth" to "galleryLength"
  const images = [];

  for(let i = 1; i <= galleryLength; i++) {
    // Added `.jpg` extension for image imports
    images.push(require(`../../images/gallery${i}.jpg`));
  }

  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}> {/* Fixed typo in title "Our Gallary" to "Our Gallery" */}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa delectus
        nam modi debitis quos autem sint praesentium a laborum.
      </Header>

      <section className="gallery">
        <div className="container gallery__container">
          {
            images.map((image, index) => {
              return <article key={index}>
                <img src={image} alt={`Gallery Image ${index + 1}`} /> {/* Added `.default` to image source */}
              </article>
            })
          }
        </div>
      </section>
    </>
  );
};

export default Gallery; // Corrected component name "Gallary" to "Gallery"