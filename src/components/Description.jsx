import React from 'react';

function Description({ title }) {
  return (
    <section id='description-section'>
      <h1>{title}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut
        cursus erat.
      </p>
      <ul>
        <li>- Phasellus molestie convallis lorem</li>
        <li>- Duis dignissim quam velit</li>
        <li>- Duis at tellus posuere</li>
      </ul>
    </section>
  );
}

export default Description;
