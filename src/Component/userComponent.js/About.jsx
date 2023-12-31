import React from 'react'

const About = () => {
  return (
    <>
<div className="relative flex flex-col  overflow-hidden">
  <img
    src="/img/beams.jpg"
    alt=""
    className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
    width={1308}
  />
  <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
  <div className="pointer-events-none relative flex gap-10 overflow-hidden">
    <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-10">
      <img
        className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md"
        src="https://source.unsplash.com/s86WhGhp25Y"
        alt=""
      />
      <img
        className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md"
        src="https://source.unsplash.com/NoRsyXmHGpI" 
        alt=""
      />
      <img
        className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md"
        src="https://source.unsplash.com/uEFombN3J5U"
        alt=""
      />
      <img
        className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md"
        src="https://source.unsplash.com/MyVH8UVJDBE"
        alt=""
      />
      <img
        className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md"
        src="https://source.unsplash.com/IoINVPQe738"
        alt=""
      />
    </div>
    <div
      aria-hidden="true"
      className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-10"
    >
      <img
        className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md"
        src="https://source.unsplash.com/s86WhGhp25Y"
        alt=""
      />
      <img
        className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md"
        src="https://source.unsplash.com/NoRsyXmHGpI"
        alt=""
      />
      <img
        className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md"
        src="https://source.unsplash.com/uEFombN3J5U"
        alt=""
      />
      <img
        className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md"
        src="https://source.unsplash.com/MyVH8UVJDBE"
        alt=""
      />
      <img
        className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md"
        src="https://source.unsplash.com/IoINVPQe738"
        alt=""
      />
    </div>
  </div>
  
</div>

    </>
  )
}

export default About
