import React, { useEffect, useRef } from 'react';
// types
import type { NextPage } from 'next';
import Head from 'next/head';
import { motion as m } from 'framer-motion';
const HomePage: NextPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>My Homepage</title>
      </Head>
      <h1 className="text-3xl font-bold underline flex flex-col gap-10 "> </h1>
      <div>Hello there! I am Trường</div>
      <h2>a Front-End Developer</h2>
      <div>I am from Ho Chi Minh City, Vietnam</div>
      <div>Welcome to my Page!</div>
      <section>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat
        felis ut nisl venenatis, in suscipit erat pharetra. Duis nec felis
        metus. Morbi a libero id augue auctor tristique quis vel diam. Sed
        vestibulum a
      </section>
      <section>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat
        felis ut nisl venenatis, in suscipit erat pharetra. Duis nec felis
        metus. Morbi a libero id augue auctor tristique quis vel diam. Sed
        vestibulum a
      </section>{' '}
      <section>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat
        felis ut nisl venenatis, in suscipit erat pharetra. Duis nec felis
        metus. Morbi a libero id augue auctor tristique quis vel diam. Sed
        vestibulum a
      </section>{' '}
      <section>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat
        felis ut nisl venenatis, in suscipit erat pharetra. Duis nec felis
        metus. Morbi a libero id augue auctor tristique quis vel diam. Sed
        vestibulum a
      </section>{' '}
      <section>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat
        felis ut nisl venenatis, in suscipit erat pharetra. Duis nec felis
        metus. Morbi a libero id augue auctor tristique quis vel diam. Sed
        vestibulum a
      </section>{' '}
      <m.section
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat
        felis ut nisl venenatis, in suscipit erat pharetra. Duis nec felis
        metus. Morbi a libero id augue auctor tristique quis vel diam. Sed
        vestibulum a
      </m.section>
      <m.section
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat
        felis ut nisl venenatis, in suscipit erat pharetra. Duis nec felis
        metus. Morbi a libero id augue auctor tristique quis vel diam. Sed
        vestibulum a
      </m.section>
      <m.section
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat
        felis ut nisl venenatis, in suscipit erat pharetra. Duis nec felis
        metus. Morbi a libero id augue auctor tristique quis vel diam. Sed
        vestibulum a
      </m.section>
      <m.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        <h2>test</h2>
      </m.div>
      {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat
      felis ut nisl venenatis, in suscipit erat pharetra. Duis nec felis metus.
      Morbi a libero id augue auctor tristique quis vel diam. Sed vestibulum a
      quam et dapibus. Nulla pulvinar lobortis purus, in tempus lorem commodo
      at. Nunc nisl ipsum, pulvinar id placerat quis, tempus vitae nisl. Nunc in
      dictum enim, sit amet eleifend mi. Donec lectus justo, tristique quis
      tortor quis, pellentesque ornare nibh. In porta enim non est finibus
      elementum. Vestibulum ac odio varius, venenatis dui ut, blandit risus.
      Maecenas egestas pharetra lacus, ut condimentum justo aliquet ut. Fusce
      tempor eros risus, sed suscipit lacus fermentum varius. Nullam quis
      aliquet nulla, mattis mollis diam. Donec lacinia at ligula in vehicula.
      Aenean in commodo turpis. Cras varius convallis purus, vel eleifend lacus
      commodo vitae. Aliquam ac interdum metus. Vestibulum eu tempor massa. In
      sem nibh, laoreet pulvinar sem vel, varius bibendum magna. Nunc accumsan
      metus elit, eget rhoncus enim sagittis et. Proin ac mollis nisl.
      Suspendisse consequat nulla pharetra odio scelerisque, id egestas diam
      elementum. Pellentesque habitant morbi tristique senectus et netus et
      malesuada fames ac turpis egestas. Suspendisse aliquam mauris sapien, sed
      auctor enim scelerisque non. Suspendisse sagittis in tortor imperdiet
      efficitur. Orci varius natoque penatibus et magnis dis parturient montes,
      nascetur ridiculus mus. Nunc luctus faucibus turpis ut pellentesque.
      Praesent vel lobortis nisi. Praesent fringilla tortor turpis, vitae
      efficitur purus volutpat at. Etiam in tellus consequat, eleifend risus
      nec, placerat arcu. Praesent interdum magna et iaculis dignissim. Sed et
      ullamcorper dui. Maecenas ac felis vel arcu pulvinar tristique. Integer
      sed accumsan nisi, lobortis aliquam risus. Sed vulputate quis sapien quis
      ultrices. Quisque vulputate metus et purus pulvinar placerat. Nullam vel
      vestibulum dui, eget mollis purus. Nulla placerat ex in lectus euismod
      malesuada. Morbi scelerisque lacus nisi, ultricies mattis ligula ornare
      nec. Mauris felis nulla, imperdiet vitae consectetur iaculis, efficitur in
      nulla. Etiam tellus nisi, rutrum at volutpat a, tempus a ex. Ut consequat
      id massa ut malesuada. Maecenas sed dolor condimentum ex maximus sagittis
      at non velit. In vestibulum, sapien et rhoncus ultricies, mauris velit
      placerat tellus, sed luctus libero mauris ut diam. Orci varius natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam
      luctus sit amet est vel laoreet. Maecenas aliquam magna gravida urna
      tempor dapibus. Integer iaculis consectetur elementum. Pellentesque in
      magna ac ligula bibendum tempus sit amet eu quam. Morbi pulvinar eu ex ac
      luctus. Proin iaculis pellentesque molestie. Fusce cursus diam nisi, et
      porttitor libero pretium nec. Aliquam sed accumsan lectus. Curabitur
      mattis vitae leo ut blandit. Curabitur vehicula tellus in elit cursus,
      quis gravida odio convallis. Donec sollicitudin imperdiet faucibus. Nunc
      eu semper orci. Aenean porttitor lorem nibh, mollis elementum nunc
      imperdiet nec. Aliquam a mattis magna, ut ullamcorper libero.{' '} */}
    </>
  );
};

export default HomePage;
