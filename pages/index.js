/* eslint-disable @next/next/no-page-custom-font */
import { Hero } from '../sections/Hero'
import { Main } from '../sections/Main/Main'

const heroProps = {
  image: { src: '/img/heroimg.png', alt: '', width: 1000, height: 1680 },
  title: 'Agency procurement, outsourced.',
  description: 'Start the process here',
  ctaText: 'Start',
}

const mainProps = {
  image: { src: '/img/video.png', alt: 'video', width: 450, height: 700 },
  heading: 'Managed agency selection',
  subHeading: 'Strengthen your onboarding process',
  cards: [
    {
      image: { src: '/img/brief.png', alt: 'brief', width: 90, height: 70 },
      title: 'Brief',
      description:
        "Complete <strong>brief writing or simple guidance</strong> on what to include, we've got you covered.",
    }, 
    {
      image: { src: '/img/search.png', alt: '', width: 90, height: 70 },
      title: 'Search',
      description:
        'In-depth agency search covering: <strong>criteria matching</strong>, door knocking and due-diligence vetting. ',
    },
    {
      image: { src: '/img/pitch.png', alt: '', width: 90, height: 70 },
      title: 'Pitch',
      description:
        'Comprehensive <strong>pitch management</strong>, including comms, diary management and pitch hosting.',
    },
  ],
}

export default function Home() {
  return (
    <>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          rel='stylesheet'
        />
      </head>
      <div>
        <Hero {...heroProps} />
        <Main {...mainProps} />
        {/** Other sections */}
      </div>
    </>
  )
}
