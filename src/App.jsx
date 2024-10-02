import { Card } from '@material-tailwind/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
'./ass'
const App = () => {
  return (
    <div className=' flex justify-center items-center h-screen'>
      <Card className='border'>
        <LazyLoadImage
          alt={"image.alt"}
          height={500}
          wrapperProps={{
            // If you need to, you can tweak the effect transition using the wrapper style.
            style: { transitionDelay: "1s" },
          }}
          src="../logo/rideroz.png" // use normal <img> attributes as props
          width={500} />
      </Card>
    </div>
  )
}

export default App